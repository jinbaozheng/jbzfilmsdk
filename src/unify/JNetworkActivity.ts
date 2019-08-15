const JNetworkActivity = {
    getActivityQuota: {
        url: '/get/activity/quota',
        params: {
            openId: false,
            activityId: true,
            positionCityId: true,
            selectedCityId: true
        }
    },
    getAllActivity: {
        url: '/get/all/activity',
        params: {
            positionCityId: true,
            selectedCityId: true
        }
    },
    inActivityDuration: {
        url: '/in/activity/duration',
        params: {
            activityId: true
        },
        book: [
            'activityId'
        ]
    },
    redirectFindPage: {
        url: '/redirect/find/page'
    }
};

export default JNetworkActivity;
