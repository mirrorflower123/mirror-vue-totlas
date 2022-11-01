//知识点学习的路由配置
let routers = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/HomeView.vue'),
  },
  {
    path: '/study/page',
    name: 'page',
    component: () => import('../views/study/PageView.vue'),
  },
  {
    path: '/study/vuex',
    name: 'vuex',
    component: () => import('../views/study/VuexView.vue'),
  },
  {
    path: '/study/vuexother',
    name: 'vuexother',
    component: () => import('../views/study/VuexOtherView.vue'),
  },
]

export default routers
