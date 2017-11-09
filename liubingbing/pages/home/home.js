// pages/home/home.js
Page({
  data: {
    defaultSize: 'mini',
    flag: false,
    arr1: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    arr2: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  },
  up: function (event) {
    let newArr2 = this.data.arr2;
    let newArr1 = this.data.arr1;
    let c = newArr2.shift();
    newArr1.push(c);
    this.setData({
      arr1: newArr1,
      arr2: newArr2
    });
    //console.log(c)测试得到数是否符合要求
    console.log(this.data.arr1, this.data.arr2)
  },
  down: function (event) {
    let newArr2 = this.data.arr2;
    let newArr1 = this.data.arr1;
    let d = newArr1.pop(); //得到目数据
    newArr2.unshift(d);
    this.setData({
      arr1: newArr1,
      arr2: newArr2
    });
    console.log(this.data.arr1, this.data.arr2)
    //console.log(d)测试得到数是否符合要求
  },
})
