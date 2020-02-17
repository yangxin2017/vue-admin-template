import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',

  cms2: {
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
      height: 300,
      children: {
          'm_141': { type: 'text', count: 6 },
          'm_142': { type: 'text', count: 6 },
          'm_143': { type: 'text', count: 6 },
          'm_144': { type: 'text', count: 6 },
          'm_145': { type: 'text', count: 6 }
      }
    },
    l3: {
      id: 121,
      height: 300,
      dir: 'left',
      children: {
          'm_123': { type: 'text', count: 6 },
          'm_154': { type: 'text', count: 6 },
          'm_155': { type: 'text', count: 6 },
          'm_156': { type: 'text', count: 6 },
          'm_162': { type: 'text', count: 6 }
      }
    },
    l4: {
      id: 178,
      height: 300,
      dir: 'left',
      children: {
          'm_179': { type: 'detail', count: 1 },
          'm_180': { type: 'text', count: 6 }
      }
    },
    b1: {
      id: 158,
      dir: 'left',
      height: 300,
      children: {
        'm_159': { type: 'text2', count: 4 },
        'm_160': { type: 'text2', count: 4 },
        'm_161': { type: 'text2', count: 4 }
      }
    },
    b2: {
      id: 163,
      height: 300,
      dir: 'left',
      children: {
        'm_167': { type: 'text2', count: 4 }
      }
    },
    r1: {
      id: 126,
      dir: 'right',
      height: 300,
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
      height: 390,
      children: {
        'm_149': { type: 'text', count: 8 },
        'm_150': { type: 'text', count: 8 },
        'm_151': { type: 'text', count: 8 }
      }
    },
    r3: {
      id: 164,
      dir: 'right',
      height: 185,
      percount: 5,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    other: {
      lbt: { id: 175, height: 330 },
      zqb: { id: 177 },
      ranks: { count: 2 },
      contact: { count: 4 },
      zydx: {
        id: 120,
        height: 460,
        children: {
          'm_122': { type: 'guo', count: 4 },
          'm_130': { type: 'hai', count: 4 },
          'm_131': { type: 'guo', count: 4 },
          'm_165': { type: 'hai', count: 4 },
          'm_166': { type: 'guo', count: 4 }
        }
      },
      meta: {
        width: 2560,
        height: 1440,
        midwidth: 1120,
        count: {
          searchleft: 15,
          searchbottom: 48,
          detailleft: 14
        }
      }
    }
  },
  cms3: {
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
      height: 165,
      percount: 5,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    other: {
      lbt: { id: 175, height: 220 },
      zqb: { id: 177 },
      ranks: { count: 2 },
      contact: { count: 4 },
      zydx: {
        id: 120,
        height: 330,
        children: {
          'm_122': { type: 'guo', count: 4 },
          'm_130': { type: 'hai', count: 4 },
          'm_131': { type: 'guo', count: 4 },
          'm_165': { type: 'hai', count: 4 },
          'm_166': { type: 'guo', count: 4 }
        }
      },
      meta: {
        width: 2560,
        height: 1080,
        midwidth: 1120,
        count: {
          searchleft: 10,
          searchbottom: 32,
          detailleft: 10
        }
      }
    }
  },
  cms: {
    l1: {
      id: 128,
      dir: 'left',
      children: {
          'm_146': { type: 'text2', count: 3 },
          'm_147': { type: 'pic', count: 3 }
      }
    },
    l2: {
      id: 127,
      dir: 'left',
      children: {
          'm_141': { type: 'text2', count: 3 },
          'm_142': { type: 'text2', count: 3 },
          'm_143': { type: 'text2', count: 3 },
          'm_144': { type: 'text2', count: 3 },
          'm_145': { type: 'text2', count: 3 }
      }
    },
    l3: {
      id: 121,
      dir: 'left',
      children: {
          'm_123': { type: 'text2', count: 3 },
          'm_154': { type: 'text2', count: 3 },
          'm_155': { type: 'text2', count: 3 },
          'm_156': { type: 'text2', count: 3 },
          'm_162': { type: 'text2', count: 3 }
      }
    },
    l4: {
      id: 178,
      dir: 'left',
      children: {
          'm_179': { type: 'detail', count: 1 },
          'm_180': { type: 'text2', count: 3 }
      }
    },
    b1: {
      id: 158,
      dir: 'left',
      children: {
        'm_159': { type: 'text2', count: 3 },
        'm_160': { type: 'text2', count: 3 },
        'm_161': { type: 'text2', count: 3 }
      }
    },
    b2: {
      id: 163,
      dir: 'left',
      children: {
        'm_167': { type: 'text2', count: 3 }
      }
    },
    r1: {
      id: 126,
      dir: 'right',
      children: {
        'm_132': { type: 'video', count: 1 },
        'm_133': { type: 'text2', count: 3 },
        'm_134': { type: 'text2', count: 3 },
        'm_139': { type: 'text2', count: 3 },
        'm_140': { type: 'text2', count: 3 }
      }
    },
    r2: {
      id: 129,
      dir: 'right',
      children: {
        'm_149': { type: 'text2', count: 3 },
        'm_150': { type: 'text2', count: 3 },
        'm_151': { type: 'text2', count: 3 }
      }
    },
    r3: {
      id: 164,
      dir: 'right',
      height: 165,
      percount: 3,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    other: {
      lbt: { id: 175, height: 220 },
      zqb: { id: 177 },
      ranks: { count: 2 },
      contact: { count: 3 },
      zydx: {
        id: 120,
        height: 330,
        children: {
          'm_122': { type: 'guo', count: 4 },
          'm_130': { type: 'hai', count: 4 },
          'm_131': { type: 'guo', count: 4 },
          'm_165': { type: 'hai', count: 4 },
          'm_166': { type: 'guo', count: 4 }
        }
      },
      meta: {
        width: 1920,
        height: 1080,
        midwidth: 960,
        count: {
          searchleft: 10,
          searchbottom: 32,
          detailleft: 10
        }
      }
    }
  },

  cms_gw2: {
    l1: {
      id: 128,
      dir: 'left',
      height: 550,
      children: {
          'm_146': { type: 'text', count: 12 },
          'm_147': { type: 'pic', count: 12 }
      }
    },
    l2: {
      id: 127,
      dir: 'left',
      height: 400,
      children: {
          'm_141': { type: 'text', count: 8 },
          'm_142': { type: 'text', count: 8 },
          'm_143': { type: 'text', count: 8 },
          'm_144': { type: 'text', count: 8 },
          'm_145': { type: 'text', count: 8 }
      }
    },
    r2: {
      id: 129,
      dir: 'right',
      height: 750,
      children: {
        'm_149': { type: 'text', count: 16 },
        'm_150': { type: 'text', count: 12 },
        'm_151': { type: 'text', count: 12 }
      }
    },
    r3: {
      id: 164,
      dir: 'right',
      height: 185,
      percount: 5,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    b1: {
      id: 158,
      dir: 'left',
      height: 250,
      children: {
        'm_159': { type: 'text', count: 4 },
        'm_160': { type: 'text', count: 4 },
        'm_161': { type: 'text', count: 4 }
      }
    },
    other: {
      timeline: {
        id: 121,
        height: 390,
        children: {
            'm_123': { type: 'text', count: 6 },
            'm_154': { type: 'text', count: 6 },
            'm_155': { type: 'text', count: 6 },
            'm_156': { type: 'text', count: 6 },
            'm_162': { type: 'text', count: 6 }
        }
      },
      zqb: {
        id: 177,
        height: 300
      },
      meta: {
        width: 2560,
        height: 1440,
        midwidth: 990,
        count: {
          searchleft: 15,
          searchbottom: 48,
          detailleft: 14
        }
      }
    }
  },

  cms_gw3: {
    l1: {
      id: 128,
      dir: 'left',
      height: 730,
      children: {
          'm_146': { type: 'text', count: 16 },
          'm_147': { type: 'pic', count: 20 }
      }
    },
    l2: {
      id: 127,
      dir: 'left',
      height: 580,
      children: {
          'm_141': { type: 'text', count: 12 },
          'm_142': { type: 'text', count: 12 },
          'm_143': { type: 'text', count: 12 },
          'm_144': { type: 'text', count: 12 },
          'm_145': { type: 'text', count: 12 }
      }
    },
    r2: {
      id: 129,
      dir: 'right',
      height: 1120,
      children: {
        'm_149': { type: 'text', count: 26 },
        'm_150': { type: 'text', count: 26 },
        'm_151': { type: 'text', count: 26 }
      }
    },
    r3: {
      id: 164,
      dir: 'right',
      height: 185,
      percount: 5,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    b1: {
      id: 158,
      dir: 'left',
      height: 630,
      children: {
        'm_159': { type: 'text', count: 14 },
        'm_160': { type: 'text', count: 4 },
        'm_161': { type: 'text', count: 4 }
      }
    },
    other: {
      timeline: {
        id: 121,
        height: 390,
        children: {
            'm_123': { type: 'text', count: 6 },
            'm_154': { type: 'text', count: 6 },
            'm_155': { type: 'text', count: 6 },
            'm_156': { type: 'text', count: 6 },
            'm_162': { type: 'text', count: 6 }
        }
      },
      zqb: {
        id: 177,
        height: 300
      },
      meta: {
        width: 2560,
        height: 1080,
        midwidth: 990,
        count: {
          searchleft: 15,
          searchbottom: 48,
          detailleft: 14
        }
      }
    }
  },

  cms_gw: {
    l1: {
      id: 128,
      dir: 'left',
      height: 570,
      children: {
          'm_146': { type: 'text2', count: 10 },
          'm_147': { type: 'pic', count: 9 }
      }
    },
    l2: {
      id: 127,
      dir: 'left',
      height: 420,
      children: {
          'm_141': { type: 'text2', count: 7 },
          'm_142': { type: 'text2', count: 7 },
          'm_143': { type: 'text2', count: 7 },
          'm_144': { type: 'text2', count: 7 },
          'm_145': { type: 'text2', count: 7 }
      }
    },
    r2: {
      id: 129,
      dir: 'right',
      height: 770,
      children: {
        'm_149': { type: 'text2', count: 14 },
        'm_150': { type: 'text2', count: 14 },
        'm_151': { type: 'text2', count: 14 }
      }
    },
    r3: {
      id: 164,
      dir: 'right',
      height: 185,
      percount: 5,
      children: {
        'm_168': { type: 'sys', count: 30 }
      }
    },
    b1: {
      id: 158,
      dir: 'left',
      height: 260,
      children: {
        'm_159': { type: 'text2', count: 4 },
        'm_160': { type: 'text2', count: 4 },
        'm_161': { type: 'text2', count: 4 }
      }
    },
    other: {
      timeline: {
        id: 121,
        height: 390,
        children: {
            'm_123': { type: 'text2', count: 6 },
            'm_154': { type: 'text2', count: 6 },
            'm_155': { type: 'text2', count: 6 },
            'm_156': { type: 'text2', count: 6 },
            'm_162': { type: 'text2', count: 6 }
        }
      },
      zqb: {
        id: 177,
        height: 300
      },
      meta: {
        width: 2560,
        height: 1440,
        midwidth: 990,
        count: {
          searchleft: 15,
          searchbottom: 48,
          detailleft: 14
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
