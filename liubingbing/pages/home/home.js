// pages/home/home.js
Page({
  data: {
    defaultSize: 'mini',
    originArr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    stackArr: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  },
  up: function (event) {
    let staArrCopy = this.data.stackArr;
    let oriArrCopy = this.data.originArr;
    let c = staArrCopy.shift();
    oriArrCopy.push(c);
    this.setData({
      originArr: oriArrCopy,
      stackArr: staArrCopy
    });
    console.log(this.data.originArr, this.data.stackArr)
  },
  down: function (event) {
    let staArrCopy = this.data.stackArr;
    let oriArrCopy = this.data.originArr;
    let d = oriArrCopy.pop(); //得到目数据
    staArrCopy.unshift(d);
    this.setData({
      originArr: oriArrCopy,
      stackArr: staArrCopy
    });
    console.log(this.data.originArr, this.data.stackArr)
  },
})
