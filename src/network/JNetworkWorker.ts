import {JNetwork} from 'icemilk';
import {INetworkStandardPromiseType} from 'icemilk'
import JConfig, {DEFAULT_CONFIG} from '../unify/JConfig';

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

export const revealNetwork = function<T extends new(...args: any[]) => JNetworkWorker>(networkClass: T, networkName: string = networkClass.name): T{
    if (!JNetworkWorker.isPrototypeOf(networkClass)){
        throw new Error(`${networkName} is not extends of class JNetworkWorker, please extends class JNetworkWorker`);
    }
    let classConfig = JConfig[networkName];
    for (let key in classConfig) {
        if (classConfig.hasOwnProperty(key)){
            let config = classConfig[key];
            let {
                precook,
                cook,
                method,
                url,
                rule,
                params,
                headers,
                bodyData,
                useParams,
                useHeaders,
                useBodyData
            } = {
                ...DEFAULT_CONFIG,
                ...config
            } as any;
            if (!Array.isArray(rule) || rule.length !== 3 || rule.some(_ => _ > 2 || _ < 0)){
                throw new Error(`rule 参数出错`);
            }

            // if (Array.isArray(params)){
            // } else if (typeof params === 'object'){
            // } else {
            // }
            const pickValue = function(refer, from){
                const r = {};
                for (let key in refer){

                    if (refer.hasOwnProperty(key)){
                        let referObj = refer[key];
                        if (typeof referObj === 'boolean'){
                            const required = referObj;
                            if (required && !from.hasOwnProperty(key)){
                                throw new Error(`参数 ${key} 为空`)
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
                                    throw new Error(`参数 ${key} 为空`)
                                }
                            }
                        }
                    }
                }
                return r;
            }

            networkClass.prototype[key] = function (...args) {
                try {
                    params = pickValue.call(this, params, {
                        ...(this as JNetworkWorker).pickInjectParams(),
                        ...(args[rule[0]] || {})
                    });
                    bodyData = pickValue.call(this, bodyData, {
                        ...(this as JNetworkWorker).pickInjectBodyData(),
                        ...(args[rule[1]] || {})
                    });
                    headers = pickValue.call(this, headers, {
                        ...(this as JNetworkWorker).pickInjectHeaders(),
                        ...(args[rule[2]] || {})
                    });
                    return this
                        .useParams(...useParams)
                        .useHeaders(...useHeaders)
                        .useBodyData(...useBodyData)
                        .fetchRequest(method, this.baseUrl, url, params, bodyData, headers)
                        .then((data) => cook(precook(data)));
                } catch (e) {
                    return Promise.reject(e);
                }
            }
        }
    }
    return networkClass;
}