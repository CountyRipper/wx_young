// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindGetUserInfo: function(e){
    var that = this;
    console.log(e.detail);
    // 业务代码，获取用户信息，全局数据

    wx.navigateBack({
      delta: 1
    });
      
  }
})