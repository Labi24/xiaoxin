import Vue from "vue";
import VueRouter from "vue-router";

// 引入vant组件
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(VueRouter);

//使用vant组件
Vue.use(Vant);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    // 注册界面
    {
      path: "/zhuce",
      name: "Zhuce",
      component: () => import("../pages/Zhuce"),
      meta: {
        showFooter: false,
      },
    },
    // 登录界面
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login"),
      meta: {
        showFooter: false,
      },
    },
    // 首页界面
    {
      path: "/home",
      name: "Home",
      component: () => import("../pages/Home"),
      meta: {
        showFooter: true,
      },
    },
    //心理测试
    {
      path: "/ceshi",
      name: "Ceshi",
      component: () => import("../pages/Ceshi"),
      meta: {
        showFooter: false,
      },
    },
    // 问答界面
    {
      path: "/answer",
      name: "Answer",
      component: () => import("../pages/Answer"),
      meta: {
        showFooter: true,
      },
      children: [
        {
          path: "/follow",
          name: "Follow",
          component: () => import("../pages/Answer/Follow"),
          meta: {
            showFooter: true,
          },
        },
        {
          path: "/nominate",
          name: "Nominate",
          component: () => import("../pages/Answer/Nominate"),
          meta: {
            showFooter: true,
          },
        },
        {
          path: "/moodyz",
          name: "Moodyz",
          component: () => import("../pages/Answer/Moodyz"),
          meta: {
            showFooter: true,
          },
        },
      ],
    },
    //咨询界面
    {
      path: "/consult",
      name: "Consult",
      component: () => import("../pages/Consult"),
      meta: {
        showFooter: true,
      },
    },
    // 消息界面
    {
      path: "/alert",
      name: "Alert",
      component: () => import("../pages/Alert"),
      meta: {
        showFooter: true,
      },
      children: [
        {
          path: "/wt",
          name: "Wt",
          component: () => import("../pages/Alert/Wt"),
          meta: {
            showFooter: true,
          },
        },
        {
          path: "/wz",
          name: "Wz",
          component: () => import("../pages/Alert/Wz"),
          meta: {
            showFooter: true,
          },
        },
      ],
    },
    // 我的界面
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../pages/Mine"),
      meta: {
        showFooter: true,
      },
    },
    //账号登陆
    {
      path: "/administrator",
      name: "administrator",
      component: () => import("../pages/administrator"),
      meta: {
        showFooter: false,
      },
    },
  ],
});

export default router;
