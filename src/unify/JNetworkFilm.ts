import {JToolDate} from 'icemilk';
import FilmModel from '../model/FilmModel';
import FilmSimpleModel from '../model/FilmSimpleModel';
import CommentModel from '../model/CommentModel';

const JNetworkFilm = {
    filmDetail: {
        url:  '/film/detail',
        bodyData: {
            filmId: true
        },
        cook: (data) => ({
            film: FilmModel.create(data.film),
            comment: data.hotComments.map(_ => CommentModel.create(_))
        })
    },
    filmDetailByPlatform: {
        url:  '/film/detailByPartner',
        bodyData: {
            platform: true,
            platformFilmId: true
        },
        cook: (data) => FilmModel.create(data)
    },
    filmDateList: {
        url:  '/film/filmDate',
        bodyData: {
            filmId: true
        },
        useBodyData: [
            'cityId'
        ],
        cook: (data) => data.map(_ => JToolDate.timeIntervalFromDateString(_))
    },
    filmVideo: {
        url:  '/film/filmVideo',
        bodyData: {
            filmId: true
        },
        description: '无数据'
    },
    hotComments: {
        url:  '/film/hotComments',
        bodyData: {
            filmId: true
        },
        description: '无数据'
    },
    hotfilms: {
        url:  '/film/hotFilms',
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    hotFilmsByPage: {
        url:  '/film/hotFilmsPage',
        bodyData: {
            page: {
                required: true,
                default: 1
            }
        },
        cook: (data) => data.map(_ => FilmModel.create(_)),
        description: '系统异常'
    },
    hotFilmsSimple: {
        url:  '/film/hotFilmsSimple',
        cook: (data) => data.map(_ => FilmSimpleModel.create(_))
    },
    waitFilms: {
        url:  '/film/upcomingFilms',
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    waitFilmsByPage: {
        url:  '/film/upcomingFilmsPage',
        bodyData: {
            page: {
                required: true,
                default: 1
            }
        },
        descirption: '系统异常'
    }
};

export default JNetworkFilm;
