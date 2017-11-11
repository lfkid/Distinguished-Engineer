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
    },
    {
      url: "../../asserts/images/home/cat.jpg",
      title: "追凶者也",
      content: "一桩山村凶杀案，三个蠢萌逃亡汉",
      autor: "刘烨/张泽/段播文/王子文",
      score: "7.8分"
    },
    {
      url: "../../asserts/images/home/cat.jpg",
      title: "七月与安生",
      content: "娇滴闺蜜似蜜糖，甜到人家心好慌",
      autor: "周冬雨/马思纯/李程彬",
      score: "8.6分",
    },
    {
      url: "../../asserts/images/home/cat.jpg",
      title: "从你的全世界路过",
      content: "那曾经打动你的，爱你岂止一万年",
      autor: "邓超/白百何/杨洋/张天爱/岳云鹏",
      score: "8.0分",
    },
    {
      url: "../../asserts/images/home/cat.jpg",
      title: "大话西游3",
      content: "月光宝盒重开启，爱你岂止一万年",
      autor: "韩庚/唐嫣/莫文蔚/钟欣潼/吴京",
      score: "7.6分",
    }]
  },

  //路由点按钮得到一事件，然跳转到其他的pag页中
  buyTicket: function (event) {
    wx.navigateTo({
      url: '../welToBuy/welToBuy'
    })
  }
})
