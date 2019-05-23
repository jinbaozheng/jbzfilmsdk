import {JToolDate} from 'icemilk'

const JNetworkCinema = {
    cinemas: {
        url: '/cinema/cinemas',
        bodyData: {
            "filmId": false,
            "date": false,
            "feature": false,
            "limit": false,
            "orderType": false,
            "regionName": false
        },
        useBodyData: [
            'cityId',
            'coordinate'
        ]
    },
    cinemaDetail: {
        url: '/cinema/detail',
        bodyData: {
            cinemaId: true
        }
    },
    cinemaScreeningFilmList: {
        url: '/cinema/films',
        bodyData: {
            cinemaId: true
        }
    },
    cinemaScreeningDateList: {
        url: '/cinema/filmShowDates',
        bodyData: {
            cinemaId: true,
            filmId: true
        },
        cook: ({data}) => {
            return data.map(date => {
                return JToolDate.timeIntervalFromDateString(date);
            });
        }
    },
    cinemaScreeningItems:{
        url: '/cinema/filmShows',
        bodyData: {
            cinemaId: true,
            date: {
                required: true,
                cook: _ => JToolDate.dateStringFromTimeInterval(_, 'yyyy-MM-dd')
            },
            filmId: true
        }
    },
    cinemaSeats:{
        url: '/cinema/realTimeSeats',
        bodyData: {
            jbzCinemaId: true,
            platform: true,
            sectionId: false,
            showId: true
        }
    },
    cinemasList: {
        url: '/cinema/cinemasbycityordertype',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            orderType: true,
            bank: true,
            filmId: false,
            feature: false,
            regionName: false,
            limit: false,
            date: false,

        },
        book: [
            'cityId',
            'longitude',
            'latitude',
            'orderType',
            'bank',
            'filmId',
            'feature',
            'regionName',
            'limit',
            'date'
        ]
    }
};

export default JNetworkCinema;
