import unify from './spd.network.unify';
import url from './spd.url.config'
import config from './JConfig';

// class NeworkBanner extends jbzfilmsdk.JNetworkBanner{
//
// }

const revealNetwork = jbzfilmsdk.revealNetwork;


class NeworkCinema extends jbzfilmsdk.JNetworkCinema{
}

class NetworkFilm extends jbzfilmsdk.JNetworkFilm{
}

class NetworkLocation extends jbzfilmsdk.JNetworkLocation{
}


class NetworkSearch extends jbzfilmsdk.JNetworkSearch{
}


class NetworkOther extends jbzfilmsdk.JNetworkOther{
}

const _NetworkOther = revealNetwork(NetworkOther, 'NetworkOther', config)

let delegate = {
    globalBodyData: function () {
        let gp = {
            coordinate: function () {
                return {
                    latitude: 38.6518,
                    longitude: 104.07642
                };
            },
            cityId: function () {
                return 2;
            }
        };
        return gp;
    }
};

export default {
    // NeworkBanner: new NeworkBanner({
    //     baseUrl: 'http://10.1.1.70:10002/cmbc/'
    // }),
    NetworkCinema: new NeworkCinema({
        baseUrl: 'http://10.1.1.70:10002/cmbc/',
        delegate,
        carryHeaders: function () {
            return {
                'Content-Type': 'application/json'
            }
        }
    }),
    NetworkFilm: new NetworkFilm({
        baseUrl: 'http://10.1.1.70:10002/cmbc/',
        delegate,
        carryHeaders: function () {
            return {
                'Content-Type': 'application/json'
            }
        }
    }),
    NetworkLocation: new NetworkLocation({
        baseUrl: 'http://10.1.1.70:10002/cmbc/',
        delegate,
        carryHeaders: function () {
            return {
                'Content-Type': 'application/json'
            }
        }
    }),
    NetworkSearch: new NetworkSearch({
        baseUrl: 'http://10.1.1.70:10002/cmbc/',
        delegate,
        carryHeaders: function () {
            return {
                'Content-Type': 'application/json'
            }
        }
    }),
    NetworkOther: new _NetworkOther({
        baseUrl: 'http://10.1.1.70:10002/cmbc/',
        delegate,
        carryHeaders: function () {
            return {
                'Content-Type': 'application/json'
            }
        }
    })
}
