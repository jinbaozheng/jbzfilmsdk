/**
 * Created by cuppi on 2016/11/30.
 */
'use strict';
import {cityUrl} from '../unify/JUrlList';
import _ from '../unify/JDataUnify';
import JNetworkWorker from "./JNetworkWorker";
let _instance = null;

/**
 * 城市及定位接口
 * @memberOf module:network
 * @hideconstructor
 */
class JNetworkCity extends JNetworkWorker{
    /**
     * 获取城市列表
     * @returns {*}
     */
    cityList() {
        return new Promise((resolve, reject) => {
            this.prefixPromise(cityUrl.jbzCities).then(data => {
                resolve(_('cityUrl.jbzCities', data));
            }, error => {
                reject(error);
            });
        });
    }

    /**
     *  通过经纬度获取城市
     *  @param coordinate 位置信息
     * @returns {*}
     */
    cityByCoordinate(coordinate) {
        return new Promise((resolve, reject) => {
            this.prefixPromise(cityUrl.jbzCityByCoordinate, coordinate).then(data => {
                resolve(_('cityUrl.jbzCityByCoordinate', data));
            }, error => {
                reject(error);
            });
        });
    }

    /**+
     * 通过经纬度获取城市（通过代理传递）
     * @returns {{terminate, then}|*}
     */
    cityNeedCoordinate() {
        return new Promise((resolve, reject) => {
            this.prefixPromise(cityUrl.jbzCityByCoordinate).then(data => {
                resolve(_('cityUrl.jbzCityByCoordinate', data));
            }, error => {
                reject(error);
            });
        });
    }

    /**
     * 通过城市id获取城市
     * @param cityId
     * @returns {{terminate, then}|*}
     */
    cityById(cityId) {
        return new Promise((resolve, reject) => {
            this.prefixPromise(cityUrl.jbzCityById, {cityId}).then(data => {
                resolve(_('cityUrl.jbzCityById', data));
            }, error => {
                reject(error);
            });
        });
    }

    /**+
     * 获取地区列表
     * @param cityId
     * @returns {{terminate, then}|*}
     */
    cityDistrictList(cityId) {
        return new Promise((resolve, reject) => {
            this.prefixPromise(cityUrl.jbzDistricts, {cityId}).then(data => {
                resolve(_('cityUrl.jbzDistricts', data));
            }, error => {
                reject(error);
            });
        })
    }

    /**
     * 获取热门城市列表
     * @returns {{terminate, then}|*}
     */
    cityHotList() {
        return new Promise((resolve, reject) => {
            this.prefixPromise(cityUrl.jbzHotCities).then(data => {
                resolve(_('cityUrl.jbzHotCities', data));
            }, error => {
                reject(error);
            });
        });
    }

    static _instance(){
      if (!_instance){
          _instance = new JNetworkCity();
      }
      return _instance;
    }

    static cityList() {
        return this._instance().cityList();
    }

    static cityByCoordinate(coordinate) {
        return this._instance().cityByCoordinate(coordinate);
    }

    static cityNeedCoordinate() {
        return this._instance().cityNeedCoordinate();
    }

    static cityById(cityId) {
        return this._instance().cityById(cityId);
    }

    static cityDistrictList(cityId) {
        return this._instance().cityDistrictList(cityId);
    }

    static cityHotList() {
        return this._instance().cityHotList();
    }
}

export default JNetworkCity;
