Page({
  data: {
    itemArray: [{
        url: "../../asserts/images/about/huge.jpg",
        title: "樱桃小丸子：来自意大利的少年",
        description: "小丸子恋美少年，他竟然不是花轮",
        performers: "矶野鳕子/屋良有作/一龙斋贞友",
        score: "7.8分",
      },
      {
        url: "../../asserts/images/about/sunhonglei.jpg",
        title: "七月与安生",
        description: "娇滴闺蜜似蜜糖，甜到人家心好慌",
        performers: "周冬雨/马思纯/李程彬",
        score: "8.6分",
      },
      {
        url: "../../asserts/images/about/wanqian.jpg",
        title: "从你的全世界路过",
        description: "那曾经打动你的，还会继续温暖你",
        performers: "邓超/白百何/杨洋/张天爱",
        score: "8.0分",
      },
      {
        url: "../../asserts/images/about/wanqian.jpg",
        title: "从你的全世界路过",
        description: "那曾经打动你的，还会继续温暖你",
        performers: "邓超/白百何/杨洋/张天爱",
        score: "8.0分",
      },
      {
        url: "../../asserts/images/about/wanqian.jpg",
        title: "从你的全世界路过",
        description: "那曾经打动你的，还会继续温暖你",
        performers: "邓超/白百何/杨洋/张天爱",
        score: "8.0分",
      },
      {
        url: "../../asserts/images/about/wanqian.jpg",
        title: "从你的全世界路过",
        description: "那曾经打动你的，还会继续温暖你",
        performers: "邓超/白百何/杨洋/张天爱",
        score: "8.0分",
      },
      {
        url: "../../asserts/images/about/wanqian.jpg",
        title: "从你的全世界路过",
        description: "那曾经打动你的，还会继续温暖你",
        performers: "邓超/白百何/杨洋/张天爱",
        score: "8.0分",
      },
      {
        url: "../../asserts/images/about/wanqian.jpg",
        title: "从你的全世界路过",
        description: "那曾经打动你的，还会继续温暖你",
        performers: "邓超/白百何/杨洋/张天爱",
        score: "8.0分",
      }
    ]
  },
  buyTicket: function (options) {
    wx.navigateTo({
      url: '../index/index',
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
  }
})
