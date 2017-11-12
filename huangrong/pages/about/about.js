Page({
  data:{
    itemArr:[{
      url: "../../asserts/images/zxzy.jpg",
      title: "追凶者也",
      introduction: "一桩山村凶杀案，三个蠢萌逃亡汉",
      performer: "刘烨/张泽/段播文/王子文",
      score: "7.8"
    },
    {
      url: "../../asserts/images/qyyas.jpg",
      title: "七月与安生",
      introduction: "娇滴闺蜜似蜜糖，甜到人家心好慌",
      performer: "周冬雨/马思纯/李程彬",
      score: "8.6",
    },
    {
      url: "../../asserts/images/ytxwz.jpg",
      title: "樱桃小丸子:来自意大利的少年",
      introduction: "小丸子恋美少年，他竟然不是花轮",
      performer: "矶野鳕子/屋良有作/一龙斋贞友",
      score: "7.8",
    },
    {
      url: "../../asserts/images/cndqsjlg.jpg",
      title: "从你的全世界路过",
      introduction: "那曾经打动你的，爱你岂止一万年",
      performer: "邓超/白百何/杨洋/张天爱/岳云鹏",
      score: "8.0",
    },
    {
      url: "../../asserts/images/dhxy3.jpg",
      title: "大话西游3",
      introduction: "月光宝盒重开启，爱你岂止一万年",
      performer: "韩庚/唐嫣/莫文蔚/钟欣潼/吴京",
      score: "7.6",
    }]
  },
  buy:function(e)
  {
    wx.navigateTo({
      url: '../buy/buy',
      success: function(res){
        // success
      }
    })
  }
})
