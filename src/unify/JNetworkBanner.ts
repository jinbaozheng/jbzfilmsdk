function _netBanner(banner) {
    return {cityId:banner.cityId, column: banner.column, id: banner.id, imgUrl: banner.imgUrl, title: banner.title, href: banner.link};
}
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
        ],
        cook: _=>_.map(_netBanner)
    }
};

export default JNetworkBanner;
