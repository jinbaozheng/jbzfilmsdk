'use strict';
import JNetworkWorker, {revealNetwork} from "./JNetworkWorker";

class NetworkTrade extends JNetworkWorker{
}

export default revealNetwork(NetworkTrade, 'NetworkTrade');
