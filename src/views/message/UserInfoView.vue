<template>
  <div>{{ title }}</div>
</template>

<script>
let app
export default {
  name: 'UserInfoView',
  data() {
    return {
      title: '留言板用户信息',
    }
  },
  computed: {},
  methods: {},
  created() {
    app = this
    console.log(app.title)
  },
}
</script>
