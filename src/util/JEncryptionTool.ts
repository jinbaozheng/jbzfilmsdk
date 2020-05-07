import md5 from 'md5';

const JBZ_KEY = '&jbzkey=filmjbz2016';
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
    '/search/hotkey': 'M10041',//搜索电影和影院
    '/order/lockseat': 'M10050',       // 请求锁座
    '/order/lockstatus': 'M10051',     // 锁座结果
    '/mine/orderlist': 'M10060',       // 订单列表
    '/mine/orderdetail': 'M10061',     // 订单详情
    '/mine/cltedcinemalist': 'M10062', // 收藏影院列表
    '/mine/cltcinema': 'M10063',       // 收藏影院
    '/mine/celcltcinema': 'M10064',    // 取消收藏影院
    '/mine/lookedfilms': 'H10010',     // 看过的电影
    '/order/cancel': 'M10065',         // 取消订单
    '/system/encrypt': 'M10080',       // 加密接口
    '/system/decrypt': 'M10081',       // 解密接口
    '/system/login': 'M10082',         // 登录登录 - 后续弃用
    '/system/status': 'M10083',        // 支付状态查询
    '/system/confirm/pay': 'M10084',   // 确认支付
    '/get/activity/quota': 'A10010',   // 查询活动资格
    '/get/all/activity': 'A10013',     // 获取所有活动
    '/in/activity/duration': 'A10014', // 是否活动期间
    '/redirect/find/page': 'A10015',   // 是否跳转发现页
    '/account/login': 'C10006',        // 全部银行登录方法
    '/order/confirmorder': 'M10053',   // 确认支付
    '/system/prepay': 'M10052'            // 预支付
};

class JEncryptionTool {
    static sortAsc(o) {
        let n = [];
        let str = '';
        for (let k in o) n.push(k);
        n.sort();
        for (let i = 0; i < n.length; i++) {
            let v = o[n[i]];
            if (v) {
                if ({}.toString.call(v) === '[object Object]') {
                    v = this.sortAsc(v);
                } else if ({}.toString.call(v) === '[object Array]') {
                    v = JSON.stringify(v).replace(/:/g, '=');
                }
            }
            if (v !== null && v !== '') {
                str += '&' + n[i] + '=' + v;
            }
        }
        return str.slice(1);
    }

    static deleteEmptyProperty(obj) {
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

    static encryption(url, obj, bank, methodName) {
        let routerNumber = null;
        if (methodName) {
            routerNumber = methodName;
        } else {
            routerNumber = this.router(url);
        }
        if (!routerNumber) {
            return false;
        }
        let params = obj;
        params.b = md5(bank);
        params.method = routerNumber;
        params = this.deleteEmptyProperty(params);
        const ascii = this.sortAsc(params);
        params.signCode = md5(ascii + JBZ_KEY);
        let jsonString = JSON.stringify(params);
        return {cipher: jsonString};
    }

    static router(url) {
        if (routerPath[url]) {
            return routerPath[url];
        }
        return false;
    }
}

export default JEncryptionTool;