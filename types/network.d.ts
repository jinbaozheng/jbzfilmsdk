import {INetworkStandardPromiseType, JNetwork} from 'icemilk';
import {CinemaFilterParas, LocationParas, CoordinateParas, PageParas, SeatParams} from "./paras"
import {REVEAL_NETWORK_CONFIG} from './interface';
import {LockSeatParamsModel} from "./model";


/**
 * 账户相关网络请求类
 */
export declare class JNetworkAccount extends JNetworkWorker {
    /**
     * 用户登录
     * @method_name C10006
     * @param key 用户加密信息
     * @returns {*} 返回请求promise
     */
    accountLogin(key: string): Promise<any>
}

/**
 * 活动相关网络请求类
 */
export declare class JNetworkActivity extends JNetworkWorker {
    /**
     * 查询活动资格
     * @method_name A10010
     * @param activityId 活动ip
     * @param positionCityId 定位城市id
     * @param selectedCityId 用户选择城市id
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回活动信息内容
     */
    getActivityQuota(
        activityId: string | number,
        positionCityId: string | number,
        selectedCityId: string | number
    ): Promise<any>

    /**
     * 获取所有活动
     * @method_name A10013
     * @returns {*} 返回全部活动列表
     */
    getAllActivity(): Promise<any>

    /**
     * 是否活动期间
     * @method_name A10014
     * @param activityId 活动ip
     * @returns {*} 返回活动信息内容
     */
    inActivityDuration(
        activityId: string | number
    ): Promise<any>

    /**
     * 是否跳转发现页
     * @method_name A10015
     * @returns {*} 返回活动信息内容
     */
    redirectFindPage(): Promise<any>
}
/**
 * 推广Banner相关网络请求类
 * @noInheritDoc
 */
export declare class JNetworkBanner extends JNetworkWorker {
    /**
     * 推广Banner广告列表
     * @method_name M10001
     * @param location banner的位置
     * @param cityId 城市id
     * @returns {*} 返回Banner列表
     */
    bannerList(location: string, cityId?: string | number): Promise<any>
}

/**
 * 影院相关网络请求类
 * @noInheritDoc
 */
export declare class JNetworkCinema extends JNetworkWorker {
    /**
     * 获取影院详情
     * @method_name M10012
     * @param cinemaId 影院id
     * @description openId 用户唯一标识可选传入
     * @returns {*} 返回影院详情
     */
    cinemaDetail(cinemaId): Promise<any>

    /**
     * 获取影院列表
     * @method_name M10016
     * @param filterParams 影院筛选条件
     * @see LocationParas
     * @see CinemaFilterParas
     * @description LocationParas 所有属性必须不为空 CinemaFilterParas 所有属性都可为空
     * @returns {*} 返回影院列表
     */
    cinemasList(filterParams: LocationParas & CinemaFilterParas): Promise<any>

    /**
     * 获取影院拍片的电影列表
     * @method_name M10013
     * @param cinemaId 影院id
     * @returns {*} 返回电影列表
     */
    cinemaScreeningFilmList(cinemaId: string): Promise<any>

    /**
     * 获取影院拍片的日期列表
     * @method_name M10014
     * @param cinemaId 影院id
     * @param filmId 影片id
     * @returns {*} 返回时间戳格式的日期列表
     */
    cinemaScreeningDateList(cinemaId: string, filmId: string): Promise<any>

    /**
     * 获取影院排片的场次列表
     * @method_name M10015
     * @param cinemaId 影院id
     * @param filmId 影片id
     * @param date 日期
     * @returns {*} 返回场次列表
     */
    cinemaScreeningItems(cinemaId: string, filmId: string, date: string): Promise<any>

    /**
     * 获取场次实时座位图
     * @method_name M10010
     * @param params 影院排片参数
     * @returns {*} 返回实时座位图
     */
    cinemaSmartSeats(params: SeatParams): Promise<any>

    /**
     * 实时座位图结果 (异步处理)
     * @method_name M10011
     * @param requestId 请求Id，该值为申请实时座位图接口返回的requestId
     * @returns {*} 返回请求promise
     */
    cinemaSmartSeatsByRequestId(requestId): Promise<any>
}

/**
 * 城市相关网络请求类
 * @noInheritDoc
 */
export declare class JNetworkCity extends JNetworkWorker {

    /**
     * 获取当前城市信息
     * @method_name M10032
     * @param coordinate 经纬度信息
     * @returns {*} 返回城市信息
     */
    cityByCoordinate(coordinate: CoordinateParas): Promise<any>

    /**
     * @hidden
     * 获取定位结果
     * @method_name M10033
     * @param requestId 请求定位接口返回的requestId
     * @returns {*} 返回请求promise
     */
    locationCityInfo(requestId): Promise<any>

    /**
     * 获取热门城市列表
     * @method_name M10031
     * @returns {*} 返回城市列表
     */
    cityHotList(): Promise<any>

    /**
     * 获取所有城市列表
     * @method_name M10030
     * @returns {*} 返回城市列表
     */
    cityList(): Promise<any>

    /**
     * 根据城市id获取城市信息
     * @method_name M10034
     * @param cityId 城市id
     * @returns {*} 返回城市信息
     */
    cityById(cityId: string): Promise<any>

    /**
     * 根据城市id获取地区列表
     * @method_name M10035
     * @param cityId 城市id
     * @returns {*} 返回地区列表
     */
    cityDistrictList(cityId): Promise<any>

    /**
     * @ignore
     * 根据城市id获取地区列表
     * @method_name M10035
     * @param cityId 城市id
     * @description 原始返回数据
     * @returns {*} 返回地区列表
     */
    districts(cityId): Promise<any>
}

/**
 * 影片相关网络请求类
 * @noInheritDoc
 */
export declare class JNetworkFilm extends JNetworkWorker {
    /**
     * 获取前十热门影片列表
     * @method_name M10022
     * @description Top10及总数
     * @returns {*} 返回影片列表
     */
    hotFilms(): Promise<any>

    /**
     * 获取热门影片列表
     * @method_name M10023
     * @param page 分页信息(页码、条数)
     * @returns {*} 返回影片列表
     */
    hotFilmsByPage(page: PageParas): Promise<any>

    /**
     * 获取前十待映影片列表
     * @method_name M10024
     * @description Top10及总数
     * @returns {*} 返回影片列表
     */
    waitFilms(): Promise<any>

    /**
     * 获取待映影片列表
     * @method_name M10025
     * @param page 分页信息(页码、条数)
     * @returns {*} 返回影片列表
     */
    waitFilmsByPage(page: PageParas): Promise<any>

    /**
     * 获取影片信息
     * @method_name M10020
     * @param filmId 影片id
     * @returns {*} 返回影片信息
     */
    filmDetail(filmId: string): Promise<any>

    /**
     * 获取影片热门评论列表
     * @method_name M10021
     * @param filmId 影片id
     * @returns {*} 返回影片评论列表
     */
    filmHotComments(filmId: string): Promise<any>
}

/**
 * 个人信息相关网络请求类
 * @noInheritDoc
 */
export declare class JNetworkMine extends JNetworkWorker {
    /**
     * 取消收藏的影院
     * @method_name M10064
     * @param cinemaId 影院id
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回是否取消成功
     */
    cancelCollectCinema(cinemaId: string): Promise<any>

    /**
     * 收藏影院
     * @method_name M10063
     * @param cinemaId 影院id
     * @param cinemaName 影院名称
     * @param cinemaAddress 影院地址
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回是否收藏成功
     */
    collectCinema(cinemaId: string, cinemaName: string, cinemaAddress: string): Promise<any>

    /**
     * 获取已经收藏的影院列表
     * @method_name M10062
     * @param page 分页信息
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回影院列表
     */
    collectedCinemaList(page: PageParas): Promise<any>

    /**
     * 获取订单列表
     * @method_name M10060
     * @param page 分页
     * @param type 订单类型（01:待支付/02:已支付/03:退款/不传:全部）
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回订单列表
     */
    orderList(page: PageParas & {type: string}): Promise<any>

    /**
     * 获取订单详情
     * @method_name M10061
     * @param orderId 订单id
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回订单详情
     */
    orderDetail(orderId): Promise<any>

    /**
     * 取消订单
     * @method_name M10065
     * @param orderId 订单id
     * @description openId 用户唯一标识必须传入
     * @returns {*} 返回是否取消成功
     */
    orderCancel(orderId): Promise<any>
}

/**
 * 其他相关网络请求类
 * @noInheritDoc
 */
export declare class JNetworkOther extends JNetworkWorker {
    /**
     * 加密
     * @method_name M10080
     * @param key 待加密信息
     * @returns {*} 返回加密后的信息
     */
    systemEncrypt(key): Promise<string>
    /**
     * 解密
     * @method_name M10081
     * @param key 待解密信息
     * @returns {*} 返回解密后的信息
     */
    systemDecrypt(key): Promise<string>
}

/**
 * 搜索相关网络信息类
 * @noInheritDoc
 */
export declare class JNetworkSearch extends JNetworkWorker {
    /**
     * 根据关键字搜索影片、影院列表
     * @method_name M10040
     * @param key 搜索关键字
     * @param page 分页信息
     * @description location LocationParas 定位信息必传
     * @returns {*} 返回搜索结果
     */
    search(key, page: PageParas): Promise<any>

    /**
     * 获取热门搜索列表
     * @returns {*} 返回热门搜索关键词
     */
    searchHotKeys(): Promise<any>
}

/**
 * 商务相关接口
 * @noInheritDoc
 */
export declare class JNetworkTrade extends JNetworkWorker {
    /**
     * 锁座
     * @method_name M10050
     * @param lockSeatParams 锁座需要的参数
     * @returns {*} 返回锁座结果或者放回一个requestId请求标识
     */
    lockSeat(lockSeatParams: LockSeatParamsModel): Promise<any>

    /**
     * 查询锁座结果
     * @method_name M10051
     * @param requestId 请求标识
     * @returns {*} 返回锁座结果
     */
    lockStatusByRequestId(requestId: string): Promise<any>

    /**
     * 获取订单状态
     * @method_name M10083
     * @param orderId 订单id
     * @returns {*} 返回订单状态
     */
    orderStatus(orderId): Promise<any>

    /**
     * @hidden
     * 收银台返回的支付结果
     * @method_name M10084
     * @param _CallBackUrl 订单id
     * @param orderId 订单id
     * @param token 加密参数
     * @returns {*} 返回请求promise
     */
    confirmPay(_CallBackUrl, orderId, token): Promise<any>

    /**
     * @hidden
     * 收银台返回的支付结果（统一新接口）
     * @method_name M10052
     * @param jsonStr json字符串（内容为所需参数）
     * @returns {*} 返回请求promise
     */
    confirmOrder(jsonStr): Promise<any>
}

/**
 * 暴露继承JNetworkWorker类的一个类，使其拥有配置接口的能力。
 * @typeparam  T 继承JNetworkWorker的类
 * @param networkClass 需要暴露的类.
 * @param networkName  类名称.
 * @param config  类配置.
 */
export declare function revealNetwork<T extends new(...args: any[]) => JNetworkWorker>(networkClass: T,
                                                                                       networkName?: string,
                                                                                       config?: REVEAL_NETWORK_CONFIG): T;
/**
 * @hidden
 */
export declare function configPicker(picker: any | object | (() => object)): void;
/**
 * @hidden
 */
export type PromiseData = Promise<any>;

/**
 * 具备配置接口能力的网络请求基类
 * @noInheritDoc
 */
export declare class JNetworkWorker extends JNetwork {
    fetchRequest(...args): INetworkStandardPromiseType<any>;
}

