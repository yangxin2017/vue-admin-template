import { login, logout, getInfo } from '@/api/user'
import { getDepts, ssologin } from '@/api/cms'
import { getToken, setToken, removeToken, getUserId, setUserId } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    userId: getUserId(),
    token: getToken(),
    name: '',
    avatar: '',
    usermod: null
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERMOD: (state, usermod) => {
    state.usermod = usermod
  }
}

const actions = {
  ssologin({ commit }, token) {
    return new Promise((resolve, reject) => {
      ssologin({username: "", password: "", token: token}).then((response)=>{
        let data = response
        if(data.success){
          // if(data.url == "admin"){
          //   window.location.href = window.location.origin + "/webadmin/#/content/"
          // }
          if(data.authToken && data.data){
            commit('SET_TOKEN', data.authToken)
            commit('SET_USERID', data.data.id)
            commit('SET_NAME', data.data.nickName)
            setToken(data.authToken)
            setUserId(data.data.id)
          }
          resolve(data)
        }else{
          reject(data)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  },
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        let data = response
        commit('SET_TOKEN', data.authToken)
        commit('SET_USERID', data.data.id)
        commit('SET_NAME', data.data.nickName)
        setToken(data.authToken)
        setUserId(data.data.id)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      let params = {
        authToken: state.token, 
        authUserId: state.userId
      }
      getInfo(params).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_USERMOD', data)
        // commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()

      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

