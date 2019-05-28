'use strict';
import JNetworkWorker, {revealNetwork} from './JNetworkWorker';

class JNetworkMine extends JNetworkWorker{
}

export default revealNetwork(JNetworkMine, 'JNetworkMine');
