const JNetworkSearch = {
    hotSearchList: {
        url: '/search/hotQuery'
    },
    search: {
        url: '/search/searchall',
        params: {
            cityId: true,
            longitude: true,
            latitude: true,
            key: true,
            page: true,
            size: false
        },
        book: [
            'key',
            'page',
            'size?'
        ],
        description: 'cinema 无数据'
    }
}

export default JNetworkSearch;
