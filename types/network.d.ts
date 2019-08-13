import {INetworkStandardPromiseType, JNetworkRoot} from 'icemilk';
import {PageModel} from "./model"
import {CinemaFilterParas} from "./paras"

export declare class JNetworkAccount extends JNetworkWorker{
    accountLogin(mobile, password): Promise<any>
    accountLogout(sessionId): Promise<any>
    accountVerifyCode(mobile, type): Promise<any>
    accountRegister(mobile, verifyCode, password): Promise<any>
    accountUpdatePassword(mobile, verifyCode, password): Promise<any>
}

export declare class JNetworkCity extends JNetworkWorker{
    cityList(): Promise<any>
    cityByCoordinate(coordinate): Promise<any>
    cityNeedCoordinate(): Promise<any>
    cityById(cityId): Promise<any>
    cityDistrictList(cityId): Promise<any>
    cityHotList(): Promise<any>
}

export declare class JNetworkFilm extends JNetworkWorker{
    filmHotFilms(page: PageModel): Promise<any>
    filmHotFilmsSimple(): Promise<any>
    filmWaitFilms(page): Promise<any>
    filmDetail(filmId, platform?): Promise<any>
    filmDateList(filmId): Promise<any>
}

export declare class JNetworkCinema extends JNetworkWorker{
    cinemaDetail(cinemaId): Promise<any>
    cinemaList(location: any, cinemaFilter: CinemaFilterParas);
    cinemaList(cinemaFilter: CinemaFilterParas);
    cinemaList(location: any, cinemaFilter?: any): Promise<any>
    cinemaScreeningFilmList(cinemaId): Promise<any>
    cinemaScreeningDateList(cinemaId, filmId): Promise<any>
    cinemaScreeningItems(cinemaId, filmId, date): Promise<any>
    cinemaSeats(type, paras): Promise<any>
    cinemaSmartSeats(type, paras): Promise<any>
    cinemaFavoriteCinema(cinemaId, cinemaName): Promise<any>
    cinemaCancelFavoriteCinema(cinemaId): Promise<any>
}

export declare class JNetworkOther extends JNetworkWorker{
    search(cityId, searchKey, nextPageFirstKey): Promise<any>
    hotSearchKeyword(): Promise<any>
    otherBanners(location, cityId): Promise<any>
    banners(position, cityId): Promise<any>
    static search(cityId, searchKey, nextPageFirstKey): Promise<any>
}

export declare class JNetworkMine extends JNetworkWorker{
    mineOrder(): Promise<any>
    mineFavoriteCinema(): Promise<any>
    mineFavorite(): Promise<any>
}

export declare function revealNetwork<T extends new(...args: any[]) => JNetworkWorker>(networkClass: T,
                                                                                       networkName?: string,
                                                                                       config?: object): T;
export declare function configPicker(picker: any|object|(() => object)): void;

export type PromiseData = Promise<any>;
export declare class JNetworkWorker extends JNetworkRoot {
    fetchRequest(...args): INetworkStandardPromiseType<any>;
}

