// 引入封装好的接口
import { get } from "../util/request";


// 首页中, 心里咨询部分，展示心理咨询师列表接口get接口
export const yishengListAPI = () => get("/Liu/Consultant");

// 咨询的接口封装
export const zixunListAPI = () => get("/Liu/Interlocution");

// 首页的测试
export const ceshiListAPI = () => get("/find");





