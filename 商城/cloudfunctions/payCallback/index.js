const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  // 这里根据你支付平台的回调内容，解析出对应的 orderId
  // 假设收到 { orderId: 'xxx' }，就把状态改成 paid
  const { orderId } = event || {}
  if (!orderId) return { ok: false, msg: 'no orderId' }

  await db.collection('orders').doc(orderId).update({
    data: { status: 'paid', paidAt: new Date() }
  })
  return { ok: true }
}
