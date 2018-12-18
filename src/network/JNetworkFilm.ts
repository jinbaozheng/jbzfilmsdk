/**
 * Created by cuppi on 2016/11/22.
 */
'use strict';
import {filmUrl} from '../unify/JUrlList';
import _ from '../unify/JDataUnify';
import PageModel from "../model/PageModel";
import JNetworkWorker from "./JNetworkWorker";

let _instance = null;

/**
 * 影片接口
 * @memberOf module:network
 */
class JNetworkFilm extends JNetworkWorker {

    /**
     * 获取热门电影
     * @param page PageModel 分页模型
     * @returns {Promise}
     */
    filmHotfilms(page: PageModel) {
        if (!page) {
            return new Promise((resolve, reject) => {
                this.prefixPromise(filmUrl.jbzHotFilms).then(data => {
                    resolve(_('filmUrl.jbzHotFilms', data));
                }, error => {
                    reject(error);
                });
            })
        } else {
            return new Promise((resolve, reject) => {
                this.prefixPromise(filmUrl.jbzHotFilmsPage, {page: page.index, size: page.size}).then(data => {
                    resolve(_('filmUrl.jbzHotFilmsPage', data));
                }, error => {
                    reject(error);
                });
            });
        }
    }

    /**
     * 获取热门电影
     * @returns {{terminate, then}|*}
     */
    filmHotfilmsSimple() {
        return new Promise((resolve, reject) => {
            this.prefixPromise(filmUrl.jbzHotFilmsSimple).then(data => {
                resolve(_('filmUrl.jbzHotFilmsSimple', data));
            }, error => {
                reject(error);
            });
        })
    }

    /**
     * 获取待映电影
     * @param page 页号
     * @returns {Promise}
     */
    filmWaitfilms(page) {
        if (!page) {
            return new Promise((resolve, reject) => {
                this.prefixPromise(filmUrl.jbzWaitFilms).then(data => {
                    resolve(_('filmUrl.jbzWaitFilms', data));
                }, error => {
                    reject(error);
                });
            })
        } else {
            return new Promise((resolve, reject) => {
                this.prefixPromise(filmUrl.jbzWaitFilmsPage, {page: page.index, size: page.size}).then(data => {
                    resolve(_('filmUrl.jbzWaitFilmsPage', data));
                }, error => {
                    reject(error);
                });
            });
        }
    }

    /**
     * 获取影片详情
     * @param filmId 影片Id
     * @param platform 平台类型(默认使用jbz平台)
     * @returns {Promise}
     */
    filmDetail(filmId, platform = null) {
        if (platform && platform !== 'jbz') {
            return new Promise((resolve, reject) => {
                this.prefixPromise(filmUrl.jbzFilmDetailByPartner, {platformFilmId: filmId, platform}).then(data => {
                    resolve(_('filmUrl.jbzFilmDetailByPartner', data));
                }, error => {
                    reject(error);
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                this.prefixPromise(filmUrl.jbzFilmDetail, {filmId}).then(data => {
                    resolve(_('filmUrl.jbzFilmDetail', data));
                }, error => {
                    reject(error);
                });
            });
        }
    }

    /**
     * 获取影片排片日期列表
     * @param filmId 影片Id
     * @returns {Promise}
     */
    filmDateList(filmId) {
        return new Promise((resolve, reject) => {
            this.prefixPromise(filmUrl.jbzFilmDate, {filmId}).then(data => {
                resolve(_('filmUrl.jbzFilmDate', data));
            }, error => {
                reject(error);
            })
        })
    }

    static _instance(){
        if (!_instance){
            _instance = new JNetworkFilm();
        }
        return _instance;
    }

    static filmHotfilms(page: PageModel) {
        return this._instance().filmHotfilms(page);
    }

    static filmHotfilmsSimple() {
        return this._instance().filmHotfilmsSimple();
    }

    static filmWaitfilms(page) {
        return this._instance().filmWaitfilms(page);
    }

    static filmDetail(filmId, platform = null) {
        return this._instance().filmDetail(filmId, platform);
    }

    static filmDateList(filmId) {
        return this._instance().filmDateList(filmId);
    }
}

export default JNetworkFilm;
