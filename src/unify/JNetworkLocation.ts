import CityModel from '../model/CityModel';
import DistrictModel from "../model/DistrictModel";

const JNetworkLocation = {
    cities: {
        url: '/location/cities',
        cook: (data) => data.map(_ => CityModel.create(_))
    },
    city: {
        url: '/location/city',
        useBodyData: [
            'coordinate'
        ],
        cook: (data) => CityModel.create(data)
    },
    cityById: {
        url: '/location/cityById',
        useBodyData: [
            'cityId'
        ],
        cook: (data) => CityModel.create(data)
    },
    districts: {
        url: '/location/districts',
        useBodyData: [
            'cityId'
        ],
        cook: (data) => data.map(_ => DistrictModel.create(_))
    },
    hotCities: {
        url: '/location/hotCities',
        cook: (data) => data.map(_ => CityModel.create(_))
    }
}

export default JNetworkLocation;
