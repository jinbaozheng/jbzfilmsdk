import FilmModel from '../model/FilmModel';
import FilmSimpleModel from '../model/FilmSimpleModel';

const JNetworkFilm = {
    hotFilms: {
        url:  '/film/hotfilms',
        cook: data => {
            let films = data.films.map(_ => FilmModel.create(_))
            return {count: data.count, films};
        }
    },
    hotFilmsByPage: {
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
    waitFilms: {
        url:  '/film/soonfilms',
        cook: data => {
            let films = data.films.map(_ => FilmModel.create(_))
            return {count: data.count, films};
        }
    },
    waitFilmsByPage: {
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
    filmDetail: {
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
