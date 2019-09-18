import {JToolObject as ObjectTool} from "icemilk";
import CityModel from "../model/CityModel";
import DistrictModel from "../model/DistrictModel";

function _netCityToCity(city) {
    return {id: city.id, name: city.cityName, latin: city.cityEn, provinceId: city.provinceId};
}

const JNetworkCity = {
    cityByCoordinate: {
        url: '/location/city',
        params: {
            longitude: false,
            latitude: false
        },
        book: [
            'longitude',
            'latitude'
        ],
        cook: data => {
            // 轮询为空防止找不到报错
            if (data.requestId) {
                return data;
            }
            let address = data;
            ObjectTool.deleteProperty(address, 'formatAddress');
            return {city: _netCityToCity(address), address};
        }
    },
    locationCityInfo: {
        url: '/location/cityinfo',
        params: {
            requestId: true
        },
        book: [
            'requestId'
        ],
        cook: data => {
            // 轮询为空防止找不到报错
            if (data) {
                let address = data;
                ObjectTool.deleteProperty(address, 'formatAddress');
                return {city: _netCityToCity(address), address};
            } else {
                return data;
            }
        }
    },
    cityHotList: {
        url: '/location/hotcities',
        cook: _ => _.map(_netCityToCity)
    },
    cityList: {
        url: '/location/cities',
        cook: _ => _.map(_netCityToCity)
    },
    cityById: {
        url: '/location/citybyid',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ],
        cook: _ => _.map(_netCityToCity)
    },
    districts: {
        url: '/location/districts',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ]
    },
    cityDistrictList: {
        url: '/location/districts',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ],
        cook: data => data.map(_ => ({
            name: _.districtName,
            id: _.id
        }))
    }
};

export default JNetworkCity;
