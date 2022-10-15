<template>
  <div class="alert">
    <ul class="ulf">
      <router-link class="f" to="/Wz" active-class="active">通知</router-link>
      <router-link class="f" to="/Wt" active-class="active">私聊</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
.f {
  display: flex;
  flex-direction: row;
}
</style>