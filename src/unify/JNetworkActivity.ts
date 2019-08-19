const JNetworkActivity = {
    getActivityQuota: {
        url: '/get/activity/quota',
        params: {
            openId: true,
            activityId: true,
            positionCityId: true,
            selectedCityId: true
        },
        book:[
            'activityId',
            'positionCityId',
            'selectedCityId'
        ]
    },
    getAllActivity: {
        url: '/get/all/activity'
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
