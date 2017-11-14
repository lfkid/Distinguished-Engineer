Page({
  data: {
    movie: [],
    cart: '购物车',
    balance:'结算'
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://localhost:3000/posts',
      success: (res) => {
        // console.log(res.data)
        that.setData({
          movie: res.data
        })
      }
    })
  }
})
