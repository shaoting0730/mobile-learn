
const api = {
  // 首页
  weatherUrl:'https://xiaoapi.cn/API/zs_tq.php?type=cytq&msg=杭州9E&num=20&n=1', // 天气接口
  starUrl:'https://xiaoapi.cn/API/xzys.php?msg=%E7%99%BD%E7%BE%8A%E5%BA%A7',  //星座接口  文字版
  historyUrl:'https://xiaoapi.cn/API/lssdjt.php?type=15',   // 历史上的今天 文字版
  movieInfoUrl:'https://xiaoapi.cn/API/zs_dybd.php?type=douban&n=1&num=10',  // 电影信息
  // 新闻
  newsListUrl:'https://v.api.aa1.cn/api/api-tplist/go.php/api/picture/index?page=1',   // 新闻接口
  // 我的
  saohuaUrl:'https://v.api.aa1.cn/api/api-saohua/index.php?type=json',  // 骚话接口
  starImgUrl: 'https://xiaoapi.cn/API/xzys_pic.php?msg=',  // 星座 图片版
}

export default api;
