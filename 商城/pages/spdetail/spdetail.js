// pages/spdetail/spdetail.js
var WxAutoImage = require('../../js/detailImage.js');
const db = wx.cloud.database()

Page({
  data: {
    id: '',
    imgUrls: [
      '../../image/swiper1.jpg',
      '../../image/swiper1.jpg',
      '../../image/swiper1.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iscollect: true,
    qty: 1,
    prod: {} // 以后接数据库用
  },

  async onLoad(options){
    this.setData({ id: options.id || '' })
    // 如果后面接数据库：
    // if (options.id) {
    //   const { data } = await db.collection('products').doc(options.id).get()
    //   this.setData({ prod: data, imgUrls: data.images || this.data.imgUrls })
    // }
  },

  collect(){
    this.setData({ iscollect: !this.data.iscollect })
  },

  cusImageLoad(e){
    this.setData(WxAutoImage.wxAutoImageCal(e));
  },

  chgQty(e){
    const d = Number(e.currentTarget.dataset.d || 1)
    this.setData({ qty: Math.max(1, this.data.qty + d) })
  },

  // ★ 加入购物车（先用本地写法；接数据库时再切换到云端 carts 集合）
  addCart(){
    // 这里先用一个 Toast 表示成功（如果你已经接了 carts 集合，我可以给你云端版本）
    wx.showToast({ title:'已加入购物车' })
  },

  // ★ 立即购买 → 跳“购物车 tabBar 页”（就是 xiaoxi）
  buyNow(){
    // 如果需要：先 addCart 再跳
    // this.addCart()
    wx.switchTab({ url: '/pages/xiaoxi/xiaoxi' })
  }
})
