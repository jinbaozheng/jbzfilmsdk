class JToolAsyncNetwork{
  static async tryRequest(method: (...methodArgs: any[]) => Promise<any | number>,
                          [...methodArgs]: any[],
                          tryCount: number = 10,
                          interval: number = 500){
    let data = null, i = 0;
    do {
      data = await method(...methodArgs);
      await new Promise(resolve => {setTimeout(resolve, interval)});
    } while (data === null && ++i < tryCount);
    return data;
  }
}

export default JToolAsyncNetwork;
