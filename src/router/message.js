//简易留言板的路由配置
let routers = [
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/message/HomeView.vue'),
  },
  {
    path: '/message/main',
    name: 'messagemain',
    component: () => import('../views/message/MainView.vue'),
  },
  {
    path: '/message/userinfo',
    name: 'messageuserinfo',
    component: () => import('../views/message/UserInfoView.vue'),
  },
  {
    path: '/message/detail/:umid',
    name: 'messageuserinfo',
    component: () => import('../views/message/DeatilView.vue'),
  },
]

export default routers
