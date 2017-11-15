Page({
  data: {
    movie: [],
    cart: '购物车',
    balance: '结算',
    message: '1'
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
  }
})
