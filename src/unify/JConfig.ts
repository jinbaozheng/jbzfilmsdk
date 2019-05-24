import JNetworkCity from './JNetworkCity';
import JNetworkTrade from './JNetworkTrade';
import JNetworkBanner from './JNetworkBanner';
import JNetworkCinema from './JNetworkCinema';
import JNetworkFilm from './JNetworkFilm';
import JNetworkLocation from './JNetworkLocation';
import JNetworkSearch from './JNetworkSearch';
import JNetworkOther from './JNetworkOther';

const DEFAULT_NETWORK_CONFIG: object = {
    precook: (_) => _.data,
    cook: (_) => _,
    method: 'post',
    url: '',
    book: null,
    params: {},
    headers: {},
    bodyData: {},
    useParams: [],
    useHeaders: [],
    useBodyData: [],
    rule: [1, 0, 2]
};

export default {
    JNetworkCity,
    JNetworkTrade,
    JNetworkBanner,
    JNetworkCinema,
    JNetworkFilm,
    JNetworkLocation,
    JNetworkSearch,
    JNetworkOther,
    DEFAULT_NETWORK_CONFIG
};
