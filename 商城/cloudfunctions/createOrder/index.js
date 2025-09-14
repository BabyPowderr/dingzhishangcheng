const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  const { items = [], amount = 0, remark = '', address = '' } = event || {}

  if (!items.length) return { ok: false, msg: '空订单' }

  // 写订单（pending）
  const addRes = await db.collection('orders').add({
    data: {
      _openid: OPENID,
      items, amount,
      remark, address,
      status: 'pending',
      createdAt: new Date()
    }
  })
  const orderId = addRes._id

  // 先走“未开通支付”的分支，直接认为支付成功，便于你把流程跑通
  const ENABLE_PAY = false
  if (!ENABLE_PAY) {
    await db.collection('orders').doc(orderId).update({
      data: { status: 'paid', paidAt: new Date() }
    })
    return { ok: true, needPay: false, orderId }
  }

  // ==== 将来开通真支付后，放开下面这段 ====
  // const res = await cloud.cloudPay.unifiedOrder({
  //   functionName: 'payCallback',
  //   body: '婴幼儿商品订单',
  //   outTradeNo: orderId,                  // 用订单号
  //   totalFee: Math.round(amount * 100),   // 分
  //   envId: cloud.DYNAMIC_CURRENT_ENV,
  //   tradeType: 'JSAPI',
  //   openid: OPENID
  // })
  // return { ok: true, needPay: true, payment: res.payment, orderId }
}
