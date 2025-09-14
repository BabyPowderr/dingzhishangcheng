// pages/index/index.js
var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
  data: {
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
    iconArray: [
      { "iconUrl": '../../image/icon-qiandao.png', "iconText": '签到' },
      { "iconUrl": '../../image/icon-fujin.png',   "iconText": '考试宝典' },
      { "iconUrl": '../../image/icon-zhanhui.png', "iconText": '商城' },
      { "iconUrl": '../../image/icon-fuli.png',    "iconText": '福利' },
      { "iconUrl": '../../image/icon-muma.png',    "iconText": '玩乐' },
      { "iconUrl": '../../image/icon-xingxing.png',"iconText": '湾区美食' },
      { "iconUrl": '../../image/icon-tiyu.png',    "iconText": '体育音乐' },
      { "iconUrl": '../../image/icon-qinzi.png',   "iconText": '汽车周边' }
    ],
    itemArray: [
      { "itemUrl": '../../image/huaju.jpeg', "itemText": '11月20日话剧《风声》' },
      { "itemUrl": '../../image/huaju.jpeg', "itemText": '11月20日话剧《原野》' },
      { "itemUrl": '../../image/huaju.jpeg', "itemText": '11月28日“夜店”演唱会' }
    ]
  },

  cusImageLoad: function(e){
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
  }, // ← 注意这个逗号

  // 放在 Page({...}) 里面
  onIconTap(e){
    const text = e.currentTarget.dataset.text
    if (text === '商城') {
      wx.switchTab({ url: '/pages/faxian/faxian' })  // ← 这里
    } else {
      wx.showToast({ icon:'none', title:`${text}（暂未开放）` })
    }
  }
});
