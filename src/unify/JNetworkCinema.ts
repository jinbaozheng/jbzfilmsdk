import {JToolDate} from 'icemilk'
import JManagerSeat from './../util/JManagerSeat';
function _netcinema(cinema) {
    return {
        address: cinema.cinemaAddress,
        id: cinema.cinemaId,
        name: cinema.cinemaName,
        distance: cinema.distance,
        comparecount: cinema.maxCompareCount,
        comparedNames: JSON.parse(cinema.maxCompareNames),
        minprice: cinema.minPrice
    }
}
function _cinemaScreeningItems(data){
    return {
        cinemaId: data.cinemaId,
        cityId: data.cityId,
        cityName: data.cityName,
        compareCount: data.compareCount,
        compareNames: data.compareNames,
        dimensional: data.dimensional,
        duration: data.duration,
        filmId: data.filmId,
        filmName: data.filmName,
        hallName: data.hallName,
        jbzEndTime: data.jbzEndTime,
        jbzShowTime: data.jbzShowTime,
        language: data.language,
        minPrice: data.minPrice,
        showDate: data.showDate,
        showItems: {
            cinemaId: data.jbzPrice,
            dimensional: data.dimensional,
            filmId: data.filmId,
            hallName: data.hallName,
            language: data.language,
            minPrice: data.minPrice,
            cityId: data.cityId,
            cityName: data.cityName,
            compareCount: data.compareCount,
            compareNames: data.compareNames,
            duration: data.duration,
            filmName: data.filmName,
            jbzEndTime: data.jbzEndTime,
            jbzShowTime: data.jbzShowTime,
            showDate: data.showDate,
            jbzPrice: data.showItems.jbzPrice,
            oriPrice: data.showItems.oriPrice,
            priority: data.showItems.priority,
            showId: data.showItems.showId,
            type: data.showItems.type
        }
    }
}
const JNetworkCinema = {
    cinemasList: {
        url: '/cinema/cinemasbycityordertype',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            orderType: true,
            b: true,
            regionName: false,
            filmId: false,
            feature: false,
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
            'regionName',
            'filmId',
            'feature',
            'page',
            'size',
            'date'
        ],
        cook: _ => _.map(_netcinema)
    },
    cinemaScreeningFilmList: {
        url: '/cinema/films',
        params: {
            b: true,
            cinemaId: true

        },
        book: [
            'b',
            'cinemaId'
        ]
    },
    cinemaScreeningDateList: {
        url: '/cinema/filmshowdates',
        params: {
            b: true,
            cinemaId: true,
            filmId: true
        },
        book: [
            'b',
            'cinemaId',
            'filmId'
        ],
        cook: data => data.map(dateString => {
            return JToolDate.timeIntervalFromDateString(dateString);
        })
    },
    cinemaScreeningItems: {
        url: '/cinema/filmshows',
        params: {
            b: true,
            cinemaId: true,
            filmId: true,
            date: {
                required: true,
                cook: _ => {
                    return JToolDate.dateStringFromTimeInterval(_, 'yyyy-MM-dd');
                }
            }
        },
        book: [
            'b',
            'cinemaId',
            'filmId',
            'date'
        ],
        // cook: data => {
        //     return {city: _cinemaScreeningItems(data)};
        // },
        cook: _ => _.map(_cinemaScreeningItems)
    },
    cinemaSmartSeats: {
        url: '/cinema/realtimeseats',
        params: {
            type: {
                require: true,
                cook: _ => ((_ === 'meituan' || _ === 'dazhong') ? 'maoyan' : _)
            },
            cinemaId: true,
            showId: true,
            sectionId: false
        },
        cook: (_, {params}) => {
            if (_.requestId){
                return _;
            }
            return JManagerSeat.defaultManager().smartSeatsFromSeats(params.type, _.realTimeSeats);
        }
    },
    realTimeSeatsInfo: {
        url: '/cinema/realtimeseatsinfo',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ],
        cook: (_, {params}) => {
            if (_){
                return JManagerSeat.defaultManager().smartSeatsFromSeats(params.type, _.realTimeSeats);
            }
            return _;
        }
    }
};

export default JNetworkCinema;
