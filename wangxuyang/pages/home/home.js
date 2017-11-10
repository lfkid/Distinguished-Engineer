Page({

  data: {
    arrayOne: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    arrayTwo: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
      'v', 'w', 'x', 'y', 'z']

  },
  add: function (e) {
    let a = this.data.arrayTwo.shift()
    this.data.arrayOne.push(a)
    this.setData({
      arrayOne: this.data.arrayOne
    })
  },

  minus: function (e) {
    let b = this.data.arrayOne.pop()
    this.data.arrayTwo.unshift(b)
      this.setData({
        arrayOne: this.data.arrayOne
      })
    }
  }
)
