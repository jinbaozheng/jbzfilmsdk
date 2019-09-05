/**
 * 城市返回参数声明
 */
export declare interface CityModel {
    /**
     * 城市id
     */
    id: number;
    /**
     * 城市名
     */
    name: string;
    /**
     * 城市拼音
     */
    latin: string;
}

/**
 * 画座位图处理返回参数声明
 */
export declare interface SmartSeatModel {
    /**
     * 座位显示的排数
     */
    row: number;
    /**
     * 座位显示的列数
     */
    col: number;
    /**
     * 位置状态 0：可选, 1：已售
     */
    status: number;
    /**
     * 情侣座 0：正常, 1：左边, 2：右边
     */
    loveIndex: number;
    /**
     * 座位排数编号
     */
    rowNumber: number;
    /**
     * 座位列数编号
     */
    colNumber: number;
    /**
     * 座位排数定位
     **/
    rowLocation: number;
    /**
     * 座位列数定位
     */
    colLocation: number;
}

/**
 * 锁座参数
 */
export declare interface LockSeatParamsModel {
    /**
     * 平台
     */
    type: string;
    /**
     * 用户Id
     */
    openId: string;
    /**
     * 用户手机号码
     */
    mobile: string;
    /**
     * 影院Id
     */
    cinemaId: string;
    /**
     * 场次Id
     */
    showId: string;
    /**
     * 电影Id
     */
    filmId: string;
    /**
     * 座位Id列表字符串
     */
    seatIds: string;
    /**
     * 座位数量
     */
    count: string;
    /**
     * 城市Id
     */
    cityId: string;
    /**
     * 座位信息字符串
     */
    seatInfos?: string;
    /**
     * 影厅Id
     */
    hallId?: string;
    /**
     * -
     */
    areaInfo?: string;
    /**
     * -
     */
    applyKey?: string;
    /**
     * -
     */
    seatNames?: string;
}
