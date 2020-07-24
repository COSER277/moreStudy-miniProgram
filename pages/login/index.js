// pages/Login/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: app.globalData.hasUserInfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option)
    if (!app.globalData.hasUserInfo) {
      //未登录
      this.setData({
        hasUserInfo: app.globalData.hasUserInfo
      })
    }else{
      wx.showToast({
        title: '已登录',
        duration:1000
      })
      wx.navigateBack({
        delta: 1
      })
    }
    const eventChannel = this.getOpenerEventChannel()
    //事件通道
    eventChannel.emit('acceptDataFromOpenedPage', {
      data: 'test'
    });
    eventChannel.emit('someEvent', {
      data: 'test'
    });
    // 监听acceptDataFromOpenerPage事件，
    //获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data)
    })


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
  //授权
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      isLogin: true,
    })
    wx.navigateBack({
      delta: 1
    })
  }
})