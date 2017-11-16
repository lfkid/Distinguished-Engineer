Page({

  data: {
    arrayOne: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    arrayTwo: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
      'v', 'w', 'x', 'y', 'z'
    ]

  },
  add: function (e) {
    let one = this.data.arrayOne
    let two = this.data.arrayTwo
    let a = two.shift()
    one.push(a)
    this.setData({
      arrayOne: one
    })
  },

  minus: function (e) {
    let one = this.data.arrayOne
    let two = this.data.arrayTwo
    let b = one.pop()
    two.unshift(b)
    this.setData({
      arrayOne: one
    })
  }
})
