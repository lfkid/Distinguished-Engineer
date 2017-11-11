// pages/about/about.js樱桃小丸子: 来自意大利的少年
Page({
  data: {
    buyticketContent:'购票',
    item1: [
      "../../asserts/images/home/cat.jpg",
      "樱桃小丸子:来自意大利的少年",
      "小丸子恋美少年，他竟然不是花轮",
      "矶野鳕子/屋良有作/一龙斋贞友",
      "7.8分",
    ]
  },
  buyTicket: function (event) {
    wx.navigateTo({
      url: '../welToBuy/welToBuy',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
