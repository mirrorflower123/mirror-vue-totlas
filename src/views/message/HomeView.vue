<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <span v-if="isLogin"
        >{{ tbUser }}
        <hr />
        {{ tbUserInfo }}
        <hr />
        {{ userOtherInfo }}
        <hr />
        <el-button @click="logout">安全退出</el-button>
      </span>
      <div v-else>需要登陆</div>
    </div>
  </div>
</template>

<script>
import tools from '@/js/tools'
import logger from '@/js/logger'
let app
export default {
  name: 'TextShi',
  data() {
    return {
      title: '简易留言板首页',
      isLogin: false,
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
    }
  },
  computed: {},
  methods: {
    logout() {
      tools.ajax('/user/auth/logout', {}, () => {})
      app.isLogin = false
    },

    getUserInfo() {
      tools.ajax(
        '/user/auth/getUserInfo',
        {},
        (data) => {
          app.isLogin = data.success
          if (data.success) {
            app.tbUser = data.tbUser
            app.tbUserInfo = data.tbUserInfo
            app.userOtherInfo = data.userOtherInfo
          }
        },
        true
      )
    },
  },
  created() {
    app = this
    logger.debug(app.title)
    app.getUserInfo()
  },
}
</script>
