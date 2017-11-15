// pages/about/about.js
const app = getApp()

Page({
  data:{
    mvMessage:[]
  },
  onLoad:function(){
    wx.request({
      url:app.globalData.mvUrl,
      header:{
        'Content-Type':'application/json'
      },
      success:res => {
        this.setData({
          mvMessage:res.data
        })
      }
    })
  },
  buyTicket:function(e){
    wx.navigateTo({
      url: '../buyTicket/buyTicket',
    })
  }
})
