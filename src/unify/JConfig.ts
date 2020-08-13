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
import JNetworkActivity from './JNetworkActivity';
import JNetworkWorker from "../network/JNetworkWorker";

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
    encryption: {
        required: () => true,
        paramsInterceptor: (params, self: JNetworkWorker) => ({...params, ...self.pickInjectParams()})
    },
    methodName: null,
    baseUrl: null
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
    JNetworkActivity,
    DEFAULT_NETWORK_CONFIG
};
