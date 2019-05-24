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
    let showItems = data.showItems;
    let showItemsObj = {
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
        showTime: data.showTime,
    };
    for (let i = 0; i < data.showItems.length; i++){
        showItems[i] = Object.assign({},showItems[i], showItemsObj);
    }
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
        showTime: data.showTime,
        showItems: showItems
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
