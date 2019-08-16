import {JNetwork, INetworkStandardPromiseType, JNetworkGroup, JToolObject} from 'icemilk';
import JConfig from '../unify/JConfig';
import JEncryptionTool from './../util/JEncryptionTool';

const BUS_GW = '/bus/gw';
const DEFAULT_NETWORK_CONFIG = {
    precook: (_) => _.data,
    cook: (_) => _,
    method: 'get',
    url: '',
    book: null,
    params: {},
    headers: {},
    bodyData: {},
    useParams: [],
    useHeaders: [],
    useBodyData: [],
    rule: [0, 1, 2],
    encryption: null
};
let _config: object = JConfig;
export default class JNetworkWorker extends JNetwork{
    fetchRequest(...args): INetworkStandardPromiseType<any>{
        return super.fetchRequest.apply(this, Array.from(args)).then((res) => {
            if (!res.data.errorCode){
                return res.data;
            } else {
                throw new Error(res.data.message);
            }
        })
    }
}

class JNetworkWorkerGroup extends JNetworkGroup{
    fetchRequest(...args): INetworkStandardPromiseType<any>{
        return super.fetchRequest.apply(this, Array.from(args)).then((res) => {
            if (!res.data.errorCode){
                return res.data;
            } else {
                throw new Error(res.data.message);
            }
        })
    }
}

export const configPicker = (picker: any|object|(() => object)) => {
    if (!picker){
        return;
    }
    if (typeof picker === 'function'){
        _config = picker();
    } else if (typeof picker === 'object'){
        _config = picker;
    }
}

export const revealNetwork = function<T extends new(...args: any[]) => JNetworkWorker>(networkClass: T, networkName: string = networkClass.name, config?: object): T{
    if (!JNetworkWorker.isPrototypeOf(networkClass)){
        throw new Error(`${networkName} is not extends of class JNetworkWorker, please extends class JNetworkWorker`);
    }
    let classConfig = config ? config[networkName] : _config[networkName];
    // config[DEFAULT_NETWORK_CONFIG]为用户默认配置 _config['DEFAULT_NETWORK_CONFIG'] 为SDK默认配置
    // 目前没有实现revealNetwork内部默认配置
    let defaultNetworkConfig = {
        ...DEFAULT_NETWORK_CONFIG,
        ...(config ? config['DEFAULT_NETWORK_CONFIG'] : _config['DEFAULT_NETWORK_CONFIG'])
    };
    if (!classConfig){
        if (config){
            throw new Error(`network ${networkName} not found in config ${JSON.stringify(config)}`)
        } else {
            throw new Error(`network ${networkName} not found in default_config`);
        }
    }
    const pickValue = function(refer: object, from: object, injectFrom: Array<string|object>, url){
        const r = {};
        for (let key in refer){
            if (refer.hasOwnProperty(key)){
                let referObj = refer[key];
                if (typeof referObj === 'boolean'){
                    const required = referObj;
                    if (required && !from.hasOwnProperty(key)){
                        let hasKey = injectFrom.some(_ => {
                            if (typeof _ === "string"){
                                return _ === key;
                            }

                            if (typeof _ === "object"){
                                return _.hasOwnProperty(key)
                            }
                        });
                        if (!hasKey){
                            throw new Error(`url: ${url} 参数 ${key} 为空`)
                        }
                    }
                    if (from.hasOwnProperty(key)){
                        r[key] = from[key];
                    }
                } else if (typeof referObj === 'object'){
                    const {required} = referObj;
                    if (from.hasOwnProperty(key)){
                        r[key] = referObj.cook ? referObj.cook(from[key]) : from[key];
                    } else if (required){
                        if (referObj.hasOwnProperty('default')){
                            r[key] = referObj.cook ? referObj.cook(referObj['default']) : referObj['default'];
                        } else {
                            if (!injectFrom.hasOwnProperty(key)){
                                throw new Error(`url: ${url} 参数 ${key} 为空`)
                            }
                        }
                    }
                }
            }
        }
        return r;
    };

    for (let key in classConfig) {
        if (classConfig.hasOwnProperty(key)){
            let config = classConfig[key];
            let {
                precook,
                cook,
                method,
                url,
                book,
                rule,
                params,
                headers,
                bodyData,
                useParams,
                useHeaders,
                useBodyData,
                encryption
            } = {
                ...defaultNetworkConfig,
                ...config
            } as any;
            if (!Array.isArray(rule) || rule.length !== 3 || rule.some(_ => _ > 2 || _ < 0)){
                throw new Error(`rule 参数出错`);
            }
            // if (Array.isArray(params)){
            // } else if (typeof params === 'object'){
            // } else {
            // }

            if (networkClass.prototype.hasOwnProperty(key)){
                continue;
            }
            networkClass.prototype[key] = function (...args) {
                // 解决url 闭包被修改，初始化地址
                url = config.url;
                try {
                    let networkArgs = args;
                    if (book){
                        networkArgs = [{}, {}, {}];
                        for (let i = 0; i < book.length; i++){
                            let page = book[i];
                            let isOptional = /^.*\?$/.test(page);
                            if (isOptional){
                                page = page.slice(0, -1)
                            }
                            for (let j = 0; j < 3; j++){
                                const valueObj: object = [params, bodyData, headers][rule[j]];
                                if (valueObj.hasOwnProperty(page)){
                                    networkArgs[j][page] = args[i];
                                }
                            }
                        }
                    }
                    let paramsValue = pickValue.call(this, params, {
                        ...(this as JNetworkWorker).pickInjectParams(),
                        ...(networkArgs[rule[0]] || {})
                    }, useParams, url);
                    let bodyDataValue = pickValue.call(this, bodyData, {
                        ...(this as JNetworkWorker).pickInjectBodyData(),
                        ...(networkArgs[rule[1]] || {})
                    }, useBodyData, url);
                    let headersValue = pickValue.call(this, headers, {
                        ...(this as JNetworkWorker).pickInjectHeaders(),
                        ...(networkArgs[rule[2]] || {})
                    }, useHeaders, url);
                    if (encryption && JToolObject.getObjOrFuncResult(encryption.required)){
                        const {inType} = this.otherContent || {inType: undefined};
                        if (!inType){
                            throw new Error('Not found inType property, Do you forget config inType value in otherContent?');
                        }
                        let noUndefinedParams = {};
                        for (const key in paramsValue){
                            if (paramsValue.hasOwnProperty(key) && paramsValue[key] !== undefined){
                                noUndefinedParams[key] = paramsValue[key]
                            }
                        }
                        const {paramsInterceptor = (_) => ({location: '02'})} = encryption;
                        let paramsObj = JEncryptionTool.encryption(url, paramsInterceptor(noUndefinedParams, this), inType);
                        if (!paramsObj){
                            throw new Error(`地址 ${url} 加密过程异常`);
                        }
                        url = BUS_GW;
                        paramsValue = {
                            ...paramsObj,
                        };
                    }
                    let pizza = {
                        params: paramsValue,
                        bodyData: bodyDataValue,
                        headers: headersValue
                    };
                    return this
                        .createGroup({
                            groupClass: JNetworkWorkerGroup
                        })
                        .useParams(...useParams, ...this.extraParams)
                        .useHeaders(...useHeaders, ...this.extraHeaders)
                        .useBodyData(...useBodyData, ...this.extraBodyData)
                        .fetchRequest(method, this.baseUrl, url, paramsValue, bodyDataValue, headersValue)
                        .then((data) => cook(precook(data, pizza), pizza));
                } catch (e) {
                    return Promise.reject(e);
                }
            }
        }
    }
    return networkClass;
}