import {JToolObject as ObjectTool} from "icemilk";
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
        ]
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
            let address = data.city;
            ObjectTool.deleteProperty(data.city, 'formatAddress');
            return {city: _netCityToCity(data.city), address};
        }
    },
    cityHotList:{
        url: '/location/hotcities',
        cook: _ => _.map(_netCityToCity)
    },
    cityList:{
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
        ]
    },
    districts: {
        url: '/location/districts',
        params: {
            cityId: true
        },
        book: [
            'cityId'
        ]
    }
};

export default JNetworkCity;
