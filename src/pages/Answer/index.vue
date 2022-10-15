<template>
  <div class="alert">
    <ul class="ulf">
      <router-link class="f" to="/Follow" active-class="active">关注</router-link>
      <router-link class="f" to="/Nominate" active-class="active">推荐</router-link>
      <router-link class="f" to="/Moodyz" active-class="active">最新</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  components: {},
};
</script>
<style src="./common.css" />
<style lang="less" src="./index.less" />
</style>