// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.overShare()
  },
  globalData: {
    userInfo: null
  },
  // 全局分享
  overShare () {
    wx.onAppRoute(res=>{ 
       let pages = getCurrentPages(),
       view = pages[pages.length - 1]
       if (view) { 
            wx.showShareMenu({ withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline'] 
            })
       } 
   }) 
},

})
