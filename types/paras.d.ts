/**
 * 筛选影院信息的参数声明
 */
export declare interface CinemaFilterParas {
    /**
     * 影片id
     */
    filmId: string;
    /**
     * 特色
     */
    feature: string;
    /**
     * 区域
     */
    region: string;
    /**
     * 排序
     */
    sort: string;
    /**
     * 分页
     */
    limit: string;
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
