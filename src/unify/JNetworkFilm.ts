import FilmModel from '../model/FilmModel';
import FilmSimpleModel from '../model/FilmSimpleModel';

const JNetworkFilm = {
    filmHotFilms: {
        url:  '/film/hotfilms',
        cook: data => {
            let films = data.films.map(_ => FilmModel.create(_))
            return {count: data.count, films};
        }
    },
    hotFilmsPage: {
        url:  '/film/hotfilmspage',
        params: {
            page: true,
            size: true
        },
        book: [
            'page',
            'size'
        ],
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    filmWaitFilms: {
        url:  '/film/soonfilms',
        cook: data => {
            let films = data.films.map(_ => FilmModel.create(_))
            return {count: data.count, films};
        }
    },
    soonFilmsPage: {
        url:  '/film/soonfilmspage',
        params: {
            page: true,
            size: true
        },
        book: [
            'page',
            'size'
        ],
        cook: (data) => data.map(_ => FilmModel.create(_))
    },
    filmFilm: {
        url:  '/film/film',
        params: {
            filmId: true
        },
        book:[
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
