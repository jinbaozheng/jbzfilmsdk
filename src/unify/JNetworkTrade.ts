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
            requestId: true
        },
        book: [
            'requestId'
        ]
    },
    orderStatus: {
        url: '/system/status',
        params: {
            payNo:true
        },
        book: [
            'payNo'
        ]
    },
    confirmPay: {
        url: '/system/confirm/pay',
        params: {
            _CallBackUrl:false,
            orderId:false,
            token:false
        }
    },
    confirmOrder: {
        url: '/order/confirmorder',
        params: {
            jsonStr: true
        },
        book: [
            'jsonStr'
        ]
    }
}

export default JNetworkTrade;
