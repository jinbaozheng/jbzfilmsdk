import md5 from 'md5';
import JSEncrypt from 'jsencrypt'
const JBZ_KEY = '&jbzkey=filmjbz2016';
const GONG_YAO = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0p7HYaOqNk9aidIJlYMOhTHjTWdLXCUB2LvMeq0BH5yYI4mGu/A38z1s98C1JWwf4xnAFfBH3+dWfUntsjNeg+JDIEGrwhJAJR84ZN5IJy8WlHbrygfw40/HQ809VGNsOb8fFRBpx0hV/kon2yHwiI/RTVGViceXmE0Ksw+jLNQIDAQAB';
const encrypt = new JSEncrypt();
const b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const b64pad = '=';
const routerPath = [
    '/banner/banners'
];
const routerName = [
    'M10001'
];
function hex2b64(h:string) {
    let i;
    let c;
    let ret = '';
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 === h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += b64map.charAt(c << 2);
    }
    else if (i + 2 === h.length) {
        c = parseInt(h.substring(i, i + 2), 16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) {
        ret += b64pad;
    }
    return ret;
}
JSEncrypt.prototype.encryptLong = function(string: string) {
    let k = this.getKey();
    let maxLength = (((k.n.bitLength()+7)>>3)-11);
    // var maxLength = 117;
    try {
        let lt = ''
        let ct = '';
        if (string.length > maxLength) {
            lt = string.match(/.{1,117}/g);
            lt.forEach(function(entry) {
                var t1 = k.encrypt(entry);
                ct += t1 ;
            });
            return hex2b64(ct);
        }
        let t = k.encrypt(string);
        let y = hex2b64(t);
        return y;
    } catch (ex) {
        return false;
    }
}
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
    static encryption(obj){
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
        encrypt.setPublicKey(GONG_YAO);
        const encryption = encrypt.encryptLong(value);
        console.log(value)
        console.log(encryption)
        return {cipher: encryption};
    }
    static router(url){
        for (let i = 0; i < routerPath.length; i++) {
            if (routerPath[i] === url){
                return {method: routerName[i]}
            }
        }
        return false;
    }
}
export default JEncryptionTool;