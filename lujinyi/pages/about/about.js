// pages/about/about.js
Page({
  data:{
    mvMessage:[
      {
        id:1,
        src:"../../res/images/nanaqi.jpg",
        text1:"来自深渊：娜娜奇篇",
        text2:"深渊前进路上的日常",
        text3:"娜娜奇/黎明卿",
        score:8.7
      },
      {
        id:2,
        src:"../../res/images/magic.jpg",
        text1:"魔法游行",
        text2:"小魔女学院前传",
        text3:"亚可/戴安娜",
        score:8.9
      }
    ]
  },
  buyTicket:function(e){
    wx.navigateTo({
      url: '../buyTicket/buyTicket',
    })
  }
})
