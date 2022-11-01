import logger from '@/js/logger'
import tools from '@/js/tools'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//登录用户消息的部分
const LOCAL_USER_KEY = 'vue_total_2003_user'
//保存用户信息到本地储存
function saveUserInfo(user) {
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user))
}

//读取本地储存的用户信息
function loadUserInfo() {
  let user = localStorage.getItem(LOCAL_USER_KEY)
  if (user) {
    return JSON.parse(user)
  }
  return {
    isLogin: false,
    tbUser: {},
    tbUserInfo: {},
    userOtherInfo: {},
  }
}

//清除本地储存的用户信息
function removeUser() {
  localStorage.removeItem(LOCAL_USER_KEY)
}

export default new Vuex.Store({
  state: {
    count: 0,
    //默认用户信息
    loginUser: loadUserInfo(),
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++
    },
    setLoginUser(state, user) {
      //保存到本地
      saveUserInfo(user)
      //更新vuex
      state.loginUser = JSON.parse(JSON.stringify(user))
    },
    //清除登录用户信息
    removeLoginUser(state) {
      removeUser()
      state.loginUser = loadUserInfo()
    },
  },
  actions: {
    updataUser({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          tools.ajax(
            '/user/auth/getUserInfo',
            {},
            (data) => {
              let user = { isLogin: data.success }
              if (data.success) {
                user.tbUser = data.tbUser
                user.tbUserInfo = data.tbUserInfo
                user.userOtherInfo = data.userOtherInfo
                commit('setLoginUser', user)
              } else {
                commit('removeLoginUser')
              }
              resolve()
            },
            true
          )
        } catch (ex) {
          reject(ex)
        }
      })
    },
    changeCount({ commit }) {
      let promise = new Promise((resolve, reject) => {
        logger.debug(resolve, reject)
        //模拟演示操作
        setTimeout(() => {
          commit('addCount')
          resolve()
        }, 2000)
      })
      return promise
    },
  },
  modules: {},
})
