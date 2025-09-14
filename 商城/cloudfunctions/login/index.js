// cloudfunctions/login/index.js
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event, context) => {
  const { OPENID, APPID, ENV } = cloud.getWXContext()
  // 云端测试调用时 OPENID 为空；小程序端调用时才有值
  return {
    ok: true,
    openid: OPENID || null,
    appid: APPID || null,
    env: ENV || null,
    from: event && event.from ? event.from : 'unknown'
  }
}
