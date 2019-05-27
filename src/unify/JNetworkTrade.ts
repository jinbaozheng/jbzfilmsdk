const JNetworkTrade = {
    lockSeat: {
        url: '/order/lockseat',
        params: {
            b: false,
            openId: false,
            mobile: false,
            showId: false,
            type: false,
            cinemaId: false,
            filmId: false,
            seatIds: false,
            count: false,
            seatInfos: false,
            cityId: false,
            hallId: false,
            areaInfo: false,
            applyKey: false,
            seatNames: false,
        }
    },
    lockStatus: {
        url: '/order/lockstatus',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ]
    }
}

export default JNetworkTrade;
