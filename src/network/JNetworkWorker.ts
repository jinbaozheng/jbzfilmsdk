import {JNetworkRoot, JNetworkError} from 'icemilk';
import JNetworkConfig from "./JNetworkConfig";
import {AxiosResponse} from 'axios';
import {INetworkStandardPromiseType} from 'icemilk'
export default class JNetworkWorker extends JNetworkRoot{
    constructor(config?){
        config = {...JNetworkConfig.config, ...config};
        console.log(JNetworkConfig.config)
        super(config);
    }

    generalError(){
    }

    POST_DATA(url: string, paras?: object, headers?: object, otherObject?: object): Promise<any>{
        return this._prefixPromise('POST', url, paras, headers, otherObject);
    }

    GET_DATA(url: string, paras?: object, headers?: object, otherObject?: object): Promise<any>{
        return this._prefixPromise('GET', url, paras, headers, otherObject);
    }

    POST(url: string, paras?: object, headers?: object, otherObject?: object): INetworkStandardPromiseType<AxiosResponse | JNetworkError>{
        throw new Error(`JNetworkWorker's POST method is deprecated, please use POST_DATA method`);
    }

    GET(url: string, paras?: object, headers?: object, otherObject?: object): INetworkStandardPromiseType<AxiosResponse | JNetworkError>{
        throw new Error(`JNetworkWorker's GET method is deprecated, please use GET_DATA method`);
    }

    _prefixPromise(method: string, url: string, paras?: object, headers?: object, otherObject?: object): Promise<any>{
        let doIt = null;
        if (method === 'GET'){
            doIt = super.GET(url, paras, headers, otherObject)
        }

        if (method === 'POST'){
            doIt = super.POST(url, paras, headers, otherObject)
        }

        let isOk, _response;
        return doIt.then((response: AxiosResponse) => {
            isOk = response.status === 200;
            _response = response;
            if (!isOk){
                console.log('失败');
                throw new JNetworkError(response.statusText);
            }
            return response.data;
        }).then((responseJson: { errorCode: number, data: any, message: string }) => {
            if (!responseJson.errorCode) {
                if (this.delegate && this.delegate.resolveInterceptor){
                    if (this.delegate.resolveInterceptor(_response, responseJson.data)){
                        return responseJson.data;
                    }
                } else {
                    return responseJson.data;
                }
            } else {
                if (this.delegate && this.delegate.rejectInterceptor){
                    if (this.delegate.rejectInterceptor(_response, new JNetworkError(responseJson.message, responseJson.errorCode))) {
                        throw new JNetworkError(responseJson.message, responseJson.errorCode);
                    }
                } else {
                    throw new JNetworkError(responseJson.message, responseJson.errorCode);
                }
            }
        }).catch(error => {
            // 请求超时
            if (error.message.indexOf('timeout') != -1) {
                throw new JNetworkError('请求超时, 请稍后重试');
            } else {
                throw error;
            }
        });
    }

    prefixPromise(url, paras?: object, headers?: object, otherObject?: object){
        try{
            return this._prefixPromise('POST', url, paras, headers, otherObject)
        } catch (e) {
            console.log(e);
        }
    }
}