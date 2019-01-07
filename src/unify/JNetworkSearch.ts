import FilmModel from '../model/FilmModel';
import CinemaModel from '../model/CinemaModel';

const JNetworkSearch = {
    hotQuery: {
        url: '/search/hotQuery'
    },
    search: {
        url: '/search/search',
        bodyData: {
            queryStr: true
        },
        useBodyData: [
            'cityId',
            'coordinate'
        ],
        cook: data => ({
            filmList: data.films.map(_ => FilmModel.create(_)),
            cinemaList: data.cinemas.map(_ => CinemaModel.create(_))
        }),
        description: 'cinema 无数据'
    }
}

export default JNetworkSearch;
