'use strict';
import JNetworkWorker, {revealNetwork} from "./JNetworkWorker";

/**
 * 影片接口
 * @memberOf module:network
 */
class JNetworkFilm extends JNetworkWorker {
}

export default revealNetwork(JNetworkFilm, 'JNetworkFilm');
