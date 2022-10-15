// 引入封装好的接口
import { get, post } from "../util/request";


// 手机号登陆时获取验证码
export const aliSmsSend = (phone) => get("/Kong/aliSmsSend.do/", { phone });
//手机号和验证码登陆
export const loginByPhoneAndSmsCode = (phone, smsCode) => post("/Kong/loginByPhoneAndSmsCode.do",
    { phone, smsCode })
//账号密码登陆
export const queryUserByLoginActAndPwd = (loginAct, loginPwd) => post("/Kong/queryUserByLoginActAndPwd.do",
    { loginAct, loginPwd })
//获取当前用户粉丝列表
export const queryAllFansById = (id) => get("/Kong/queryAllFansById.do", { id });
//获取动态的数量
export const queryCountOfAllDynamicById = (id) => get("/Kong/queryCountOfAllDynamicById.do", { id });
//获取关注的数量
export const queryCountOfAllUserOfConcernByUid = (id) => get("/Kong/queryCountOfAllUserOfConcernByUid.do", { id });