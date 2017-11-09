// pages/home/home.js

Page({
  data: {
    array:['a','b','c','d','e','f','g'],
    arrayTemp:['a','b','c','d','e','f','g'],
    arrayMax:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    num:7
   }
   ,
   

  addArray:function(e){
    this.data.arrayTemp.push(this.data.arrayMax[this.data.arrayTemp.length])
    this.setData({
    array:this.data.arrayTemp,
    num:this.data.arrayTemp.length
   })
  },
  subArray:function(e){
    this.data.arrayTemp.pop()
    this.setData({
    array:this.data.arrayTemp,
    num:this.data.arrayTemp.length
  })
}
})


