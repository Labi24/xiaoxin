// 首先引入cookie
import Cookies from 'js-cookie'

const Token = "token"

// 设置token(token一般设置在cookie里面)
export function setToken(token) {
  Cookies.set(Token, token);
}

//获取cookie 
export function getToken(token) {
  return Cookies.get(Token, token);
}

// 移除cookie
export function removeToken() {
  Cookies.remove(Token);
}
