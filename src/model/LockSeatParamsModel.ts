import DistrictModel from "./DistrictModel";

/**
 * 锁座参数模型
 */
interface LockSeatParamsModel {
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

export default LockSeatParamsModel;
