import Cookies from 'js-cookie'
import { getJson } from '@/api/cms'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  
  cms: {},

  cms_gw: {}
}

// Cookies.set('token', 'e75700d4-78b1-4612-9310-e711bf468190')
// Cookies.set('userid', 5)

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_JSON: (state, json) => {
    state.cms = json.sy
    state.cms_gw = json.gw
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setCmsJson({ commit }, type) {
    let arr = getJson(type)
    commit('SET_JSON', {sy: arr[0], gw: arr[1]})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
