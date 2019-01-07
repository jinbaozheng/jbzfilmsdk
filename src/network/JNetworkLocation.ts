'use strict';
import JNetworkWorker, {revealNetwork} from "./JNetworkWorker";

/**
 * 城市及定位接口
 * @memberOf module:network
 * @hideconstructor
 */
class JNetworkLocation extends JNetworkWorker{
}

export default revealNetwork(JNetworkLocation);
