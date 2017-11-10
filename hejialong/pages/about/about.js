Page({
  data: {
    movie: [
      {
        imgPath: "../../asserts/images/东方快车谋杀案.png",
        title: '东方快车谋杀案',
        subTitle: 'Murder on the Orient Express',
        actor: '韩庚 / 唐嫣 / 莫文蔚 / 钟欣潼',
        score: '8.3分',
        action: '购票'
      },
      {
        imgPath: "../../asserts/images/雷神3：诸神黄昏.png",
        title: '雷神3：诸神黄昏',
        subTitle: 'Thor: Ragnarök',
        actor: '韩庚 / 唐嫣 / 莫文蔚 / 钟欣潼',
        score: '8.9分',
        action: '购票'
      },
      {
        imgPath: "../../asserts/images/狂兽.png",
        title: '狂兽',
        subTitle: 'The Brink',
        actor: '韩庚 / 唐嫣 / 莫文蔚 / 钟欣潼',
        score: '7.6分',
        action: '购票'
      }
    ],
  },

  buy: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '../../pages/index/index',
      success: function (res) {}
    })
  }
})
