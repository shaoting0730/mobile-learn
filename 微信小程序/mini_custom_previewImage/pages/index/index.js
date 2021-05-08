// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    offsetX: 0,
    offsetY: 0,
    distance: 0,  //两指距离
    current:0,
    zoom: false, //是否缩放状态
    show:false,
    scale: 1,
    imgData: [
      'one.jpeg',
      'two.jpeg',
      'three.jpeg'
    ],
  },
    // 点击图片：出现图片放大
  imgOnlick(e) {
    var current = e.currentTarget.dataset.current;
    this.setData({
      current: current,
      show: true,
    })
  },
})
