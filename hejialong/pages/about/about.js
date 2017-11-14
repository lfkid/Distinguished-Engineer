const app = getApp();
const movieApi = app.globalData.url;

Page({
  data: {
    shopingCart: '购物车',
    settle: '结算',
    buyTicket: '购票',
    bubbleCount: 1,
    movie: [],
  },

  onLoad: function () {
    wx.request({
      url: movieApi,
      success: (res) => {
        let list = res.data;
        if (Array.isArray(list) && list.length > 0) {
          this.setData({
            movie: list
          });
        }
      },
      fail: (res) => {
        // console.log(res);
        wx.showToast({
          title: '网络异常',
          duration: 5000,
        })
      }
    })
  }
})
