/**
 * 筛选影院信息的参数声明
 */
export declare interface CinemaFilterParas {
    filmId: string;
    feature: string;
    region: string;
    sort: string;
    limit: string;
}

export declare interface CityParas {
}

/**
 *  经纬度参数声明
 */
export declare interface CoordinateParas {
    longitude: number
    latitude: number
}

/**
 * 位置信息的参数声明
 */
export declare interface LocationParas {
    cityId: number
    longitude: number
    latitude: number
}
