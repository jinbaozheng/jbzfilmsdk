
const JNetworkBanner = {
    banners: {
        url: '/banners'
    },
    bannerList: {
        url: '/banner/banners',
        params: {
            cityId: true,
            location: false
        },
        book:[
            'cityId',
            'location'
        ]
    }
};

export default JNetworkBanner;
