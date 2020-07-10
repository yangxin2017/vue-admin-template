import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserIdKey = 'vue_admin_template_userid'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getUserId() {
  return Cookies.get(UserIdKey)
}

export function setUserId(userId) {
  return Cookies.set(UserIdKey, userId)
}

export function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("qbbs");
  return Cookies.remove(TokenKey)
  return Cookies.remove(UserIdKey)
}
