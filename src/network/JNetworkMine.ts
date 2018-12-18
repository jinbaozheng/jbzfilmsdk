/**
 * Created by cuppi on 2017/3/6.
 */
'use strict';
import _ from '../unify/JDataUnify';
import {mineUrl} from '../unify/JUrlList';
import JNetworkWorker from "./JNetworkWorker";

/**
 * 个人中心接口
 * @memberOf module:network
 */
class JNetworkMine extends JNetworkWorker{
  static _instance = new JNetworkMine();
  /**
   * 我的订单
   * @private
   * @returns {*}
   */
  mineOrder() {
    return this.prefixPromise(mineUrl.userorders);
  }

  /**
   * 我的收藏(影院)
   * @returns {*}
   */
  mineFavoriteCinema() {
    return new Promise((resolve, reject) => {
      this.prefixPromise(mineUrl.jbzMineCinema).then(data => {
        resolve(_('mineUrl.jbzMineCinema', data));
      }, error => {
        reject(error);
      });
    })
  }

  /**
   * 我的收藏
   * @private
   * @returns {*}
   */
  mineFavorite() {
    return this.prefixPromise(mineUrl.collectedcinemalist);
  }

  static mineOrder() {
    return this._instance.mineOrder();
  }

  static mineFavoriteCinema() {
    return this._instance.mineFavoriteCinema();
  }

  static mineFavorite() {
    return this._instance.mineFavorite();
  }
}

export default JNetworkMine;
