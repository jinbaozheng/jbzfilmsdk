const JNetworkMine = {
    celCltCinema: {
        url: '/mine/celcltcinema',
        params: {
            b: true,
            openId: true,
            cinemaId: true
        },
        book: [
            'b',
            'openId',
            'cinemaId'
        ]
    },
    cltCinema: {
        url: '/mine/cltcinema',
        params: {
            b: true,
            openId: true,
            cinemaId: true,
            cinemaName: true,
            cinemaAddress: true
        },
        book: [
            'b',
            'openId',
            'cinemaId',
            'cinemaName',
            'cinemaAddress'
        ]
    },
    cltEdCinemaList: {
        url: '/mine/cltedcinemalist',
        params: {
            b: true,
            openId: true,
            page: true,
            size: false
        },
        book: [
            'b',
            'openId',
            'page',
            'size'
        ]
    }
};

export default JNetworkMine;
