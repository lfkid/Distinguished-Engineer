Page({
  data: {
    array1: []
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:3000/movies',
      success: (res) => {
        // console.log(res)
        this.setData({
          array1: res.data
        })
      }
    })
  }
})
