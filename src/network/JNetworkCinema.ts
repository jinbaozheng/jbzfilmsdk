/**
 * Created by cuppi on 2016/11/29.
 */
'use strict';
import {cinemaUrl} from '../unify/JUrlList';
import {JToolDate} from 'icemilk';
import _ from '../unify/JDataUnify';
import SeatManager from '../util/JManagerSeat';
import CinemaFilterParas from "../paras/CinemaFilterParas";
import JNetworkWorker from "./JNetworkWorker";

/**
 * 影院接口
 * @memberOf module:network
 */
class JNetworkCinema extends JNetworkWorker{
  /**
   * 获取影院详情
   * @param {string} cinemaId 影院ID
   * @returns {Promise} promise
   */
  cinemaDetail(cinemaId) {
    return new Promise((resolve, reject) => {
      this.prefixPromise(cinemaUrl.jbzDetail, {cinemaId}).then(data => {
        resolve(_('cinemaUrl.jbzDetail', data, 0));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 影院列表
   * @param {} location
   * @param {cinemaFilter} CinemaFilterParas
   * @returns {Promise}
   */
  cinemaList(location: any, cinemaFilter: CinemaFilterParas);
  cinemaList(cinemaFilter: CinemaFilterParas);
  cinemaList(location: any, cinemaFilter?: any){
    if (cinemaFilter == undefined){
      cinemaFilter = location;
    }
    return new Promise((resolve, reject) => {
      let u = undefined;
      let {filmId, feature, region, sort, limit} = cinemaFilter ? cinemaFilter : {filmId: u, feature: u, region: u, sort: u, limit: u};
      this.prefixPromise(cinemaUrl.jbzList, {
        ...location,
        filmId,
        feature,
        regionName: region,
        orderType: sort,
        limit
      }).then(data => {
        resolve(_('cinemaUrl.jbzList', data));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 获取指定影院排片
   * @param cinemaId 影院Id
   * @returns {{terminate, then}|*}
   */
  cinemaScreeningFilmList(cinemaId) {
    return new Promise((resolve, reject) => {
      return this.prefixPromise(cinemaUrl.jbzScreeningFilmList, {
        cinemaId
      }).then(data => {
        resolve(_('cinemaUrl.jbzScreeningFilmList', data));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 获取指定影院排片日期安排
   * @param cinemaId 影院Id
   * @param filmId 影片Id
   * @returns {{terminate, then}|*}
   */
  cinemaScreeningDateList(cinemaId, filmId) {
    return new Promise((resolve, reject) => {
      this.prefixPromise(cinemaUrl.jbzScreeningDateList, {cinemaId, filmId}).then(data => {
        resolve(_('cinemaUrl.jbzScreeningDateList', data));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 获取指定影院排片放映厅安排
   * @param cinemaId 影院Id
   * @param filmId 影片Id
   * @param date 日期（时间戳标示）
   * @returns {{terminate, then}|*}
   */
  cinemaScreeningItems(cinemaId, filmId, date) {
    return new Promise((resolve, reject) => {
      date = JToolDate.dateStringFromTimeInterval(date, 'yyyy-MM-dd');
      this.prefixPromise(cinemaUrl.jbzScreeningItems, {cinemaId, filmId, date}).then(data => {
        resolve(_('cinemaUrl.jbzScreeningItems', data));
      }, error => {
        reject(error);
      });
    });
  };

  /**
   * 实时座位图
   * @param type 平台类型 （必须）
   * @param paras （根据不同平台变化）
   * @returns {*}
   */
  cinemaSeats(type, paras) {
    if (type === 'meituan' || type === 'dazhong') {
      type = 'maoyan';
    }
    return new Promise((resolve, reject) => {
      this.prefixPromise(cinemaUrl.jbzRealtimeSeat, {type, ...paras}).then(data => {
        resolve(_('cinemaUrl.jbzRealtimeSeat', data));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 智能实时座位图
   * @param type 平台类型 （必须）
   * @param paras （根据不同平台变化）
   * @returns {*}
   */
  cinemaSmartSeats(type, paras) {
    if (type === 'meituan' || type === 'dazhong') {
      type = 'maoyan';
    }
    return new Promise((resolve, reject) => {
      this.prefixPromise(cinemaUrl.jbzRealtimeSeat, {type, ...paras}).then(data => {
        resolve(SeatManager.defaultManager().smartSeatsFromSeats(type, _('cinemaUrl.jbzRealtimeSmartSeat', data)));
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * 收藏影院
   * @param cinemaId 影院Id
   * @param cinemaName 影院名字
   * @returns {{terminate, then}|*}
   */
  cinemaFavoriteCinema(cinemaId, cinemaName) {
    return this.prefixPromise(cinemaUrl.jbzCollectcinema, {
      cinemaId: cinemaId,
      cinemaName: cinemaName
    });
  }

  /**
   * 取消收藏影院
   * @param cinemaId 影院Id
   * @returns {{terminate, then}|*}
   */
  cinemaCancelFavoriteCinema(cinemaId) {
    return this.prefixPromise(cinemaUrl.jbzCancelcollectcinema, {
    });
  }

  static cinemaDetail(cinemaId) {
    return this.instance().cinemaDetail(cinemaId);
  }

  static cinemaList(cinemaFilter: CinemaFilterParas);
  static cinemaList(location: any, cinemaFilter: CinemaFilterParas);
  static cinemaList(a: any, b?: any) {
    return this.instance().cinemaList(a, b);
  }

  static cinemaScreeningFilmList(cinemaId) {
    return this.instance().cinemaScreeningFilmList(cinemaId);
  }

  static cinemaScreeningDateList(cinemaId, filmId) {
    return this.instance().cinemaScreeningDateList(cinemaId, filmId);
  }

  static cinemaScreeningItems(cinemaId, filmId, date) {
    return this.instance().cinemaScreeningItems(cinemaId, filmId, date);
  };

  static cinemaSeats(type, paras) {
    return this.instance().cinemaSeats(type, paras);
  }

  static cinemaSmartSeats(type, paras) {
    return this.instance().cinemaSmartSeats(type, paras);
  }

  static cinemaFavoriteCinema(cinemaId, cinemaName) {
    return this.instance().cinemaFavoriteCinema(cinemaId, cinemaName);
  }

  static cinemaCancelFavoriteCinema(cinemaId) {
    return this.instance().cinemaCancelFavoriteCinema(cinemaId);
  }
}

export default JNetworkCinema;
