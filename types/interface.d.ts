import {INetworkConfig as _IceNetworkConfig, JNetworkRoot} from 'icemilk';


export declare interface IWorkerDelegate {
    resolveDataInterceptor(self: JNetworkRoot, data: any);
    rejectDataInterceptor(self: JNetworkRoot, data: any);
}

/**
 * @hidden
 */
export declare interface INetworkConfig extends _IceNetworkConfig {
   workerDelegate?: IWorkerDelegate;
}

/**
 * 暴露网络请求类配置接口
 */
export declare interface REVEAL_NETWORK_CONFIG {

}
