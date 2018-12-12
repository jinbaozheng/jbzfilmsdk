/**
 * Created by cuppi on 2016/12/7.
 */
'use strict';
import {tradeUrl} from '../unify/JUrlList';
import _ from '../unify/JDataUnify';
import JNetworkWorker from "./JNetworkWorker";

/**
 * 交易接口
 * @memberOf module:network
 */
class JNetworkTrade extends JNetworkWorker{
  /**
   * 锁座
   * @param type 平台类型
   * @param paras 锁座参数
   * @returns {{terminate, then}|*}
   */
  tradeLockSeat(type, paras) {
    return new Promise((resolve, reject) => {
      this.prefixPromise(tradeUrl.jbzLockSeat, {type, ...paras}).then(data => {
        resolve(_('tradeUrl.jbzLockSeat', data));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 取消锁座
   * @param orderId 订单Id
   * @returns {{terminate, then}|*}
   */
  tradeCancelLockSeat(orderId) {
    return this.prefixPromise(tradeUrl.jbzCancelOrder, {orderId})
  }

  static tradeLockSeat(type, paras) {
    return this.instance().tradeLockSeat(type, paras);
  }

  static tradeCancelLockSeat(orderId) {
    return this.instance().tradeCancelLockSeat(orderId);
  }

}

export default JNetworkTrade;
