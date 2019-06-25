const JNetworkTrade = {
    lockSeat: {
        url: '/order/lockseat',
        params: {
            openId: true,
            mobile: true,
            showId: true,
            type: true,
            cinemaId: true,
            filmId: true,
            seatIds: true,
            count: true,
            cityId: true,
            seatInfos: false,
            hallId: false,
            areaInfo: false,
            applyKey: false,
            seatNames: false,
        }
    },
    lockStatus: {
        url: '/order/lockstatus',
        params: {
            requestId: true,
            openId: true
        },
        book: [
            'requestId',
            'openId'
        ]
    },
    getOrderResult: {
        url: '/cmbc/status',
        params: {
            orderId:true
        },
        book: [
            'orderId'
        ]
    }
}

export default JNetworkTrade;
