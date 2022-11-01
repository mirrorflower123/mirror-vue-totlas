//简易登录的路由配置
let routers = [
  {
    path: '/user/login',
    name: 'user',
    component: () => import('../views/user/LoginView.vue'),
  },
]

export default routers
