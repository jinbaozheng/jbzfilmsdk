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
    }
};

export default JNetworkMine;
