// pages/component/pz_canvas/pz_canvas.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    radarImg:'',  // canvas之后的背景图片
    widheight:'', // 屏幕高
    widwidth:'',  // 屏幕宽
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getSystemInfo();
      this.initDraw();
    },
    moved: function () { },
    detached: function () { },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initDraw: function () {
      //小程序坑1:  在component中绘制canvas需要传入this
      var my_carvas = wx.createCanvasContext('myCanvas', this) //1.创建carvas实例对象，方便后续使用。
      my_carvas.setFillStyle('#CDCDCD')
      my_carvas.setFontSize(13)

      var myDate = new Date();
      var year=myDate.getFullYear();
      var month=myDate.getMonth()+1;
      var day=myDate.getDate();
      var pz_day = year+"-"+month+"-"+day;

      const {widwidth,widheight} = this.data;
      my_carvas.rotate(-20 * Math.PI / 180) // 倾斜
      my_carvas.translate(-200, 20)

      // 绘制具体内容：手机号 + 当天日期
      for(var i = 0;i <100;i++){
        my_carvas.fillText('15108663578', 10, i*90)
        my_carvas.fillText('15108663578', widwidth/2-50, i*90)
        my_carvas.fillText('15108663578', widwidth-100, i*90)
        my_carvas.fillText('15108663578', widwidth+20, i*90)

        my_carvas.fillText(pz_day,10,i*90 + 30)
        my_carvas.fillText(pz_day,widwidth/2-50,i*90 + 30)
        my_carvas.fillText(pz_day,widwidth-100,i*90 + 30)
        my_carvas.fillText(pz_day,widwidth+20,i*90 + 30)

      }

      // 小程序坑2: 小程序中使用canvas，无法设置其层级，设置z-index无效，只能先通过canvas绘制出来以后再生成img使用·
      // 小程序坑3: 需要在第一步的canvas绘制出来之后再进行canvasToTempFilePath。
      my_carvas.draw(false,()=>{
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: widwidth,
          height: widheight,
          canvasId: 'myCanvas',
          success: (res)=>{
            this.setData({ 
              radarImg: res.tempFilePath
            });
          },
          fail:(e)=>{
            console.log(e);
          }
        },this);
      }); 
    },
    // 得到屏幕宽高
    getSystemInfo: function () {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            widheight: res.screenHeight,
            widwidth: res.screenWidth
          });
        }
      })
    }
  }
})
