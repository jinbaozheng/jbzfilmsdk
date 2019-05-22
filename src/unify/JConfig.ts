import JNetworkBanner from './JNetworkBanner';
import JNetworkCinema from './JNetworkCinema';
import JNetworkFilm from './JNetworkFilm';
import JNetworkLocation from './JNetworkLocation';
import JNetworkSearch from './JNetworkSearch';
import JNetworkOther from './JNetworkOther';
import JNetworkCity from './JNetworkCity';

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
    JNetworkBanner,
    JNetworkCinema,
    JNetworkFilm,
    JNetworkLocation,
    JNetworkSearch,
    JNetworkOther,
    JNetworkCity,
    DEFAULT_NETWORK_CONFIG
};
