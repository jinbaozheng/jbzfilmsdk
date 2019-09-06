const JNetworkSearch = {
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
    },
    searchHotKey: {
        url: 'M10041',
        params: {
            cityId: false
        }
    }
};

export default JNetworkSearch;
