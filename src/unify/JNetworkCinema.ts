import {JToolDate} from 'icemilk'

const JNetworkCinema = {
    cinemasList: {
        url: '/cinema/cinemasbycityordertype',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            orderType: true,
            b: true,
            filmId: false,
            feature: false,
            regionName: false,
            page: false,
            size: false,
            date: false,
        },
        book: [
            'cityId',
            'longitude',
            'latitude',
            'orderType',
            'b',
            'filmId',
            'feature',
            'regionName',
            'page',
            'size',
            'date'
        ]
    }
};

export default JNetworkCinema;
