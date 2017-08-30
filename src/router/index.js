import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//webpack按需加载组件
//个性推荐
const recommend = r => require.ensure([], () => r(require('../page/recommend/index')), ' recommend')
//歌单详情
const songListDetails = r => require.ensure([], () => r(require('../page/songListDetails/index')), 'songListDetails')
//精品歌单
const songList = r => require.ensure([], () => r(require('../page/songList/index')), 'songList')
//歌曲详情
const songDetails = r => require.ensure([], () => r(require('../page/songDetails/index')), 'songDetails')
//排行榜
const topList = r => require.ensure([], () => r(require('../page/topList/index')), 'topList')

export default new Router({
  routes: [{
        path: '/',
        name: 'index',
        component: recommend
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: recommend
    },
    {
        path: '/songList',
        name: 'songList',
        component: songList
     }, {
       path: '/songListDetails/:id',
       name: 'songListDetails',
       component: songListDetails
    },{
      path: '/songDetails/:id',
      name: 'songDetails',
      component: songDetails
    },{
         path: '/topList',
         name: 'topList',
         component: topList
      }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
