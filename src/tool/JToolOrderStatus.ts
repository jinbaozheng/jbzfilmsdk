class JToolOrderStatus{
    static statusMessageFromStatus(status: number): string {
        const statusValue = [
            {
                key: '锁座失败',
                code: 100,
                message: '锁座失败',
                description: '锁座失败'
            },
            {
                key: '待支付',
                code: 110,
                message: '待支付',
                description: '锁座成功，等待支付'
            },
            {
                key: '未支付',
                code: 120,
                message: '未支付',
                description: '锁座成功后15分钟之内用户未尝试支付或重复锁座关闭订单'
            },
            {
                key: '未支付_取消订单',
                code: 121,
                message: '未支付_取消订单',
                description: '用户主动取消订单'
            },
            {
                key: '未支付_预支付订单号获取失败',
                code: 125,
                message: '未支付_预支付订单号获取失败',
                description: '获取支付系统的预支付订单号失败'
            },
            {
                key: '支付中',
                code: 130,
                message: '支付中',
                description: '锁座成功后15分钟之内首次尝试支付'
            },
            {
                key: '支付超时',
                code: 135,
                message: '支付超时',
                description: '尝试支付后，实际并没有支付，超过15分钟，订单超时！'
            },
            {
                key: '支付失败_支付超时',
                code: 140,
                message: '支付失败，支付超时',
                description: '15分钟之内有支付，但是银行反馈支付超时'
            },
            {
                key: '支付失败_银行反馈',
                code: 150,
                message: '支付失败，银行反馈',
                description: '15分钟之内有支付，但银行反馈的支付失败'
            },
            {
                key: '支付失败_原因未知',
                code: 160,
                message: '支付失败，原因未知',
                description: '15分钟之内有支付，但支付失败，原因未知'
            },
            {
                key: '支付失败_用券或积分不符合要求',
                code: 170,
                message: '支付失败，用券或积分不符合要求',
                description: '15分钟之内有支付，但支付失败，用券或积分不符合要求'
            },
            {
                key: '已支付',
                code: 300,
                message: '已支付',
                description: '支付成功，等待向票务商发起出票请求'
            },
            {
                key: '出票中',
                code: 320,
                message: '出票中',
                description: '向票务商发起出票请求，出票商返回出票中'
            },
            {
                key: '出票失败',
                code: 330,
                message: '出票失败',
                description: '约定时间内票务商返回出票失败'
            },
            {
                key: '出票异常',
                code: 340,
                message: '出票异常',
                description: '超过约定的时间，票务商未返回明确失败和成功'
            },
            {
                key: '出票失败_退款中',
                code: 350,
                message: '出票失败_退款中',
                description: '出票失败发起退款申请'
            },
            {
                key: '出票异常_退款中',
                code: 352,
                message: '出票异常_退款中',
                description: '出票异常发起退款申请'
            },
            {
                key: '已支付_未通知出票_退款中',
                code: 354,
                message: '已支付_未通知出票_退款中',
                description: '支付成功，单由于订单超时，未通知票务商出票，发起退款申请'
            },
            {
                key: '交易完成_退款中',
                code: 356,
                message: '交易完成_退款中',
                description: '交易完成的订单发起退款'
            },
            {
                key: '出票失败_退款失败',
                code: 400,
                message: '出票失败，退款失败',
                description: '约定时间内票务商返回出票失败，进行退款且退款失败'
            },
            {
                key: '出票异常_退款失败',
                code: 410,
                message: '出票异常，退款失败',
                description: '超过约定的时间，票务商未返回明确失败和成功，进行退款且退款失败'
            },
            {
                key: '交易完成_退款失败',
                code: 420,
                message: '交易完成，退款失败',
                description: '出票成功的订单，由于影院取消场次等原因，进行退款且退款失败'
            },
            {
                key: '已支付_未通知出票_退款失败',
                code: 430,
                message: '已支付_未通知出票_退款失败',
                description: '支付成功，但由于订单超时，未通知票务商出票，进行退款且退款失败'
            },
            {
                key: '出票失败_已退款',
                code: 450,
                message: '出票失败，已退款',
                description: '约定时间内票务商返回出票失败，进行退款且退款成功'
            },
            {
                key: '出票异常_已退款',
                code: 460,
                message: '出票异常，已退款',
                description: '超过约定的时间，票务商未返回明确失败和成功，进行退款且退款成功'
            },
            {
                key: '交易完成_已退款',
                code: 470,
                message: '交易完成，已退款',
                description: '出票成功的订单，由于影院取消场次等原因，进行退款且退款成功'
            },
            {
                key: '已支付_未通知出票_已退款',
                code: 480,
                message: '已支付_未通知出票_已退款',
                description: '支付成功，但由于订单超时，未通知票务商出票，进行退款且退款成功'
            },
            {
                key: '交易完成',
                code: 600,
                message: '交易完成',
                description: '出票成功'
            }
        ].find(({code}) => code === status) || {message: ''};
        return statusValue.message;
    }
}

export default JToolOrderStatus;
