//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
<<<<<<< HEAD
=======
    hiddenmodaInput: true, //添加课堂码 t为隐藏 f为显示
    classCode:"",
>>>>>>> 032c115... 2
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{
      cid: "sadada",
      name: "移动开发",
      banji: "17计科2班",
      teacher: "陈小P",
      startTime: '2020-春-周一/周五',
      status: " "
    }, {
      cid: "sadada",
      name: "Vue开发",
      banji: "自学班",
      teacher: "PPP",
      startTime: '2020-春-周二/周五',
      status: "正在上课"
    }]
  },
  //事件处理函数

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })

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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.isLogin = true
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
<<<<<<< HEAD
  }
=======
  },
  avatarTap: function (e) {
    var that=this
    wx.showActionSheet({
      itemList: ["个人中心", "退出"],
      success (res) {
        if(res.tapIndex==1){
        app.globalData.userInfo = {}
        that.setData({
          userInfo:{},
          hasUserInfo: false,
        })
        wx.showToast({
          title: '退出成功',
          duration: 1000
        })
        }
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
    
  },
  addClass: function () {
    this.setData({
      hiddenmodaInput: false
    })
  },
  updateValue:function(e){
    this.setData({
      classCode:e.detail.value
    })
    console.log(this.data.classCode)
  },
  //取消添加
  cancel:function(){
    this.setData({
      hiddenmodaInput: true
    })
  },
  //人确认添加课堂码
  confirm: function () {
    this.setData({
      hiddenmodaInput: true
    })
  } 
>>>>>>> 032c115... 2
})