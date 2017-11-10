Page({
  data: {
    title: "默认文本"
  },
  onLoad: function(options) {
    this.setData({
      title: options.title
    })
  }
})
