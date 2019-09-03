import FilmModel from '../model/FilmModel';
import FilmSimpleModel from '../model/FilmSimpleModel';

const JNetworkFilm = {
    hotFilms: {
        url:  '/film/hotfilms',
        cook: ({count, films}) => {
            return {count, films: films.map(_ => FilmModel.create(_))};
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
        cook: ({count, films}) => {
            return {count, films: films.map(_ => FilmModel.create(_))};
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
        cook: (data) => FilmModel.create(data)
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
