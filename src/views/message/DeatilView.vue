<template>
  <div
    >{{ title }}-{{ queryInfo }}
    <hr />
    <div v-html="info.info"></div>
    <!-- {{ info }} -->
    <hr />
    <div v-for="d in list" :key="d.umid">{{ d }}</div>
  </div>
</template>

<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
let app
export default {
  name: 'DetailView',
  data() {
    return {
      title: '帖子详情',
      queryInfo: {
        orderBy: '1',
        umid: -1,
      },
      page: { pageSize: 10 },
      info: {},
      list: [],
    }
  },
  computed: {},
  methods: {
    query() {
      tools.ajax('/message/queryDetail', tools.concatJson(app.queryInfo, app.page), (data) => {
        app.list = data.list
        app.info = data.info
        app.page = data.page
      })
    },
  },
  created() {
    app = this
    console.log(app.title)
    logger.debug(app.title)
    app.queryInfo.umid = this.$route.params.umid
    app.query()
  },
}
</script>
