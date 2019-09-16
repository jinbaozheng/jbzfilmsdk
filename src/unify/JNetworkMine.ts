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
    collectedCinemaList: {
        url: '/mine/cltedcinemalist',
        params: {
            openId: true,
            page: true,
            size: false,
        },
    },
    orderList: {
        url: '/mine/orderlist',
        params: {
            openId: true,
            page: true,
            size: true,
            type: false
        }
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
    },
    lookedFilms: {
        url: '/mine/lookedfilms',
        params: {
            openId: true,
            page: true,
            size: false
        }
    },

};

export default JNetworkMine;
