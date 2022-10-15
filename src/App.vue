<template>
  <div id="app">
    <router-view />
    <van-tabbar route v-if="$route.meta.showFooter">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="more-o" :to="{ name: 'Answer' }"
        >问答</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Consult' }"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Alert' }"
        >消息</van-tabbar-item
      >
      <van-tabbar-item icon="contact" :to="{ name: 'Mine' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
    };
  },
  components: {},
};
</script>

<style>
</style>
