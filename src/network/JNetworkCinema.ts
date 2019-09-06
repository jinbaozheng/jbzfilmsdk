'use strict';
import JNetworkWorker, {revealNetwork} from "./JNetworkWorker";

/**
 * 影院接口
 */
class JNetworkCinema extends JNetworkWorker{
}

export default revealNetwork(JNetworkCinema, 'JNetworkCinema');
