const JNetworkMine = {
    cancelCollectCinema: {
        url: '/mine/celcltcinema',
        params: {
            openId: true,
            cinemaId: true
        },
        book: [
            'cinemaId'
        ]
    },
    collectCinema: {
        url: '/mine/cltcinema',
        params: {
            openId: true,
            cinemaId: true,
            cinemaName: true,
            cinemaAddress: true,
        },
        book: [
            'cinemaId',
            'cinemaName',
            'cinemaAddress',
        ]
    },
    cltEdCinemaList: {
        url: '/mine/cltedcinemalist',
        params: {
            openId: true,
            page: true,
            size: false,
        },
        book: [
            'page',
            'size?',
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
            'page',
            'size',
            'type?',
        ]
    },
    orderDelete: {
        url: '/mine/cancelorder',
        params: {
            openId: true,
            orderId: true
        },
        book: [
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
            'orderId',
        ]
    }
};

export default JNetworkMine;
