import {JToolObject as ObjectTool} from "icemilk";
function _netCityToCity(city) {
    return {id: city.id, name: city.city_name, latin: city.city_en, provinceId: city.province_id};
}
const JNetworkCity = {
    cityByCoordinate: {
        url: '/location/city',
        params: {
            'latitude': true,
            'longitude': true
        },
        cook: data => {
            let address = data.city;
            ObjectTool.deleteProperty(data.city, 'formatAddress');
            return {city: _netCityToCity(data.city), address};
        }
    }
};

export default JNetworkCity;
