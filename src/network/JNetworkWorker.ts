import {JNetworkRoot, JNetworkError} from 'icemilk';
import JNetworkConfig from "./JNetworkConfig";
import {AxiosResponse} from 'axios';
export default class JNetworkWorker extends JNetworkRoot{
    constructor(config){
        config = {...config, ...JNetworkConfig.config};
        super(config);
    }

    static instance(): any{
        return super.instance();
    }

    generalError(){
    }

    prefixPromise(url, paras?: object, headers?: object, options?: object){
        let isOk, _response;
        try{
            return this.POST(url, paras, headers).then((response: AxiosResponse) => {
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
        } catch (e) {
            console.log(e);
        }
    }
}