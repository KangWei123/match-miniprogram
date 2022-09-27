// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // 列表数据
    matchList:[
      {
        matchImage: '../../../assets/images/matchList/match_list1.png',
        matchStatus:'进行中',
        matchTitle:'2022年1季度模拟大赛',
        matchTime:'2022.03.20-2022.03.31',
        matchNum:989,
        signUpStatus:'已开始'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list2.png',
        matchStatus:'进行中',
        matchTitle:'A股百万模拟大赛',
        matchTime:'2021.10.05-2021.11.20',
        matchNum:259,
        signUpStatus:'已开始'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list3.png',
        matchStatus:'报名中',
        matchTitle:'思迪金秋10月超级杯大赛',
        matchTime:'2022.03.20-2022.03.31',
        matchNum:989,
        signUpStatus:'已开始'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list4.png',
        matchStatus:'已结束',
        matchTitle:'思迪金秋9月超级杯大赛',
        matchTime:'2021.10.05-2021.11.20',
        matchNum:259,
        signUpStatus:'已结束'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list5.png',
        matchStatus:'报名中',
        matchTitle:'最新活动模拟大赛',
        matchTime:'2022.03.20-2022.03.31',
        matchNum:989,
        signUpStatus:'已结束'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list6.png',
        matchStatus:'预热中',
        matchTitle:'周末特别活动模拟大赛',
        matchTime:'2021.10.05-2021.11.20',
        matchNum:259,
        signUpStatus:'已结束'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list7.png',
        matchStatus:'已结束',
        matchTitle:'中秋活动百万模拟大赛',
        matchTime:'2022.03.20-2022.03.31',
        matchNum:989,
        signUpStatus:'已结束'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list8.png',
        matchStatus:'预热中',
        matchTitle:'金元一月百万模拟大赛',
        matchTime:'2021.10.05-2021.11.20',
        matchNum:259,
        signUpStatus:'已结束'
      },
      {
        matchImage: '../../../assets/images/matchList/match_list9.png',
        matchStatus:'预热中',
        matchTitle:'百万模拟大赛',
        matchTime:'2022.03.20-2022.03.31',
        matchNum:989,
        signUpStatus:'已结束'
      },
    ]
  },
  onLoad() {
  }
})
