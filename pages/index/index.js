Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    swiperlist:[
      {index:0, src:"cloud://ycloud-qghvc.7963-ycloud-qghvc-1301606469/swiper/young_c.png"},
      {index:1,src:"cloud://ycloud-qghvc.7963-ycloud-qghvc-1301606469/swiper/young_e.png"}
    ],
    check:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.getUserInfo({
       withCredentials: 'false',
       lang: 'zh_CN',
       timeout:100,
       success: (result) => {
         console.log(result.userInfo);
       },
       fail: () => {
         wx.showModal({
           title: '警告',
           content: '请进行授权',
           showCancel: true,
           cancelText: '取消',
           cancelColor: '#000000',
           confirmText: '确定',
           confirmColor: '#3CC51F',
           success: (result) => {
             if (result.confirm) {
               console.log("用户确认");
               wx.navigateTo({
                 url: '../login/login',
                 success: (result) => {
                   console.log("已跳转")
                 },
                 fail: () => {
                   console.log("未跳转")
                 }  
               });
                 
             }
           },
           fail: () => {},
           complete: () => {}
         });
           
       },
       complete: () => {console.log("compelet")}
     });
       
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
