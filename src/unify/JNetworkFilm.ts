import {JToolDate} from 'icemilk';
import FilmModel from '../model/FilmModel';
import FilmSimpleModel from '../model/FilmSimpleModel';
import CommentModel from '../model/CommentModel';

const JNetworkFilm = {
    hotfilms: {
        url:  '/film/hotFilms',
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    hotFilmsSimple: {
        url:  '/film/hotFilmsSimple',
        cook: (data) => data.map(_ => FilmSimpleModel.create(_))
    },
    waitFilms: {
        url:  '/film/upcomingFilms',
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    filmHotfilms: {
        url:  '/film/hotfilms',
        params: {
            b: true
        },
        book: [
          'b'
        ],
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    hotFilmsPage: {
        url:  '/film/hotfilmspage',
        params: {
            b: true,
            page: true,
            size: true
        },
        book: [
            'b',
            'page',
            'size'
        ],
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    filmWaitfilms: {
        url:  '/film/soonfilms',
        params: {
            b: true
        },
        book: [
            'b'
        ],
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    soonFilmsPage: {
        url:  '/film/soonfilmspage',
        params: {
            b: true,
            page: true,
            size: true
        },
        book: [
            'b',
            'page',
            'size'
        ],
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    filmFilm: {
        url:  '/film/film',
        params: {
            b: true,
            filmId: true
        },
        book:[
            'b',
            'filmId'
        ],
        cook: (data) => ({
            film: FilmModel.create(data)
        })
    },
    filmHotComments: {
        url:  '/film/hotcomments',
        params: {
            filmId: true
        },
        book: [
            'filmId'
        ],
        description: '无数据'
    },
};

export default JNetworkFilm;
