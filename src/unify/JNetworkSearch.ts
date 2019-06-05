const JNetworkSearch = {
    hotQuery: {
        url: '/search/hotQuery'
    },
    searchall: {
        url: '/search/searchall',
        params: {
          cityId: true,
          key: true,
          longitude: true,
          latitude: true,
          page: true,
          size: false
        },
        book: [
          'cityId',
          'key',
          'longitude',
          'latitude',
          'page',
          'size'
        ],
        description: 'cinema 无数据'
    }
}

export default JNetworkSearch;
