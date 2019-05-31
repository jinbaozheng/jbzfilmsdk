import JNetworkAccount from './JNetworkAccount';
import JNetworkMine from './JNetworkMine';
import JNetworkTrade from './JNetworkTrade';
import JNetworkCity from './JNetworkCity';
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
    rule: [0, 1, 2],
    encryption: true
};

export default {
    JNetworkAccount,
    JNetworkMine,
    JNetworkTrade,
    JNetworkCity,
    JNetworkBanner,
    JNetworkCinema,
    JNetworkFilm,
    JNetworkLocation,
    JNetworkSearch,
    JNetworkOther,
    DEFAULT_NETWORK_CONFIG
};
