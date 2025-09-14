// miniprogram/app.js
App({
  onLaunch() {
    wx.cloud.init({ env: 'cloudfunctions-4gkitlt438482f91', traceUser: true })
  }
})
