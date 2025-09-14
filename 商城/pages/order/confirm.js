Page({
  data:{ items:[], amount:0, remark:'', address:'' },

  onLoad(options){
    // 如果你 xiaoxi 页把勾选/数据存到 Storage，也可以从 Storage 取
    // 先用假数据演示：从上一页拿不到时，你可以手工取/或直接重新算
  },

  onShow(){
    // 这里简化：直接从本地模拟的数据算（将来换成云端 carts 集合）
    const pages = getCurrentPages()
    const prev = pages[pages.length - 2]
    const items = (prev && prev.data && prev.data.carArray) ? prev.data.carArray.filter(i=>i.carShow) : []
    const toNumber = s => Number(String(s).replace(/[^\d.]/g,'') || 0)
    const amount = items.reduce((s,i)=> s + toNumber(i.carPrice) * i.carNum, 0)

    this.setData({ items, amount: Number(amount.toFixed(2)) })
  },

  onRemark(e){ this.setData({ remark: e.detail.value }) },

  pay(){
    // 现在先模拟“付款成功”
    wx.showToast({ title:'下单成功' })
    wx.switchTab({ url:'/pages/wode/wode' })
  }
})
