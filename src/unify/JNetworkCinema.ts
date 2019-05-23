import DateTool from 'icemilk'
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
        ]
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
                    return DateTool.dateStringFromTimeInterval(_, 'yyyy-MM-dd');
                }
            }
        },
        book: [
            'b',
            'cinemaId',
            'filmId',
            'date'
        ],
        cook: _ => _,
    }
};

export default JNetworkCinema;
