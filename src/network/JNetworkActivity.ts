'use strict';
import JNetworkWorker, {revealNetwork} from './JNetworkWorker';

class JNetworkActivity extends JNetworkWorker{
}

export default revealNetwork(JNetworkActivity, 'JNetworkActivity');
