/**
 * Created by cuppi on 2016/12/7.
 *  交易相关
 */
'use strict'
let instance = null;
class TradeManager {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    /**
     * 获取单例实例
     * @returns {TradeManager}
     */
    static defaultManager() {
        return new TradeManager();
    }
    /**
     * 获取锁座时需要的座位参数
     * @param type 平台类型
     * @param seatList 座位列表（需要购买的）
     * @param mobile 手机号码
     * @param xsessionId 身份标识符（目前跟手机号码一样）
     * @returns {*} 返回参数对象
     */
    seatInforParas(type, seatList) {
        // 网票
        if (type === 'wangpiao') {
            let seatInfosArr = [];
            let seatInfos = [];
            for (let seat of seatList) {
                seatInfosArr.push(seat.seatModel.SeatIndex);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            }
        }
        // 蜘蛛
        if (type === 'spider') {
            let seatInfosArr = [];
            let seatInfos = [];
            for (let seat of seatList) {
                seatInfosArr.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            }
        }
        // 卖座
        if (type === 'maizuo') {
            let seatInfosArr = [];
            let seatInfos = [];
            for (let seat of seatList) {
                seatInfosArr.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            }
        }
        // 单车
        if (type === 'danche') {
            let seatInfosArr = [];
            let seatInfos = [];
            for (let seat of seatList) {
                seatInfosArr.push(seat.seatModel.rowId + ':' + seat.seatModel.columnId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: seatInfosArr.join('|'),
                count: seatInfosArr.length,
                seatInfos: seatInfos.join('|')
            }
        }
        // 猫眼
        if (type === 'maoyan' || type === 'meituan' || type === 'dazhong') {
            let seatInfosArr = [];
            let seatInfos = [];
            for (let seat of seatList) {
                if (!seat.seatModel) {
                    console.log(seat);
                }
                seatInfosArr.push({
                    sectionId: seat.seatModel.sectionId,
                    columnId: seat.seatModel.columnId,
                    rowId: seat.seatModel.rowId,
                    seatNo: seat.seatModel.seatNo
                });
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
            }
            return {
                seatIds: JSON.stringify({
                    count: seatList.length,
                    list: seatInfosArr
                }),
                areaInfo: '',
                count: seatList.length,
                seatInfos: seatInfos.join('|')
            }
        }

        // 百度
        if (type === 'baidu') {
            let seatIds = [];
            let seatInfos = [];
            let seatNames = [];
            let areaInfo = [];
            for (let seat of seatList) {
                seatIds.push(seat.seatModel.seatNo);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
                seatNames.push(seat.seatModel.seatName);
                areaInfo.push(seat.seatModel.sectionId);
            }
            return {
                seatIds: seatIds.join('|'),
                seatInfos: seatInfos.join('|'),
                seatNames: seatNames.join('|'),
                areaInfo: areaInfo.join('|'),
                count: seatList.length,

            }
        }

        // 淘票票
        if (type === 'taobao') {
            let seatNames = [];
            let areaInfo = [];
            let seatIds = [];
            let seatInfos = [];
            for (let seat of seatList) {
                seatNames.push(seat.seatModel.seatName);
                areaInfo.push(seat.seatModel.sectionId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
                seatIds.push(seat.seatModel.seatNo);
            }
            return {
                count: seatList.length,
                areaInfo: areaInfo.join('|'),
                seatNames: seatNames.join('|'),
                seatInfos: seatInfos.join('|'),
                seatIds: seatIds.join('|')
            }
        }
        // 影托帮
        if (type === 'ytb') {
            let seatNames = [];
            let areaInfo = [];
            let seatIds = [];
            let seatInfos = [];
            for (let seat of seatList) {
                seatNames.push(seat.seatModel.seatName);
                areaInfo.push(seat.seatModel.sectionId);
                seatInfos.push(seat.rowNumber + ':' + seat.colNumber);
                seatIds.push(seat.seatModel.seatNo);
            }
            return {
                count: seatList.length,
                areaInfo: areaInfo.join('|'),
                seatNames: seatNames.join('|'),
                seatInfos: seatInfos.join('|'),
                seatIds: seatIds.join('|')
            }
        }
    }
}

export default TradeManager;
