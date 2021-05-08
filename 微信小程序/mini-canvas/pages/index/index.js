// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    myData: [
      {
        "id":1,
        "title": "111111",
        "content": "这是内容1"
      },
      {
        "id":2,
        "title": "22222",
        "content": "这是内容2"
      },
      {
        "id":3,
        "title": "3333",
        "content": "这是内容3"
      },
      {
        "id":4,
        "title": "444",
        "content": "这是内容4"
      },
      {
        "id":5,
        "title": "5555",
        "content": "这是内容5"
      },
      {
        "id":6,
        "title": "6666",
        "content": "这是内容6"
      },
      {
        "id":7,
        "title": "777",
        "content": "这是1内容"
      },
      {
        "id":8,
        "title": "888",
        "content": "这是2内容"
      },
      {
        "id":9,
        "title": "999",
        "content": "这是4内容"
      },
      {
        "id":10,
        "title": "10",
        "content": "这是内5容"
      },
      {
        "id":11,
        "title": "3456543456789765",
        "content": "这1是内容"
      },
      {
        "id":12,
        "title": "101010101010101010",
        "content": "这2是内容"
      },
      {
        "id":13,
        "title": "3456543456789765",
        "content": "这3是内容"
      },
      {
        "id":14,
        "title": "101010101010101010",
        "content": "1这是内容"
      },
      {
        "id":15,
        "title": "101010101010101010",
        "content": "2这是内容"
      }
    ]
  },
  itemOnclick(e){
    var id =String(e.currentTarget.dataset.id);
    wx.showToast({
      title: id,
    })
  }
})
