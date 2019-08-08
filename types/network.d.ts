import {INetworkStandardPromiseType, JNetworkRoot} from 'icemilk';
import {PageModel} from "./model"
import {CinemaFilterParas} from "./paras"

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

export declare class JNetworkCity extends JNetworkWorker {
    /**
     * 获取城市列表信息
     * @returns {*} 返回请求promise
     */
    cityList(): Promise<any>

    cityByCoordinate(coordinate): Promise<any>

    cityNeedCoordinate(): Promise<any>

    /**
     * 根据id查城市信息
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */
    cityById(cityId): Promise<any>

    /**
     * 城市区域信息
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */
    cityDistrictList(cityId): Promise<any>

    /**
     * 获取热门城市列表信息
     * @returns {*} 返回请求promise
     */
    cityHotList(): Promise<any>
}

export declare class JNetworkFilm extends JNetworkWorker {
    /**
     * 热门影片部份信息
     * @param page 分页所需数据
     * @returns {*} 返回请求promise
     */
    filmHotfilms(page: PageModel): Promise<any>

    /**
     * 热门影片全部信息
     * @returns {*} 返回请求promise
     */
    filmHotfilmsSimple(): Promise<any>

    /**
     * 待映影片部份信息
     * @param page 分页所需数据
     * @returns {*} 返回请求promise
     */
    filmWaitfilms(page): Promise<any>

    /**
     * 影片详情
     * @param filmId 影片id
     * @param platform 来源
     * @returns {*} 返回请求promise
     */
    filmDetail(filmId, platform?): Promise<any>

    filmDateList(filmId): Promise<any>
}

export declare class JNetworkCinema extends JNetworkWorker {
    /**
     * 影院详情
     * @param cinemaId 影院id
     * @returns {*} 返回请求promise
     */
    cinemaDetail(cinemaId): Promise<any>

    cinemaList(location: any, cinemaFilter: CinemaFilterParas);
    cinemaList(cinemaFilter: CinemaFilterParas);
    /**
     * 影院列表
     * @param location 定位信息
     * @param cinemaFilter 影院筛选信息
     * @returns {*} 返回请求promise
     */
    cinemaList(location: any, cinemaFilter?: any): Promise<any>

    /**
     * 影院下某电影排片日期
     * @param cinemaId 影院id
     * @returns {*} 返回请求promise
     */
    cinemaScreeningFilmList(cinemaId): Promise<any>

    /**
     * 影院下某电影排片日期
     * @param cinemaId 影院id
     * @param filmId 影片id
     * @returns {*} 返回请求promise
     */
    cinemaScreeningDateList(cinemaId, filmId): Promise<any>

    /**
     * 影院下某电影某天的排片列表
     * @param cinemaId 影院id
     * @param filmId 影片id
     * @param date 日期
     * @returns {*} 返回请求promise
     */
    cinemaScreeningItems(cinemaId, filmId, date): Promise<any>

    cinemaSeats(type, paras): Promise<any>

    /**
     * 实时座位图信息
     * @param type 票务商
     * @param paras 影院排片等信息
     * @returns {*} 返回请求promise
     */
    cinemaSmartSeats(type, paras): Promise<any>

    /**
     * 收藏影院
     * @param cinemaId 影院id
     * @param cinemaName 影院名称
     * @returns {*} 返回请求promise
     */
    cinemaFavoriteCinema(cinemaId, cinemaName): Promise<any>

    /**
     * 取消收藏的影院
     * @param cinemaId 影院id
     * @returns {*} 返回请求promise
     */
    cinemaCancelFavoriteCinema(cinemaId): Promise<any>
}

export declare class JNetworkOther extends JNetworkWorker {
    /**
     * 影片、影院搜索
     * @param cityId 城市id
     * @param searchKey 搜索内容
     * @param nextPageFirstKey 页码
     * @returns {*} 返回请求promise
     */
    search(cityId, searchKey, nextPageFirstKey): Promise<any>

    /**
     * 热门影片搜索列表
     * @returns {*} 返回请求promise
     */
    hotSearchKeyword(): Promise<any>

    /**
     * Banners广告图
     * @param location banner的位置
     * @param cityId 城市id
     * @returns {*} 返回请求promise
     */
    otherBanners(location, cityId): Promise<any>

    banners(position, cityId): Promise<any>

    static search(cityId, searchKey, nextPageFirstKey): Promise<any>
}

export declare class JNetworkMine extends JNetworkWorker {
    /**
     * 订单列表
     * @returns {*} 返回请求promise
     */
    mineOrder(): Promise<any>

    /**
     * 收藏的影院列表
     * @returns {*} 返回请求promise
     */
    mineFavoriteCinema(): Promise<any>

    mineFavorite(): Promise<any>
}

export declare function revealNetwork<T extends new(...args: any[]) => JNetworkWorker>(networkClass: T,
                                                                                       networkName?: string,
                                                                                       config?: object): T;

export declare function configPicker(picker: any | object | (() => object)): void;

export type PromiseData = Promise<any>;

export declare class JNetworkWorker extends JNetworkRoot {
    fetchRequest(...args): INetworkStandardPromiseType<any>;
}

