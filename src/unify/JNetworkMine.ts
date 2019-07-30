const JNetworkMine = {
    celCltCinema: {
        url: '/mine/celcltcinema',
        params: {
            openId: true,
            cinemaId: true
        },
        book: [
            'openId',
            'cinemaId'
        ]
    },
    cltCinema: {
        url: '/mine/cltcinema',
        params: {
            openId: true,
            cinemaId: true,
            cinemaName: true,
            cinemaAddress: true
        },
        book: [
            'openId',
            'cinemaId',
            'cinemaName',
            'cinemaAddress'
        ]
    },
    cltEdCinemaList: {
        url: '/mine/cltedcinemalist',
        params: {
            openId: true,
            page: true,
            size: false
        },
        book: [
            'openId',
            'page',
            'size'
        ]
    },
    orderList: {
        url: '/mine/orderlist',
        params: {
            openId: true,
            page: true,
            size: true,

            type: false
        },
        book: [
            'openId',
            'page',
            'size',
            'type'
        ]
    },
    orderDelete: {
        url: '/mine/cancelorder',
        params: {
            openId: true,
            orderId: true
        },
        book: [
            'openId',
            'orderId',
        ]
    },
    orderDetail: {
        url: '/mine/orderdetail',
        params: {
            openId: true,
            orderId: true,

        },
        book: [
            'openId',
            'orderId',
        ]
    },
    orderCancel: {
        url: '/order/cancel',
        params: {
            openId: true,
            orderId: true
        },
        book: [
            'openId',
            'orderId'
        ]
    }
};

export default JNetworkMine;
