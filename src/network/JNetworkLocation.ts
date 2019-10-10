'use strict';
import JNetworkWorker, {revealNetwork} from "./JNetworkWorker";

/**
 * 城市及定位接口
 * @hideconstructor
 */
class JNetworkLocation extends JNetworkWorker{
}

export default revealNetwork(JNetworkLocation, 'JNetworkLocation');
