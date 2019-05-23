
const JNetworkBanner = {
    banners: {
        url: '/banners'
    },
    bannerList: {
        url: '/banner/banners',
        params: {
            location: true,
            b: true,
            cityId: false,
        },
        book: [
            'location',
            'b',
            'cityId'
        ]
    }
};

export default JNetworkBanner;
