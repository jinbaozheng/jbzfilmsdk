# jbzfilmsdk changelog

## 1.0.4
  * 增加revealNetwork方法并暴露config配置参数

## 1.0.1
  * 删除 JNetworkTrade.tradeApplyOrder  方法
  * 删除 JNetworkTrade.tradePrePayOrder 方法
  
## 1.1.1
  * 配合服务器更新接口
  * 重构实现
  
## 1.1.1-beta0 ~ 1.1.2-beta2
  * 优化代码
  
## 1.1.2-beta3
  * 更新 hotFilmsByPage 及 waitFilmsByPage 参数形式
  

## 1.1.3-beta0
  * 更新接口名  realTimeSeatsInfo => cinemaSmartSeatsByRequestId
  * 更新接口名  lockStatus => lockStatusByRequestId
  * 更新 orderList 参数形式
  * 更新 collectedCinemaList 参数形式
  * 增加 cook 回调参数 args
  * 增加 JToolAsyncNetwork 工具类
  * 增加热搜关键词 searchHotKey 服务器接口
  * 增加个人看过影片 lookedFilms 服务器接口
  * 增加预支付 prepay 服务器接口
  * 增加 JToolOrderStatus 工具类
  
## 1.1.3-beta1
  * 更新 cityById 接口数据返回结构
  * 增加 workerDelegate 代理配置项
  * 更新 cityByCoordinate 参数形式
  * 更新接口名 locationCityInfo => cityByCoordinateAndRequestId
  
## 1.1.3-beta2
  * cinemaSmartSeats 修改数据返回结构 - 当为异步请求时 返回 {requestId} 而非 requestId
  * 修复方法 JToolAsyncNetwork.tryRequest 请求数据校验问题
  
## 1.1.3-beta4
  * 配合icemilk增加JNetworkWorkerGroup的parent使用
  
### 目前仍然存在的问题
  * 当使用接口的配置项userParams时，无法将其写入加密后的字段中，只能通过userParams进行注入。