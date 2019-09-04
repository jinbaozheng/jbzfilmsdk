/**
 * 筛选影院信息的参数声明
 */
export declare interface CinemaFilterParas {
    /**
     * 排序
     */
    orderType: string;
    /**
     * 区域
     */
    regionName: string;
    /**
     * 影片id
     */
    filmId: string;
    /**
     * 特色
     */
    feature: string;
    /**
     * 页码
     */
    page: number;
    /**
     * 每页显示条数
     */
    size: number;
    /**
     * 日期
     */
    date: string;
}

/**
 * 分页参数声明
 */
export declare interface PageParas {
    /**
     * 页码
     */
    page: number;
    /**
     * 每页条数
     */
    size: number;
}

export declare interface CityParas {
}

/**
 *  经纬度参数声明
 */
export declare interface CoordinateParas {
    /**
     * 经度
     */
    longitude: number
    /**
     * 纬度
     */
    latitude: number
}

/**
 * 位置信息的参数声明
 */
export declare interface LocationParas {
    /**
     * 城市id
     */
    cityId: number
    /**
     * 经度
     */
    longitude: number
    /**
     * 纬度
     */
    latitude: number
}

/**
 * 座位图参数声明
 */
export declare interface SeatParams {
    /**
     * 影院平台
     */
    type: string;
    /**
     * 影院id
     */
    cinemaId: string;
    /**
     * 场次id
     */
    showId: string;
    /**
     * 区域id，淘宝独有
     */
    sectionId: string;
}
