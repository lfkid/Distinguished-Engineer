Page({

  data: {
    arrayOne: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    arrayTwo: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
      'v', 'w', 'x', 'y', 'z']

  },
  add: function (e) {
    this.data.arrayOne.push('h')
    this.setData({
      arrayOne: this.data.arrayOne
    })
  },

  minus: function (e) {
    this.data.arrayOne.pop('h')
      this.setData({
        arrayOne: this.data.arrayOne
      })
    }
  }
)
