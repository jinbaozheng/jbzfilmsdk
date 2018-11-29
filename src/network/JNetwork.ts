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


/**
 * 没有登录异常
 * @param code
 * @returns {any}
 */
/*
*
*
static notLoginError(code: number): Error {
    let error: Error = new Error('NotLogin');
    Reflect.defineProperty(error, 'errorCode', {value: code});
    return error;
}
* */