var WxAutoImage = require("../../js/wxAutoImageCal.js");
var app = getApp();


Page({
    data: {

    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
    goDetail(e){
        const id = e.currentTarget.dataset.id
        wx.navigateTo({ url: `/pages/spdetail/spdetail?id=${id}` }) // 详情不是 tabBar → navigateTo
      }
})

