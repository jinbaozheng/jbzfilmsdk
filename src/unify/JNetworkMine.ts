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
            page: true,
            size: true,
            openId: true,
            type: false
        },
        book: [
            'page',
            'size',
            'openId',
            'type'
        ]
    },
    orderDelete: {
        url: '/mine/cancelorder',
        params: {
            orderId: true,
            openId: true
        },
        book: [
            'orderId',
            'openId'
        ]
    },
    orderDetail: {
        url: '/mine/orderdetail',
        params: {
            orderId: true,
            openId: true
        },
        book: [
            'orderId',
            'openId'
        ]
    }
};

export default JNetworkMine;
