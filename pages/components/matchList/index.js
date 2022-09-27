Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    item: {
      type: Object,
      value: {
        // link: '/pages/ranking/index',
        matchImage: '../../../assets/images/matchList/match_list1.png',
        matchStatus:'预热中',
        matchTitle:'A股百万模拟大赛',
        matchTime:'2022.03.20-2022.03.31',
        matchNum:989,
        signUpStatus:'已经报名'
      }
    }
  },
  data: {
  }
})