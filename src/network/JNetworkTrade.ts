'use strict';
import JNetworkWorker, {revealNetwork} from "./JNetworkWorker";

class JNetworkTrade extends JNetworkWorker{
}

export default new (revealNetwork(JNetworkTrade, 'JNetworkTrade'));
