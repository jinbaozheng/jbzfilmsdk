'use strict';
import JNetworkWorker, {revealNetwork} from './JNetworkWorker';

class JNetworkAccount extends JNetworkWorker{
}

export default revealNetwork(JNetworkAccount, 'JNetworkAccount');
