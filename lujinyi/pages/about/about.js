// pages/about/about.js
Page({
  data:{
    mvMessage:[]
  },
  onLoad:function(){
    wx.request({
      url:'http://localhost:3000/mvMessage',
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
