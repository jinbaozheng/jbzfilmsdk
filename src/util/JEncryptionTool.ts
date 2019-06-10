import md5 from 'md5';
import JSEncrypt from 'jsencrypt'
const JBZ_KEY = '&jbzkey=filmjbz2016';
const GONG_YAO = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0p7HYaOqNk9aidIJlYMOhTHjTWdLXCUB2LvMeq0BH5yYI4mGu/A38z1s98C1JWwf4xnAFfBH3+dWfUntsjNeg+JDIEGrwhJAJR84ZN5IJy8WlHbrygfw40/HQ809VGNsOb8fFRBpx0hV/kon2yHwiI/RTVGViceXmE0Ksw+jLNQIDAQAB';
const encrypt = new JSEncrypt();
const b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const b64pad = '=';
const routerPath = [
    '/banner/banners', // 广告
    '/cinema/realtimeseats', // 请求获取实时座位图
    '/cinema/realtimeseatsinfo', //实时座位图详情
    '/cinema/cinemadetail', //影院详情
    '/cinema/films', //影院下某电影排片日期
    '/cinema/filmshowdates', //影院下某电影排片日期
    '/cinema/filmshows',//影院下某电影某天的排片列表
    '/cinema/cinemasbycityordertype',//某城市下影院列表_多条件
    '/film/film',//电影详情
    '/film/hotcomments',//热门评论
    '/film/hotfilms',//热门电影
    '/film/hotfilmspage',//分页热门电影
    '/film/soonfilms',//待映电影
    '/film/soonfilmspage',//分页待映电影
    '/location/cities',//城市列表
    '/location/hotcities',//热门城市
    '/location/city',//请求经纬度获取城市
    '/location/cityinfo',//获取经纬度定位结果
    '/location/citybyid',//根据城市ID获取城市
    '/location/districts',//根据城市Id获取区域
    '/search/searchall',//搜索电影和影院
    '/order/lockseat',//请求锁座
    '/order/lockstatus',//锁座结果
    '/mine/orderlist',//订单列表
    '/mine/orderdetail',//订单详情
    '/mine/cltedcinemalist',//收藏影院列表
    '/mine/cltcinema',//收藏影院
    '/mine/celcltcinema',//取消收藏影院
    '/system/encrypt',//民生加密
    '/system/decrypt',//民生解密
    '/cmbc/login',//民生登录
];
const routerName = [
    'M10001',// 广告
    'M10010',// 请求获取实时座位图
    'M10011',//实时座位图详情
    'M10012', //影院详情
    'M10013', //影院下某电影排片日期
    'M10014', //影院下某电影排片日期
    'M10015',//影院下某电影某天的排片列表
    'M10016',//某城市下影院列表_多条件
    'M10020',//电影详情
    'M10021',//热门评论
    'M10022',//热门电影
    'M10023',//分页热门电影
    'M10024',//待映电影
    'M10025',//分页待映电影,
    'M10030',//城市列表
    'M10031',//热门城市
    'M10032',//请求经纬度获取城市
    'M10033',//获取经纬度定位结果
    'M10034',//根据城市ID获取城市
    'M10035',//根据城市Id获取区域
    'M10040',//搜索电影和影院
    'M10050',//请求锁座
    'M10051',//锁座结果
    'M10060',//订单列表
    'M10061',//订单详情
    'M10062',//收藏影院列表
    'M10063',//收藏影院
    'M10064',//取消收藏影院
    'M10080',//民生加密
    'M10081',//民生解密
    'M10082',//民生登录
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
        let lt = '';
        let ct = '';
        if (string.length > maxLength) {
            lt = string.match(/.{1,117}/g);
            lt.forEach(function(entry) {
                var t1 = k.encrypt(entry);
                ct += t1 ;
            });
            return hex2b64(ct);
            // return ct;
            // return window.btoa(ct);
        }
        let t = k.encrypt(string);
        let y = hex2b64(t);
        // let y = t;
        // let y = window.btoa(t);
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
    static encryption(url, obj, b){
        console.log('url:' + url);
        console.log('obj:' + JSON.stringify(obj));
        console.log('b:' + b);
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
        jsonString = window.btoa(unescape(encodeURIComponent(jsonString)));
        // 加密
        encrypt.setPublicKey(GONG_YAO);
        const encryption = encrypt.encryptLong(jsonString);
        // 简单处理座位图
        if (url === '/cinema/realtimeseats' || url === '/cinema/realtimeseatsinfo'){
            return {
                cipher: encryption,
                type: obj.type
            };
        }
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