export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/home/index',
    'pages/news/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
    pullRefresh: true,
    allowsBounceVertical: "YES",
    onReachBottomDistance: 50,
  },
  tabBar: {
    "list":[
      {
        "pagePath": "pages/home/index",
        "text": "首页",
        "iconPath": "/assets/home.png",
        "selectedIconPath": "/assets/home_select.png"
      },
      {
        "pagePath": "pages/news/index",
        "text": "新闻",
        "iconPath": "/assets/news.png",
        "selectedIconPath": "/assets/news_select.png"
      },
      {
        "pagePath": "pages/mine/index",
        "text": "我的",
        "iconPath": "/assets/mine.png",
        "selectedIconPath": "/assets/mine_select.png"
      },
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  }
})
