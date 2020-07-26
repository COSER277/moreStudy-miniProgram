// pages/mine/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
<<<<<<< HEAD
    userInfo: {}
=======
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
>>>>>>> 032c115... 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
<<<<<<< HEAD

=======
>>>>>>> 032c115... 2
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
<<<<<<< HEAD

=======
>>>>>>> 032c115... 2
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })

        }
      })
    }
  },
<<<<<<< HEAD

=======
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.isLogin = true
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
>>>>>>> 032c115... 2
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },



  /**
   * 去登陆
   * 
   */
  go: function () {
    wx.navigateTo({
      url: '/pages/login/index?option=0'
    })
  }
})