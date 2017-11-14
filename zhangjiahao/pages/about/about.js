// pages/about/about.js
var that;
Page({
  data: {
    movie: [],
    movie1: [{
        "id": 1,
        "imgPath": "/asserts/images/movie/world.jfif",
        "name": "从你的全世界路过",
        "introduce": "那曾打动你的，还会继续温暖你",
        "actor": "邓超/白百合/杨洋/张天爱/云岳鹏",
        "score": "8.3分"
      },
      {
        "id": 1,
        "imgPath": "/asserts/images/movie/world.jfif",
        "name": "从你的全世界路过",
        "introduce": "那曾打动你的，还会继续温暖你",
        "actor": "邓超/白百合/杨洋/张天爱/云岳鹏",
        "score": "8.3分"
      },
      {
        "id": 1,
        "imgPath": "/asserts/images/movie/world.jfif",
        "name": "从你的全世界路过",
        "introduce": "那曾打动你的，还会继续温暖你",
        "actor": "邓超/白百合/杨洋/张天爱/云岳鹏",
        "score": "8.3分"
      },
      {
        "id": 1,
        "imgPath": "/asserts/images/movie/world.jfif",
        "name": "从你的全世界路过",
        "introduce": "那曾打动你的，还会继续温暖你",
        "actor": "邓超/白百合/杨洋/张天爱/云岳鹏",
        "score": "8.3分"
      },
    ],
    movieKindFlag: 1,
    isloaded:0,
  },
  onLoad: function () {
    that = this;
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
      url: 'http://localhost:3000/customers',
      success: function (res) {
        // console.log(res.data);
        that.setData({
          movie: res.data,
          isloaded:1,
        })
        wx.hideToast();

      },
      fail: function () {
        that.setData({
          isloaded:2,
        })
        wx.hideToast();
      },
      complete: function () {
        // complete
      }
    })

  },
  movieKindTap: function (e) {
    //console.log(e.target.id);
    if (e.target.id == "hoting") {
      this.setData({
        movieKindFlag: 1
      });
    } else if (e.target.id == "waiting") {
      this.setData({
        movieKindFlag: 2
      });
    }

  }
})
