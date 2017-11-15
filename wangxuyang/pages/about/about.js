Page({
  data: {
    movie: [],
    movie1: [],
    cart: '购物车',
    balance: '结算',
    message: '1',
    hoting: '热映',
    waitting: '待映',
    tap: true
  },
  tapLeft: function(res) {
    this.setData({
      tap: true,
    })
  },
  tapRight: function(res) {
    this.setData({
      tap: false,
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://localhost:3000/movie',
      success: (res) => {
        // console.log(res.data)
        that.setData({
          movie: res.data
        })
      }
    })
    wx.request({
      url: 'http://localhost:3000/movie1',
      success: (res) => {
        that.setData({
          movie1: res.data
        })
      }
    })
  }
})
