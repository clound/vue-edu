import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const constantRouterMap = [
  {
    path: '/',
    redirect: '/found'
  },
  {
    path: '/found',
    component: () => import('@/components/found')
  },
  { // 答题
    path: '/exam',
    name: 'Exam',
    component: () => import('@/components/exam')
  }
  // { // 首页
  //   path: '/',
  //   component: () => import('@/components/Layout'),
  //   redirect: '/home',
  //   name: 'Home',
  //   hidden: true,
  //   children: [{
  //     path: 'home',
  //     component: () => import('@/components/home/index')
  //   }]
  // },
  // { // 域名备案系统
  //   path: '/domain',
  //   component: () => import('@/components/Layout'),
  //   redirect: '/domain/globalPolicy',
  //   name: 'Domian',
  //   meta: { title: 'domainRegistration', icon: 'domain' },
  //   children: [
  //     {
  //       path: 'globalpolicy',
  //       name: 'Globalpolicy',
  //       component: () => import('@/components/domainregistration/globalpolicy'),
  //       meta: { title: 'globalPolicy', icon: 'globalpolicy' }
  //     },
  //     {
  //       path: 'whitelist',
  //       name: 'Domainwhlist',
  //       component: () => import('@/components/domainregistration/whitelist'),
  //       meta: { title: 'whiteList', icon: 'whitelist' }
  //     },
  //     {
  //       path: 'blacklist',
  //       name: 'Blacklist',
  //       component: () => import('@/components/domainregistration/blacklist'),
  //       meta: { title: 'blackList', icon: 'blacklist' }
  //     },
  //     {
  //       path: 'ipstrategy',
  //       name: 'Ipstrategy',
  //       component: () => import('@/components/domainregistration/ipstrategy'),
  //       meta: { title: 'ipStrategy', icon: 'ipgroup' }
  //     }
  //   ]
  // },
  // { path: '/404', component: () => import('@/components/404'), hidden: true },
]
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
