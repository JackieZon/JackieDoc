//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    logo: '../../icon/img/subei-icon.png',
    productIcon: ['../../icon/img/backstage.png', '../../icon/img/app.png', '../../icon/img/wechat.png', '../../icon/img/applets.png']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '18088882832' //仅为示例，并非真实的电话号码
    })
  }
})
