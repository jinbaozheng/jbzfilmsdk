/**
 * Created by cuppi on 2017/7/20.
 */

/**
 * 座位图参数模型
 */
interface SeatParamsModel{
  /**
   * 影院平台
   */
  type: string;
  /**
   * 影院Id wangpiao | spider
   */
  cinemaId: string;

  /**
   * 场次Id wangpiao | spider | maizuo | danche | maoyan | meituan | dazhong | baidu
   */
  showId: string;

  /**
   * 放映厅Id spider
   */
  hallId: string;
}

export default SeatParamsModel;
