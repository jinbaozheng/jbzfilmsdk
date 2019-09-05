import {JToolDate} from 'icemilk'
import SeatManager from '../util/JManagerSeat'
import JNetworkCienema from '../network/JNetworkCinema'

function _netcinema(cinema) {
    return {
        address: cinema.cinemaAddress,
        id: cinema.cinemaId,
        name: cinema.cinemaName,
        distance: cinema.distance,
        compareCount: cinema.maxCompareCount,
        comparedNames: JSON.parse(cinema.maxCompareNames),
        minPrice: cinema.minPrice
    }
}

function _cinemaScreeningItems(data) {
    return data = {
        ...data,
        showItems: data.showItems.map(_ => ({
            ..._,
            ...data
        }))
    }
}

const JNetworkCinema = {
    cinemaDetail: {
        url: '/cinema/cinemadetail',
        params: {
            cinemaId: true,
            openId: false,
        },
        book: [
            'cinemaId',
        ]
    },
    cinemasList: {
        url: '/cinema/cinemasbycityordertype',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            orderType: {
                required: false,
                default: 2
            },
            regionName: false,
            filmId: false,
            feature: false,
            page: false,
            size: false,
            date: false,
        },
        cook: _ => _.map(_netcinema)
    },
    cinemaScreeningFilmList: {
        url: '/cinema/films',
        params: {
            cinemaId: true
        },
        book: [
            'cinemaId'
        ]
    },
    cinemaScreeningDateList: {
        url: '/cinema/filmshowdates',
        params: {
            cinemaId: true,
            filmId: true
        },
        book: [
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
            'cinemaId',
            'filmId',
            'date'
        ],
        cook: _ => _.map(_cinemaScreeningItems)
    },
    cinemaSeats: {
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
        cook: (_) => {
            return _;
        }
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
        cook: (_, __) => {
            const {platform} = _;
            if (_.hasOwnProperty('requestId')){
                return _.requestId
            }
            return SeatManager.defaultManager().smartSeatsFromSeats(platform, _);
        }
    },
    cinemaSmartSeatsByRequestId: {
        url: '/cinema/realtimeseatsinfo',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ],
        cook: (_, __) => {
            if(!_){
                return null;
            }
            const {platform} = _;
            return SeatManager.defaultManager().smartSeatsFromSeats(platform, _);
        }
    }
};

export default JNetworkCinema;
