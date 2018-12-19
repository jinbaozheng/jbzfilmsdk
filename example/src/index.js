import unify from './spd.network.unify';
import url from './spd.url.config'
import {JNetworkCity, JNetworkWorker} from 'jbzfilmsdk';
class NetworkCity extends JNetworkCity{
    districtList(cityId){
        return this.prefixPromise('/location/districts', this.otherParas.cityId).then(districts => {
            return districts.map(district => {
                return {name: district.tails.Name, id: district.id}
            })
        });
    }
    // 获取热门城市列表
    static fetchHotCityList() {
        return JNetworkWorker.useParas('login').POST('/location/hotcities')
    }
}

export default {
    unify,
    url,
    NetworkCity,
    C
}
