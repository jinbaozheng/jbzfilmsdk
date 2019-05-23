const JNetworkSearch = {
    hotQuery: {
        url: '/search/hotQuery'
    },
    searchall: {
        url: '/search/searchall',
        params: {
          b: true,
          cityId: true,
          key: true,
          longitude: true,
          latitude: true,
          page: true,
          size: false
        },
        book: [
          'b',
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
