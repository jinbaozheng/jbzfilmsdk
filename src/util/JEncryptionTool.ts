import md5 from 'md5';
import 'jsencrypt'
const JBZ_KEY = '&jbzkey=filmjbz2016';
const GONG_YAO = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0p7HYaOqNk9aidIJlYMOhTHjTWdLXCUB2LvMeq0BH5yYI4mGu/A38z1s98C1JWwf4xnAFfBH3+dWfUntsjNeg+JDIEGrwhJAJR84ZN5IJy8WlHbrygfw40/HQ809VGNsOb8fFRBpx0hV/kon2yHwiI/RTVGViceXmE0Ksw+jLNQIDAQAB';
class JEncryptionTool {
    static sortAsc(o){
        let n = [];
        let str = '';
        for(let k in o) n.push(k);
        n.sort();
        for(let i = 0; i < n.length; i++){
            let v = o[n[i]];
            if(v){
                if({}.toString.call(v) === '[object Object]'){
                    v = this.sortAsc(v);
                }
                else if({}.toString.call(v) === '[object Array]'){
                    v = JSON.stringify(v).replace(/:/g, '=');
                }
            }
            if (v !== null && v !== ''){
                str += '&' + n[i] + '=' + v;
            }
        }
        return str.slice(1);
    }
    static deleteEmptyProperty(obj){
        let object = obj;
        for (let i in object) {
            let value = object[i];
            if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    if (value.length === 0) {
                        delete object[i];
                        continue;
                    }
                }
                this.deleteEmptyProperty(value);
            } else {
                if (value === '' || value === null || value === undefined) {
                    delete object[i];
                }
            }
        }
        return object;
    }
    static Encryption(obj){
        let params = obj;
        // 删除空字段
        params = this.deleteEmptyProperty(params);
        // ascii排序，升序
        const jsonString = this.sortAsc(params);
        // 拼接并加密
        const signCode = md5(jsonString + JBZ_KEY);
        // 存json中
        params.signCode = signCode;
        //转换成字符串json
        const value = JSON.stringify(params);
        // 加密
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(GONG_YAO);
        const encryption = encrypt.encrypt(value);
        return encryption;
    }
}
export default JEncryptionTool;