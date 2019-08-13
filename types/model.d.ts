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
