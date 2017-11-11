// pages/about/about.js
Page({
  data: {
    buyticketTitle: "购票",

    //将每电影的信息存放在一个数组中，然只需要遍历这个数组就可以得所有的信息，然放相应位置
    itemArr: [{
        url: "../../asserts/images/home/cat.jpg",
        title: "樱桃小丸子:来自意大利的少年",
        content: "小丸子恋美少年，他竟然不是花轮",
        autor: "矶野鳕子/屋良有作/一龙斋贞友",
        score: "7.8分"
      }]
  },

  //路由点按钮得到一事件，然跳转到其他的pag页中
  buyTicket: function (event) {
    wx.navigateTo({
      url: '../welToBuy/welToBuy'
    })
  }
})
