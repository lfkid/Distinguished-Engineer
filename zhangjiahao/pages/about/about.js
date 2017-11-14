// pages/about/about.js
var that;
Page({
  data: {

    movie: []

  },
  onLoad: function () {
    that = this;
    wx.request({
      url: 'http://localhost:3000/customers',
      success: function (res) {
        console.log(res.data);
        that.setData({
          movie: res.data,
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})
