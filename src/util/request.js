import axios from "axios";
import { Toast } from "vant";
import qs from "qs";
import { getToken } from "./auth";

// 封装Axios基础配置
const instance = axios.create({
  // 设置基础的url配置项，这样接口处的url前面就不用写
  //url: 'http://127.0.0.1:8000/api/home'，
  //直接写成 url: '/api/home', 就可以了
  baseURL: "http://101.201.104.39:8080", // 接口域名前缀
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },

  //设置请求超时时间
  timeout: 5000,
});

// axios的拦截器
// 下方的的全局请求拦截和全局响应拦截可以使用箭头函数或者是普通的函数头可以

// 方法一
// // 全局请求拦截 可以拦截到请求的信息,我们可以在这里面对请求头处理
instance.interceptors.request.use(
  (config) => {
    config.data = qs.stringify(config.data);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 全局响应拦截  统一处理响应信息
// 响应拦截
// 全局的响应拦截  可以统一处理响应信息
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 这里是请求的封装

/* 
解释

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
*/
// 封装的get的请求
export const get = (url, params) => instance.get(url, { params });
//封装post的请求
export const post = (url, data) => {
  console.log(data);
  return instance.post(url, data);
};
