import {INetworkStandardPromiseType, JNetworkRoot, JToolDate, JToolObject as ObjectTool} from 'icemilk';
import {CinemaFilterParas, LocationParas, CoordinateParas, PageParas, SeatParas} from "./paras"
import FilmModel from "../src/model/FilmModel";

export declare class JNetworkAccount extends JNetworkWorker {
    /**
     * 用户登录信息
     * @param mobile 用户账号
     * @param password 用户密码
     * @returns {*} 返回请求promise
     */
    accountLogin(mobile, password): Promise<any>

    /**
     * 用户注销信息
     * @param sessionId 用户信息
     * @returns {*} 返回请求promise
     */
    accountLogout(sessionId): Promise<any>

    accountVerifyCode(mobile, type): Promise<any>

    accountRegister(mobile, verifyCode, password): Promise<any>

    accountUpdatepass(mobile, verfyCode, password): Promise<any>
}

export declare class JNetworkBanner extends JNetworkWorker {

    /**
     * Banners广告图
     * @param location banner的位置
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */

    bannerList(location, cityId): Promise<any>
}

export declare class JNetworkCinema extends JNetworkWorker {
    /**
     * 影院详情
     * @param cinemaId 影院id
     * @param openId 用户唯一标识
     * @returns {*} 返回请求promise
     */
    cinemaDetail(cinemaId, openId?): Promise<any>

    /**
     * 影院列表
     * @param location 城市信息
     * @param cinemaFilter 影院筛选信息，
     * @returns {*} 返回请求promise
     */
    cinemasList(location: LocationParas, cinemaFilter: CinemaFilterParas): Promise<any>

    /**
     * 影院的电影列表
     * @param cinemaId 影院id
     * @returns {*} 返回请求promise
     */
    cinemaScreeningFilmList(cinemaId): Promise<any>

    /**
     * 影院影片排片日期
     * @param cinemaId 影院id
     * @param filmId 影片id
     * @returns {*} 返回请求promise
     */
    cinemaScreeningDateList(cinemaId, filmId): Promise<any>

    /**
     * 影院影片排片
     * @param cinemaId 影院id
     * @param filmId 影片id
     * @param date 日期
     * @returns {*} 返回请求promise
     */
    cinemaScreeningItems(cinemaId, filmId, date): Promise<any>

    /**
     * 请求实时座位图
     * @param type 票务商
     * @param paras 影院排片等信息
     * @returns {*} 返回请求promise
     */
    cinemaSmartSeats(type, paras: SeatParas): Promise<any>

    /**
     * 实时座位图结果 (异步处理)
     * @param requestId 请求Id，该值为申请实时座位图接口返回的requestId
     * @returns {*} 返回请求promise
     */
    realTimeSeatsInfo(requestId): Promise<any>
}

export declare class JNetworkCity extends JNetworkWorker {

    /**
     * 请求城市定位
     * @param coordinate 经纬度信息
     * @returns {*} 返回请求promise
     */
    cityByCoordinate(coordinate: CoordinateParas): Promise<any>

    /**
     * 获取定位结果
     * @param requestId 请求定位接口返回的requestId
     * @returns {*} 返回请求promise
     */
    locationCityInfo(requestId): Promise<any>

    /**
     * 热门城市
     * @returns {*} 返回请求promise
     */
    cityHotList(): Promise<any>

    /**
     * 城市列表
     * @returns {*} 返回请求promise
     */
    cityList(): Promise<any>

    /**
     * 根据id查城市信息
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */
    cityById(cityId): Promise<any>

    /**
     * 根据城市id获取地区列表返回结果处理过
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */
    cityDistrictList(cityId): Promise<any>

    /**
     * 根据城市id获取地区列表
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */
    districts(cityId): Promise<any>


}

export declare class JNetworkFilm extends JNetworkWorker {
    /**
     * 热门影片(Top10及总数)
     * @returns {*} 返回请求promise
     */
    filmHotfilms(): Promise<any>

    /**
     * 热门影片部份信息
     * @param page 分页信息(页码、条数)
     * @returns {*} 返回请求promise
     */
    hotFilmsPage(page: PageParas): Promise<any>

    /**
     * 待映影片(Top10及总数)
     * @returns {*} 返回请求promise
     */
    filmWaitfilms(): Promise<any>

    /**
     * 待映影片(Top10及总数)
     * @param page 分页信息(页码、条数)
     * @returns {*} 返回请求promise
     */
    soonFilmsPage(page: PageParas): Promise<any>

    /**
     * 影片详情
     * @param filmId 影片id
     * @returns {*} 返回请求promise
     */
    filmFilm(filmId): Promise<any>

    /**
     * 影片评论
     * @param filmId 影片id
     * @returns {*} 返回请求promise
     */
    filmHotComments(filmId): Promise<any>
}

export declare class JNetworkMine extends JNetworkWorker {
    /**
     * 取消收藏影院
     * @param openId 用户唯一信息
     * @param cinemaId 影院id
     * @returns {*} 返回请求promise
     */
    celCltCinema(openId, cinemaId): Promise<any>

    /**
     * 收藏影院
     * @param openId 用户唯一信息
     * @param cinemaId 影院id
     * @param cinemaName 影院名
     * @param cinemaAddress 影院地址
     * @returns {*} 返回请求promise
     */
    cltCinema(openId, cinemaId, cinemaName, cinemaAddress): Promise<any>

    /**
     * 收藏影院列表
     * @param openId 用户唯一信息
     * @param page 分页
     * @returns {*} 返回请求promise
     */
    cltEdCinemaList(openId, page: PageParas): Promise<any>

    /**
     * 订单列表
     * @param openId 用户唯一信息
     * @param page 分页
     * @param type 订单类型（01:待支付/02:已支付/03:退款/不传:全部）
     * @returns {*} 返回请求promise
     */
    orderList(openId, page: PageParas, type): Promise<any>

    /**
     * 删除订单
     * @param openId 用户唯一信息
     * @param orderId 订单id
     * @returns {*} 返回请求promise
     */
    orderDelete(openId, orderId): Promise<any>

    /**
     * 取消订单
     * @param openId 用户唯一信息
     * @param orderId 订单id
     * @returns {*} 返回请求promise
     */
    orderCancel(openId, orderId): Promise<any>

    /**
     * 订单详情
     * @param openId 用户唯一信息
     * @param orderId 订单id
     * @returns {*} 返回请求promise
     */
    orderDetail(openId, orderId): Promise<any>
}

export declare class JNetworkOther extends JNetworkWorker {
}

export declare class JNetworkSearch extends JNetworkWorker {
    /**
     * 影片、影院搜索
     * @param cityId 城市id
     * @param key 搜索关键字
     * @param coordinate 经纬度
     * @param page 分页信息
     * @returns {*} 返回请求promise
     */
    searchAll(cityId, key, coordinate: CoordinateParas, page: PageParas): Promise<any>

    /**
     * 影片热门搜索列表
     * @returns {*} 返回请求promise
     */
    hotQuery(): Promise<any>
}

export declare class JNetworkTrade extends JNetworkWorker {
    /**
     * 锁座
     * @returns {*} 返回请求promise
     */
    lockSeat(openId, mobile, showId, type, cinemaId, filmId, seatIds, count, cityId, seatInfos, hallId, areaInfo, applyKey, seatNames): Promise<any>

    /**
     * 锁座
     * @returns {*} 返回请求promise
     */
    lockStatus(requestId): Promise<any>

    /**
     * 订单详情
     * @param payNo 订单id
     * @returns {*} 返回请求promise
     */
    getOrderResult(payNo): Promise<any>

    /**
     * 收银台返回的支付结果
     * @returns {*} 返回请求promise
     */
    cmbcConfirmPay(_CallBackUrl, orderId, token): Promise<any>
}

export declare function revealNetwork<T extends new(...args: any[]) => JNetworkWorker>(networkClass: T,
                                                                                       networkName?: string,
                                                                                       config?: object): T;

export declare function configPicker(picker: any | object | (() => object)): void;

export type PromiseData = Promise<any>;

export declare class JNetworkWorker extends JNetworkRoot {
    fetchRequest(...args): INetworkStandardPromiseType<any>;
}

