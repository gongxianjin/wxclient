//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "361784007622"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goToTalkPage: function (param) {
    wx.redirectTo({
      url: '../join/join',
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://120.77.245.43:8084/customer/index/channelList',
      data: {
        id: "361784007622"
      },
      header: {
        "Content-Type": "application/json"  //post
      },
      complete: function (res) {
        that.setData({
          oneyuandata: res.data.data
        });
        if (res == null || res.data == null) {
          reject(new Error('网络请求失败'))
        }
      },
      success: function (res) {
        console.log(res);
        that.setData({
         ras:res.data
        })
        }
    })
  }
})