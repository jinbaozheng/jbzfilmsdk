/*
*   return CancelPromiseFactory.createJPromise((resolve, reject) => {
            let isOk = false;
            let _response = null;
            request.request().then((response: AxiosResponse) => {
                isOk = response.status === 200;
                _response = response;
                return response.data;
            }).then((responseJson: { errorCode: number, data: any, message: string }) => {
                if (isOk) {
                    if (!responseJson.errorCode) {
                        if (delegate && delegate.resolveInterceptor){
                            if (delegate.resolveInterceptor(_response, responseJson.data)){
                                resolve(responseJson.data);
                            }
                        } else {
                            resolve(responseJson.data);
                        }
                    } else {
                        if (delegate && delegate.rejectInterceptor){
                            if (delegate.rejectInterceptor(_response, JNetwork.generalError(responseJson.message, responseJson.errorCode))) {
                                reject(JNetwork.generalError(responseJson.message, responseJson.errorCode));
                            }
                        } else {
                            reject(JNetwork.generalError(responseJson.message, responseJson.errorCode));
                        }
                    }
                } else {
                    reject(responseJson);
                }
            }).catch(error => {
                // 请求超时
                if (error.message.indexOf('timeout') != -1) {
                    reject(new Error('请求超时, 请稍后重试'));
                } else {
                    reject(error);
                }
            });
        })
* */

import {INetworkConfig as _IceNetworkConfig} from 'icemilk';
import {UseConfig as UrlUseConfig} from "../unify/JUrlList";
import {UseConfig as DataUseConfig} from "../unify/JDataUnify";

interface INetworkConfig extends _IceNetworkConfig{
    dataMap: any,
    urlMap: any
}

export default class JNetworkConfig{
    static config;
    static setConfig(config: INetworkConfig){
        UrlUseConfig(config.urlMap);
        DataUseConfig(config.dataMap);
        JNetworkConfig.config = config;
    }
}