// import JNetworkBanner from './JNetworkBanner';
// import JNetworkCinema from './JNetworkCinema';
// import JNetworkFilm from './JNetworkFilm';
// import JNetworkLocation from './JNetworkLocation';
// import JNetworkSearch from './JNetworkSearch';
// import JNetworkOther from './JNetworkOther';

const DEFAULT_NETWORK_CONFIG = {
    precook: (_) => _.data,
    cook: (_) => _,
    method: 'post',
    url: '',
    params: {},
    headers: {},
    bodyData: {},
    useParams: [],
    useHeaders: [],
    useBodyData: [],
    rule: [0, 1, 2]
}

export default {
    DEFAULT_NETWORK_CONFIG,
    // JNetworkBanner,
    // JNetworkCinema,
    // JNetworkFilm,
    // JNetworkLocation,
    // JNetworkSearch,
    NetworkOther: {
        encrypt: {
            url: '/system/encrypt',
            params: {
                key: true
            }
        },
        test: {
            url: '/otaadmin/otaAdmin/city/getHotCities',
            params: {
                page: true,
                pageSize: true,
                status: true
            },
            headers: {
                authorization: false
            },

        }
    }
};
