const JNetworkOther = {
    systemEncrypt: {
        url: '/system/encrypt',
        params: {
            key:true
        },
        book: [
            'key'
        ]
    },
    systemDecrypt: {
        url: '/system/decrypt',
        params: {
            key:true
        },
        book: [
            'key'
        ]
    },
}

export default JNetworkOther;
