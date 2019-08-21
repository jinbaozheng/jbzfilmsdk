function _netBanner(banner) {
    return {
        cityId:banner.cityId,
        column: banner.column,
        id: banner.id,
        imgUrl: banner.imgUrl,
        title: banner.title,
        href: banner.link,
        activity: JSON.parse(banner.activity)
    };
}
const JNetworkBanner = {
    bannerList: {
        url: '/banner/banners',
        params: {
            location: true,
            cityId: false
        },
        book: [
            'location',
            'cityId?'
        ],
        cook: _=>_.map(_netBanner)
    }
};

export default JNetworkBanner;
