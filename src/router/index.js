import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import InLogin from '@/components/indexPage/Login'
import InBannerDetail from '@/components/indexPage/BannerDetail'
import ModelView from '@/components/indexPage/ModelView'
import NewsView from '@/components/indexPage/NewsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'login',
          component: InLogin
        },
        {
          path: 'InBannerDetail/:id',
          component: InBannerDetail
        },
        {
          path: 'modelList',
          component: ModelView
        },
        {
          path: 'newsList',
          component: NewsView
        }
      ]
    },
    {
      alias: '/',
      path: '/login1',
      name: 'Login',
      component: Login
    }
  ]
})
