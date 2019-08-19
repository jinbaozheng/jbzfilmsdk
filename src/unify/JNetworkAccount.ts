const JNetworkAccount = {
    systemLogin: {
        url: '/system/login',
        params: {
            key:true
        },
        book: [
            'key'
        ]
    },
    accountLogin: {
        url: '/account/login',
        params: {
            key: true
        },
        book: [
            'key'
        ]
    }
};

export default JNetworkAccount;
