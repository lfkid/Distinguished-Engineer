// pages/about/about.js
Page({
  data: {
    buyticketTitle: "购票",
    //将每电影的信息存放在一个数组中，然只需要遍历这个数组就可以得所有的信息，然放相应位置
    itemArr: []
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:3000/movies',
      headers: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        //将获取到的json数据，存在名字叫itemArr的这个数组中
        let temp = res.data;
        this.setData({
          itemArr: temp,
        });
        console.log(res)
      },
      fail: (res) => {
        console.log('error')
      }
    })
  },

  //路由点按钮得到一事件，然跳转到其他的pag页中
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
