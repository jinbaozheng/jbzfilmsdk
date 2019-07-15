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

function _cinemaScreeningItems(data) {
    return data = {
        ...data,
        showItems: data.showItems.map(_ => ({
            ..._,
            ...data
        }))
    }
    // let showItems = data.showItems;
    // let showItemsObj = {
    //     cinemaId: data.cinemaId,
    //     cityId: data.cityId,
    //     cityName: data.cityName,
    //     compareCount: data.compareCount,
    //     compareNames: data.compareNames,
    //     dimensional: data.dimensional,
    //     duration: data.duration,
    //     filmId: data.filmId,
    //     filmName: data.filmName,
    //     hallName: data.hallName,
    //     jbzEndTime: data.jbzEndTime,
    //     jbzShowTime: data.jbzShowTime,
    //     language: data.language,
    //     minPrice: data.minPrice,
    //     showDate: data.showDate,
    //     showTime: data.showTime,
    // };
    // for (let i = 0; i < data.showItems.length; i++) {
    //     showItems[i] = Object.assign({}, showItems[i], showItemsObj);
    // }
    // return {
    //     cinemaId: data.cinemaId,
    //     cityId: data.cityId,
    //     cityName: data.cityName,
    //     compareCount: data.compareCount,
    //     compareNames: data.compareNames,
    //     dimensional: data.dimensional,
    //     duration: data.duration,
    //     filmId: data.filmId,
    //     filmName: data.filmName,
    //     hallName: data.hallName,
    //     jbzEndTime: data.jbzEndTime,
    //     jbzShowTime: data.jbzShowTime,
    //     language: data.language,
    //     minPrice: data.minPrice,
    //     showDate: data.showDate,
    //     showTime: data.showTime,
    //     showItems: showItems
    // }
}

const JNetworkCinema = {
    cinemaDetail: {
        url: '/cinema/cinemadetail',
        params: {
            cinemaId: true,
            openId: false
        },
        book: [
            'cinemaId',
            'openId'
        ]
    },
    cinemasList: {
        url: '/cinema/cinemasbycityordertype',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            orderType: true,
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
            if (_.requestId) {
                return _;
            } else if (_){
                if (params.type === 'ytb'){
                    const {seatMap} = _;
                    for(let seatKey in seatMap){
                        const seat = seatMap[seatKey];
                        seat.seatCol = seat.seatCol || '1';
                        seat.seatRow = seat.seatRow || '1';
                    }
                }
                return JManagerSeat.defaultManager().smartSeatsFromSeats(params.type, _);
            }
            return _;
        }
    },
    // 这里传type是座位图进行判断的，绝望的异步
    realTimeSeatsInfo: {
        url: '/cinema/realtimeseatsinfo',
        params: {
            type: {
                require: true,
                cook: _ => ((_ === 'meituan' || _ === 'dazhong') ? 'maoyan' : _)
            },
            requestId: true
        },
        book: [
            'requestId',
            'type'
        ],
        cook: (_, {params}) => {
            if (_) {
                if (params.type === 'ytb'){
                    const {seatMap} = _;
                    for(let seatKey in seatMap){
                        const seat = seatMap[seatKey];
                        seat.seatCol = seat.seatCol || '1';
                        seat.seatRow = seat.seatRow || '1';
                    }
                }
                return JManagerSeat.defaultManager().smartSeatsFromSeats(params.type, _);
            }
            return _;
        }
    }
};

export default JNetworkCinema;
