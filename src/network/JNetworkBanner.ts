'use strict';
import JNetworkWorker, {revealNetwork} from './JNetworkWorker';

class JNetworkBanner extends JNetworkWorker{
}

export default revealNetwork(JNetworkBanner, 'JNetworkBanner');
