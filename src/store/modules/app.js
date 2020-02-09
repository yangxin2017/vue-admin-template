import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  cms: {
    l1: {
      id: 128,
      dir: 'left',
      children: {
          'm_146': { type: 'text', count: 4 },
          'm_147': { type: 'pic', count: 4 }
      }
    },
    l2: {
      id: 127,
      dir: 'left',
      children: {
          'm_141': { type: 'text', count: 4 },
          'm_142': { type: 'text', count: 4 },
          'm_143': { type: 'text', count: 4 },
          'm_144': { type: 'text', count: 4 },
          'm_145': { type: 'text', count: 4 }
      }
    },
    l3: {
      id: 121,
      dir: 'left',
      children: {
          'm_123': { type: 'text', count: 4 },
          'm_154': { type: 'text', count: 4 },
          'm_155': { type: 'text', count: 4 },
          'm_156': { type: 'text', count: 4 },
          'm_162': { type: 'text', count: 4 }
      }
    },
    l4: {
      id: 178,
      dir: 'left',
      children: {
          'm_179': { type: 'detail', count: 1 },
          'm_180': { type: 'text', count: 4 }
      }
    },
    b1: {
      id: 158,
      dir: 'left',
      children: {
        'm_159': { type: 'text2', count: 4 },
        'm_160': { type: 'text2', count: 4 },
        'm_161': { type: 'text2', count: 4 }
      }
    },
    b2: {
      id: 163,
      dir: 'left',
      children: {
        'm_167': { type: 'text2', count: 4 }
      }
    },
    r1: {
      id: 126,
      dir: 'right',
      children: {
        'm_132': { type: 'video', count: 2 },
        'm_133': { type: 'text', count: 4 },
        'm_134': { type: 'text', count: 4 },
        'm_139': { type: 'text', count: 4 },
        'm_140': { type: 'text', count: 4 }
      }
    },
    r2: {
      id: 129,
      dir: 'right',
      children: {
        'm_149': { type: 'text', count: 4 },
        'm_150': { type: 'text', count: 4 },
        'm_151': { type: 'text', count: 4 }
      }
    },
    r3: {
      id: 164,
      dir: 'right',
      height: 120,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    other: {
      lbt: { id: 175 },
      zqb: { id: 177 },
      zydx: {
        id: 120,
        children: {
          'm_122': { type: 'guo', count: 4 },
          'm_130': { type: 'hai', count: 4 },
          'm_131': { type: 'guo', count: 4 },
          'm_165': { type: 'hai', count: 4 },
          'm_166': { type: 'guo', count: 4 }
        }
      }
    }
  }
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
