const JNetworkAccount = {
    accountLogin: {
        url: '/account/login',
        params: {
            mobile: true,
            password: true
        },
        book: [
            'mobile',
            'password'
        ]
    },
    accountLogout: {
        url: '/account/logout',
        headers: {
            sessionId: true
        },
        book: [
            'sessionId'
        ]
    },
    accountVerifyCode: {
        url: '/account/verifycode',
        params: {
            mobile: true,
            codetype: true
        },
        book: [
            'mobile',
            'codetype'
        ]
    },
    accountRegister: {
        url: '/account/register',
        params: {
            mobile: true,
            verifyCode: true,
            password: true
        },
        book: [
            'mobile',
            'verifyCode',
            'password'
        ]
    },
    accountUpdatepass: {
        url: '/account/updatepass',
        params: {
            mobile: true,
            verifyCode: true,
            password: true
        },
        book: [
            'mobile',
            'verifyCode',
            'password'
        ]
    },
    SystemEncrypt: {
        url: '/system/encrypt',
        params: {
            key:true
        },
        book: [
            'key'
        ]
    },
    SystemDecrypt: {
        url: '/system/decrypt',
        params: {
            key:true
        },
        book: [
            'key'
        ]
    },
    SystemLogin: {
        url: '/cmbc/login',
        params: {
            key:true
        },
        book: [
            'key'
        ]
    }
};

export default JNetworkAccount;
