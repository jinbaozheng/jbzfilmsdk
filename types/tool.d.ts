/**
 * 异步请求工具类
 */
export declare class JToolAsyncNetwork{
    /**
     * 发送指定请求多次直到收到结果或超过尝试次数
     * @param method 请求方法
     * @param methodArgs 请求方法参数
     * @param tryCount 尝试次数 - 默认10
     * @param interval 尝试时间间隔 - 默认500
     */
    static tryRequest(method: (...methodArgs: any[]) => Promise<any | number>, [...methodArgs]: any[], tryCount?: number, interval?: number);
}

export default JToolAsyncNetwork
