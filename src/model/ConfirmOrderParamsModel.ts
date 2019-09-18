/**
 * Created by cuppi on 2017/7/20.
 */

/**
 * 确认订单参数模型
 */
interface ConfirmOrderParamsModel{
  /**
   * 用户Id
   */
  openId: string;
  /**
   * 订单Id
   */
  orderId: string;
  /**
   * 定位城市Id
   */
  positionCityId?: string;
  /**
   * 选择城市Id
   */
  selectedCityId?: string;
  /**
   * 活动Id
   */
  activityId?: string;
}

export default ConfirmOrderParamsModel;
