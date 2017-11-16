// pages/about/about.js
const app =getApp()
Page({
  data: {
    buyticketTitle: "购票",
    onSaleTicket: "预售",
    itemArr: [],
    waitItemArr: [],
    flag: false,
    tbflag: true,
    loadflag:false
  },
  onReady: function () {
    //初始提框
    // wx.showLoading({
    //   title: '加载中',
    // })
    wx.request({
        url: app.globalData.movieDataUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        success: (res) => {
          this.setData({
            itemArr: res.data,
          });
          // wx.showLoading({
          //   title: '成功',
          // });
          // setTimeout(function () {
          //   wx.hideLoading()
          // }, 500);
          console.log(res)
        },
        fail: (res) => {
          console.log('error');
          this.setData({
            loadflag: true,
          });
          // wx.showLoading({
          //   title: '失败',
          // })
          // setTimeout(function () {
          //   wx.hideLoading()
          // }, 1000);
        }
      }),
      wx.request({
        url:app.globalData.waitMovieDataUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        success: (res) => {
          this.setData({
            waitItemArr: res.data,
          });
          // wx.showLoading({
          //   title: '成功',
          // });
          // setTimeout(function () {
          //   wx.hideLoading()
          // }, 500);
          console.log(res)
        },
        fail: (res) => {
          console.log('error');
          this.setData({
            loadflag: true,
          });
          // wx.showLoading({
          //   title: '失败',
          // })
          // setTimeout(function () {
          //   wx.hideLoading()
          // }, 1000);
        }
      })
  },

  //路由点按钮得到一事件，然跳转到其他的pag页中
  buyTicket: function (event) {
    wx.navigateTo({
      url: '../welToBuy/welToBuy',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  hotText: function (e) {
    this.setData({
      tbflag: false
    })
  },
  waitText: function (e) {
    this.setData({
      tbflag: true
    })
  }
})
