import md5 from 'md5';
const JBZ_KEY = '&jbzkey=filmjbz2016';
// const GONG_YAO = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0p7HYaOqNk9aidIJlYMOhTHjTWdLXCUB2LvMeq0BH5yYI4mGu/A38z1s98C1JWwf4xnAFfBH3+dWfUntsjNeg+JDIEGrwhJAJR84ZN5IJy8WlHbrygfw40/HQ809VGNsOb8fFRBpx0hV/kon2yHwiI/RTVGViceXmE0Ksw+jLNQIDAQAB';
// const SI_YAO = 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALSnsdho6o2T1qJ0gmVgw6FMeNNZ0tcJQHYu8x6rQEfnJgjiYa78DfzPWz3wLUlbB/jGcAV8Eff51Z9Se2yM16D4kMgQavCEkAlHzhk3kgnLxaUduvKB/DjT8dDzT1UY2w5vx8VEGnHSFX+SifbIfCIj9FNUZWJx5eYTQqzD6Ms1AgMBAAECgYBPqqgmHFZbave7GpAqbtq2tgeOhM0S4VSZCalTPAgT7V57ioGzbhopA7RkAxelgsxoK/JYqNcvuPA422Hsg8vOxj55EYfT9C0cP0IeCnc74r1nyWIobBFDy0j7j48ktW20/nd4WwUGOkRpbmuHiawGUjH4XCmUpG5GVCWbDdKynQJBANnJ8G3tUcUrSnfx9kZfpcqrfuA33NL0Rv2a7AXQxNus7Rc0/yHje9JYDj3TpybSDhzQ47u1bj41G1Y2k70AmP8CQQDUWeEjnvlxX40JXJcLngcfEw72ussUxBPGjEOWJCGrqQCUULR8Cd0SCyDk/R7ydeEO2dugE0UDAjugsaYTP4fLAkAoMYOk1fqUV+P7dPVNkZNobvQQb17as+hyH2hVvmzGWgi7krVPTMtqS4P9VxVvLa8bFFYjK124L1bnN1VWuUiDAkAxd7ql1KvhSFQPoT0inK6mA4eR3JPgg4jj0NsRx9r8JUOYSXCyEI4qXONN1NV3wBQspH2wPazu9X80gQ3iIAOfAkEAkAzm56WIq+c7i5W/GLzqjlbFtlYAk8NKMyZX5Od4yjtFREslWeC78YtvzB5dkXbdakq0PLTrmKGhTrhui+VyIg==';
import jsencrypt_1 from 'jsencrypt';
const b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const b64pad = '=';
const routerPath = {
    '/banner/banners': 'M10001', // 广告
    '/cinema/realtimeseats': 'M10010', // 请求获取实时座位图
    '/cinema/realtimeseatsinfo': 'M10011', //实时座位图详情
    '/cinema/cinemadetail': 'M10012', //影院详情
    '/cinema/films': 'M10013', //影院下某电影排片日期
    '/cinema/filmshowdates': 'M10014', //影院下某电影排片日期
    '/cinema/filmshows': 'M10015',//影院下某电影某天的排片列表
    '/cinema/cinemasbycityordertype': 'M10016',//某城市下影院列表_多条件
    '/film/film': 'M10020',//电影详情
    '/film/hotcomments': 'M10021',//热门评论
    '/film/hotfilms': 'M10022',//热门电影
    '/film/hotfilmspage': 'M10023',//分页热门电影
    '/film/soonfilms': 'M10024',//待映电影
    '/film/soonfilmspage': 'M10025',//分页待映电影
    '/location/cities': 'M10030',//城市列表
    '/location/hotcities': 'M10031',//热门城市
    '/location/city': 'M10032',//请求经纬度获取城市
    '/location/cityinfo': 'M10033',//获取经纬度定位结果
    '/location/citybyid': 'M10034',//根据城市ID获取城市
    '/location/districts': 'M10035',//根据城市Id获取区域
    '/search/searchall': 'M10040',//搜索电影和影院
    '/order/lockseat': 'M10050',//请求锁座
    '/order/lockstatus': 'M10051',//锁座结果
    '/mine/orderlist': 'M10060',//订单列表
    '/mine/orderdetail': 'M10061',//订单详情
    '/mine/cltedcinemalist': 'M10062',//收藏影院列表
    '/mine/cltcinema': 'M10063',//收藏影院
    '/mine/celcltcinema': 'M10064',//取消收藏影院
    '/order/cancel': 'M10065',//取消订单
    '/system/encrypt': 'M10080',//民生加密
    '/system/decrypt': 'M10081',//民生解密
    '/system/login': 'M10082',//民生登录
    '/system/status': 'M10083',//民生支付状态查询
    '/system/confirm/pay': 'M10084',//民生确认支付
    '/get/activity/quota': 'A10010',//查询活动资格
    '/get/all/activity': 'A10013',//获取所有活动
    '/in/activity/duration': 'A10014',//是否活动期间
    '/redirect/find/page': 'A10015',//是否跳转发现页
    '/order/confirmorder': 'M10052' // 确认支付
};
let BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz';
function int2char(n) {
    return BI_RM.charAt(n);
}
function b64tohex(s) {
    let ret = '';
    let i;
    let k = 0; // b64 state, 0-3
    let slop = 0;
    for (i = 0; i < s.length; ++i) {
        if (s.charAt(i) === b64pad) {
            break;
        }
        let v = b64map.indexOf(s.charAt(i));
        if (v < 0) {
            continue;
        }
        if (k === 0) {
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 1;
        }
        else if (k === 1) {
            ret += int2char((slop << 2) | (v >> 4));
            slop = v & 0xf;
            k = 2;
        }
        else if (k === 2) {
            ret += int2char(slop);
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 3;
        }
        else {
            ret += int2char((slop << 2) | (v >> 4));
            ret += int2char(v & 0xf);
            k = 0;
        }
    }
    if (k === 1) {
        ret += int2char(slop << 2);
    }
    return ret;
}
function hex2b64(h) {
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
function encryptPublicLong(text, publicKey) {
    let rsa = new jsencrypt_1['default']();
    rsa.setPublicKey(publicKey);
    let key = rsa.getKey();
    let ct = "";
    // RSA每次加密117bytes，需要辅助方法判断字符串截取位置
    // 1.获取字符串截取点
    let bytes = new Array();
    bytes.push(0);
    let byteNo = 0;
    let len = text.length;
    let c;
    let temp = 0;
    for (let i = 0; i < len; i++) {
        c = text.charCodeAt(i);
        if (c >= 0x010000 && c <= 0x10FFFF) { // 特殊字符，如Ř，Ţ
            byteNo += 4;
        }
        else if (c >= 0x000800 && c <= 0x00FFFF) { // 中文以及标点符号
            byteNo += 3;
        }
        else if (c >= 0x000080 && c <= 0x0007FF) { // 特殊字符，如È，Ò
            byteNo += 2;
        }
        else { // 英文以及标点符号
            byteNo += 1;
        }
        if ((byteNo % 117) >= 114 || (byteNo % 117) === 0) {
            if (byteNo - temp >= 114) {
                bytes.push(i);
                temp = byteNo;
            }
        }
    }
    // 2.截取字符串并分段加密
    if (bytes.length > 1) {
        for (let i = 0; i < bytes.length - 1; i++) {
            let str = void 0;
            if (i === 0) {
                str = text.substring(0, bytes[i + 1] + 1);
            }
            else {
                str = text.substring(bytes[i] + 1, bytes[i + 1] + 1);
            }
            let t1 = key.encrypt(str);
            ct += t1;
        }
        if (bytes[bytes.length - 1] !== text.length - 1) {
            let lastStr = text.substring(bytes[bytes.length - 1] + 1);
            ct += key.encrypt(lastStr);
        }
        return (hex2b64(ct));
    }
    let t = key.encrypt(text);
    return hex2b64(t);
}
function decryptPrivateLong(text, privateKey) {
    let rsa = new jsencrypt_1['default']();
    rsa.setPrivateKey(privateKey);
    let key = rsa.getKey();
    text = b64tohex(text);
    let maxLength = ((key.n.bitLength() + 7) >> 3);
    try {
        if (text.length > maxLength) {
            let ct1_1 = "";
            let lt = text.match(/.{1,256}/g);
            if (lt) {
                lt.forEach(function (entry) {
                    let t1 = key.decrypt(entry);
                    ct1_1 += t1;
                });
            }
            return ct1_1;
        }
        let y = key.decrypt(text);
        return y;
    }
    catch (ex) {
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
            if (typeof value === 'object' && value !== null) {
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
    static encryption(url, obj, b){
        let routerNumber = this.router(url);
        if (!routerNumber) {
            return false;
        }
        let params = obj;
        params.b = md5(b);
        params.method = routerNumber.method;
        // 删除空字段
        params = this.deleteEmptyProperty(params);
        // ascii排序，升序
        const ascii = this.sortAsc(params);
        // 拼接并加密
        const signCode = md5(ascii + JBZ_KEY);
        // 存json中
        params.signCode = signCode;
        //转换成字符串json
        let jsonString = JSON.stringify(params);
        // 简单处理座位图
        return {cipher: jsonString};
    }
    static router(url){
        if (routerPath[url]) {
            return {method: routerPath[url]}
        }
        return false;
    }
}
export default JEncryptionTool;