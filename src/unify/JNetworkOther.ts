const JNetworkOther = {
    decrypt: {
        url: '/system/decrypt',
    },
    encrypt: {
        url: '/system/encrypt',
        params: {
            key: true
        }
    },
    login: {
        url: '/system/login'
    }
}

export default JNetworkOther;
