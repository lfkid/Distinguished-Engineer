// pages/home/home.js
Page({

  data: {
    arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    strs: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    canAdd: true,
    canRemove: false
  },
  add: function (e) {
    const len = this.data.arr.length
    let newArr = this.data.arr
    newArr.push(this.data.strs[len - 7])
    // console.log("newArr: " + this.data.newArr)
    // console.log("arr: " + this.data.arr)
    this.setData({
      arr: newArr,
      canAdd: this.data.arr.length < 26,
      canRemove: this.data.arr.length > 7
    })
  },
  delete: function (e) {
    if (this.data.arr.length > 6) {
      let newArr = this.data.arr
      newArr.pop()
      this.setData({
        arr: newArr,
        canAdd: this.data.arr.length < 26,
        canRemove: this.data.arr.length > 7
      })
    }
  }
})
