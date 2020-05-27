import request from '@/utils/request'
import Cookies from 'js-cookie'
import { getToken, getUserId } from '@/utils/auth' // get token from cookie

function initUserToken(){
    let obj = {
        authToken: getToken(), //Cookies.get('token'),
        authUserId: getUserId(), //Cookies.get("userid")
    };
    return obj;
}

export function ssologin(params){
  return request({
    url: '/cms/ssologin',
    method: 'get',
    params
  })
}

export function login(params){
  return request({
    url: '/cms/api/login',
    method: 'get',
    params
  })
}

export async function getContents(params){
  let obj = initUserToken();
  params = Object.assign(obj, params);

  return request({
    url: '/cms/api/contents',
    method: 'get',
    params
  })
}

export function getCategorys(params) {
    let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/categorys',
      method: 'get',
      params
    })
}

export function getAllCategorys(params) {
    let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/allcategorys',
      method: 'get',
      params
    })
}

export function getSearchs(params) {
    let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/searchcons',
      method: 'get',
      params
    })
}

export function getRanks(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/ranks',
      method: 'get',
      params
  })
}

export function getWords(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/words',
      method: 'get',
      params
  })
}

export function getDepts(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/depts',
      method: 'get',
      params
  })
}

export function getGuoHais(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/guohais',
      method: 'get',
      params
  })
}

export function getCateStatics(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/deptstatics',
      method: 'get',
      params
  })
}

export function getCountStatics(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/statics',
      method: 'get',
      params
  })
}

export function getContent(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/content',
      method: 'get',
      params
  })
}

export function getTags(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/tags',
      method: 'get',
      params
  })
}

export function getContributes(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/contributes',
      method: 'get',
      params
  })
}

export function getDeptCount(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/deptcount',
      method: 'get',
      params
  })
}

export function getDeptById(params){
  let obj = initUserToken();
    params = Object.assign(obj, params);
    
    return request({
      url: '/cms/api/sigdept',
      method: 'get',
      params
  })
}

export function getJson(type){
  let f1 = {}, f2 = {}
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  if(type == 'f1'){
    f1 = {
      l1: {
        code: 'MBQB',
        dir: 'left',
        children: {
            'm_MBQBYJ': { type: 'text2', count: 3 },
            'm_YTGL': { type: 'pic', count: 3 },
            'm_SWMX': { type: 'text2', count: 3 }
        }
      },
      l2: {
        code: 'ZHYJ',
        dir: 'left',
        children: {
            'm_ZLXS': { type: 'text2', count: 3 },
            'm_ZCYJ': { type: 'text2', count: 3 },
            'm_WJJS': { type: 'text2', count: 3 },
            'm_KJZB': { type: 'text2', count: 3 },
            'm_XXLY': { type: 'text2', count: 3 }
        }
      },
      l3: {
        code: 'KYQB',
        dir: 'left',
        children: {
            'm_JQYC': { type: 'text2', count: 3 },
            'm_SXZTP': { type: 'text2', count: 3 },
            'm_ZKBB': { type: 'text2', count: 3 },
            'm_KYTS': { type: 'text2', count: 3 },
            'm_TSZL': { type: 'text2', count: 3 }
        }
      },
      l4: {
        code: 'ZLXHQKFY',
        dir: 'left',
        children: {
            'm_ZLXH': { type: 'detail', count: 1 },
            'm_ZLXHHH': { type: 'text2', count: 3 },
            'm_ZLYJ': { type: 'text', count: 3 },
            'm_WFJWJG': { type: 'text', count: 3 }
        }
      },
      b1: {
        code: 'QBWH',
        dir: 'left',
        children: {
          'm_XBYL': { type: 'text2', count: 3 },
          'm_LSYG': { type: 'text2', count: 3 },
          'm_DDFC': { type: 'text2', count: 3 }
        }
      },
      b2: {
        code: 'ZCFG',
        dir: 'left',
        children: {
          'm_NZCFG': { type: 'text2', count: 3 }
        }
      },
      r1: {
        code: 'ZCTS',
        dir: 'right',
        children: {
          'm_ZCZTP': { type: 'video', count: 1 },
          'm_ZCYQTS': { type: 'text2', count: 3 },
          'm_QKBG': { type: 'text2', count: 3 },
          'm_TSYT': { type: 'text2', count: 3 },
          'm_TSPG': { type: 'text2', count: 3 }
        }
      },
      r2: {
        code: 'JCDQ',
        dir: 'right',
        children: {
          'm_WTJQ': { type: 'text2', count: 2 },
          'm_WTJZF': { type: 'text2', count: 2 },
          'm_ZZTL': { type: 'text2', count: 2 }
        },
        height: 154
      },
      r3: {
        code: 'QBXT',
        dir: 'right',
        height: 165,
        percount: 3,
        children: {
          'm_QJLHZZZCTSXT': { type: 'sys', count: 30 }
        }
      },
      other: {
        // lbt: { id: 175, height: 220 },TODO
        ncpd: { height: 220, count: 5, code: 'LBTUI', pcode: 'LBTU' },
        zqb: { 
          code: 'ZQB',
          pcode: 'ZQBP',
          height: 136,
          count:2
        },
        ranks: { count: 2 },
        contact: { count: 3 },
        zydx: {
          code: 'ZYDX',
          height: 330,
          children: {
            'm_ZLDX': { type: 'guo', count: 4 },
            'm_THJS': { type: 'hai', count: 4 },
            'm_ZCDX': { type: 'hai', count: 4 },
            'm_FKWW': { type: 'guo', count: 4 },
            'm_ZBWT': { type: 'hai', count: 4 },
            'm_RDWT': { type: 'guo', count: 4 }
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
    }
    f2 = {
      l1: {
        code: 'MBQB',
        dir: 'left',
        height: 570,
        children: {
            'm_MBQBYJ': { type: 'text2', count: 10 },
            'm_YTGL': { type: 'pic', count: 9 },
            'm_SWMX': { type: 'text2', count: 10 }
        }
      },
      l2: {
        code: 'ZHYJ',
        dir: 'left',
        height: 420,
        children: {
            'm_ZLXS': { type: 'text2', count: 7 },
            'm_ZCYJ': { type: 'text2', count: 7 },
            'm_WJJS': { type: 'text2', count: 7 },
            'm_KJZB': { type: 'text2', count: 7 },
            'm_XXLY': { type: 'text2', count: 7 }
        }
      },
      r2: {
        code: 'JCDQ',
        dir: 'right',
        height: 770,
        children: {
          'm_WTJQ': { type: 'text2', count: 14 },
          'm_WTJZF': { type: 'text2', count: 14 },
          'm_ZZTL': { type: 'text2', count: 14 }
        }
      },
      r3: {
        code: 'QBXT',
        dir: 'right',
        height: 185,
        percount: 5,
        children: {
          'm_QJLHZZZCTSXT': { type: 'sys', count: 30 }
        }
      },
      b1: {
        code: 'QBWH',
        dir: 'left',
        height: 260,
        children: {
          'm_XBYL': { type: 'text2', count: 4 },
          'm_LSYG': { type: 'text2', count: 4 },
          'm_DDFC': { type: 'text2', count: 4 }
        }
      },
      other: {
        timeline: {
          code: 'KYQB',
          height: 390,
          children: {
              'm_JQYC': { type: 'text2', count: 6 },
              'm_SXZTP': { type: 'text2', count: 6 },
              'm_ZKBB': { type: 'text2', count: 6 },
              'm_KYTS': { type: 'text2', count: 6 },
              'm_TSZL': { type: 'text2', count: 6 }
          }
        },
        zqb: {
          code: 'ZQB',
          pcode: 'ZQBP',
          height: 286,
          count:2
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
  }else if(type == 'f2'){
    f1 = {
      l1: {
        code: 'MBQB',
        dir: 'left',
        children: {
            'm_MBQBYJ': { type: 'text', count: 4 },
            'm_YTGL': { type: 'pic', count: 4 },
            'm_SWMX': { type: 'text', count: 4 }
        }
      },
      l2: {
        code: 'ZHYJ',
        dir: 'left',
        children: {
            'm_ZLXS': { type: 'text', count: 4 },
            'm_ZCYJ': { type: 'text', count: 4 },
            'm_WJJS': { type: 'text', count: 4 },
            'm_KJZB': { type: 'text', count: 4 },
            'm_XXLY': { type: 'text', count: 4 }
        }
      },
      l3: {
        code: 'KYQB',
        dir: 'left',
        children: {
            'm_JQYC': { type: 'text', count: 4 },
            'm_SXZTP': { type: 'text', count: 4 },
            'm_ZKBB': { type: 'text', count: 4 },
            'm_KYTS': { type: 'text', count: 4 },
            'm_TSZL': { type: 'text', count: 4 }
        }
      },
      l4: {
        code: 'ZLXHQKFY',
        dir: 'left',
        children: {
            'm_ZLXH': { type: 'detail', count: 1 },
            'm_ZLXHHH': { type: 'text', count: 4 },
            'm_ZLYJ': { type: 'text', count: 4 },
            'm_WFJWJG': { type: 'text', count: 4 }
        }
      },
      b1: {
        code: 'QBWH',
        dir: 'left',
        children: {
          'm_XBYL': { type: 'text2', count: 4 },
          'm_LSYG': { type: 'text2', count: 4 },
          'm_DDFC': { type: 'text2', count: 4 }
        }
      },
      b2: {
        code: 'ZCFG',
        dir: 'left',
        children: {
          'm_NZCFG': { type: 'text2', count: 4 }
        }
      },
      r1: {
        code: 'ZCTS',
        dir: 'right',
        height: 230,
        children: {
          'm_ZCZTP': { type: 'video', count: 2 },
          'm_ZCYQTS': { type: 'text', count: 4 },
          'm_QKBG': { type: 'text', count: 4 },
          'm_TSYT': { type: 'text', count: 4 },
          'm_TSPG': { type: 'text', count: 4 }
        }
      },
      r2: {
        code: 'JCDQ',
        dir: 'right',
        height: 130,
        children: {
          'm_WTJQ': { type: 'text', count: 2 },
          'm_WTJZF': { type: 'text', count: 2 },
          'm_ZZTL': { type: 'text', count: 2 }
        }
      },
      r3: {
        code: 'QBXT',
        dir: 'right',
        height: 155,
        percount: 5,
        children: {
          'm_QJLHZZZCTSXT': { type: 'sys', count: 30 }
        }
      },
      other: {
        // lbt: { id: 175, height: 220 },
        ncpd: { height: 220, count: 5, code: 'LBTUI', pcode: 'LBTU' },
        zqb: { 
          code: 'ZQB',
          pcode: 'ZQBP',
          height: 136,
          count:2
        },
        ranks: { count: 3 },
        contact: { count: 4 },
        zydx: {
          code: 'ZYDX',
          height: 330,
          children: {
            'm_ZLDX': { type: 'guo', count: 4 },
            'm_THJS': { type: 'hai', count: 4 },
            'm_ZCDX': { type: 'hai', count: 4 },
            'm_FKWW': { type: 'guo', count: 4 },
            'm_ZBWT': { type: 'hai', count: 4 },
            'm_RDWT': { type: 'guo', count: 4 }
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
    }
    f2 = {
      l1: {
        code: 'MBQB',
        dir: 'left',
        height: 550,
        children: {
            'm_MBQBYJ': { type: 'text', count: 12 },
            'm_YTGL': { type: 'pic', count: 12 },
            'm_SWMX': { type: 'text', count: 12 }
        }
      },
      l2: {
        code: 'ZHYJ',
        dir: 'left',
        height: 400,
        children: {
            'm_ZLXS': { type: 'text', count: 8 },
            'm_ZCYJ': { type: 'text', count: 8 },
            'm_WJJS': { type: 'text', count: 8 },
            'm_KJZB': { type: 'text', count: 8 },
            'm_XXLY': { type: 'text', count: 8 }
        }
      },
      r2: {
        code: 'JCDQ',
        dir: 'right',
        height: 750,
        children: {
          'm_WTJQ': { type: 'text', count: 16 },
          'm_WTJZF': { type: 'text', count: 12 },
          'm_ZZTL': { type: 'text', count: 12 }
        }
      },
      r3: {
        code: 'QBXT',
        dir: 'right',
        height: 185,
        percount: 5,
        children: {
          'm_QJLHZZZCTSXT': { type: 'sys', count: 30 }
        }
      },
      b1: {
        code: 'QBWH',
        dir: 'left',
        height: 250,
        children: {
          'm_XBYL': { type: 'text', count: 4 },
          'm_LSYG': { type: 'text', count: 4 },
          'm_DDFC': { type: 'text', count: 4 }
        }
      },
      other: {
        timeline: {
          code: 'KYQB',
          height: 390,
          children: {
              'm_JQYC': { type: 'text', count: 6 },
              'm_SXZTP': { type: 'text', count: 6 },
              'm_ZKBB': { type: 'text', count: 6 },
              'm_KYTS': { type: 'text', count: 6 },
              'm_TSZL': { type: 'text', count: 6 }
          }
        },
        zqb: {
          code: 'ZQB',
          pcode: 'ZQBP',
          height: 300,
          count:2
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
  }else if(type == 'f3'){
    f1 = {
      l1: {
        code: 'MBQB',
        dir: 'left',
        children: {
            'm_MBQBYJ': { type: 'text', count: 4 },
            'm_YTGL': { type: 'pic', count: 4 },
            'm_SWMX': { type: 'text', count: 4 }
        }
      },
      l2: {
        code: 'ZHYJ',
        dir: 'left',
        height: 300,
        children: {
            'm_ZLXS': { type: 'text', count: 6 },
            'm_ZCYJ': { type: 'text', count: 6 },
            'm_WJJS': { type: 'text', count: 6 },
            'm_KJZB': { type: 'text', count: 6 },
            'm_XXLY': { type: 'text', count: 6 }
        }
      },
      l3: {
        code: 'KYQB',
        height: 300,
        dir: 'left',
        children: {
            'm_JQYC': { type: 'text', count: 6 },
            'm_SXZTP': { type: 'text', count: 6 },
            'm_ZKBB': { type: 'text', count: 6 },
            'm_KYTS': { type: 'text', count: 6 },
            'm_TSZL': { type: 'text', count: 6 }
        }
      },
      l4: {
        code: 'ZLXHQKFY',
        height: 300,
        dir: 'left',
        children: {
            'm_ZLXH': { type: 'detail', count: 1 },
            'm_ZLXHHH': { type: 'text', count: 6 },
            'm_ZLYJ': { type: 'text', count: 6 },
            'm_WFJWJG': { type: 'text', count: 6 }
        }
      },
      b1: {
        code: 'QBWH',
        dir: 'left',
        height: 300,
        children: {
          'm_XBYL': { type: 'text2', count: 4 },
          'm_LSYG': { type: 'text2', count: 4 },
          'm_DDFC': { type: 'text2', count: 4 }
        }
      },
      b2: {
        code: 'ZCFG',
        height: 300,
        dir: 'left',
        children: {
          'm_NZCFG': { type: 'text2', count: 4 }
        }
      },
      r1: {
        code: 'ZCTS',
        dir: 'right',
        height: 300,
        children: {
          'm_ZCZTP': { type: 'video', count: 2 },
          'm_ZCYQTS': { type: 'text', count: 4 },
          'm_QKBG': { type: 'text', count: 4 },
          'm_TSYT': { type: 'text', count: 4 },
          'm_TSPG': { type: 'text', count: 4 }
        }
      },
      r2: {
        code: 'JCDQ',
        dir: 'right',
        height: 390,
        children: {
          'm_WTJQ': { type: 'text', count: 8 },
          'm_WTJZF': { type: 'text', count: 8 },
          'm_ZZTL': { type: 'text', count: 8 }
        }
      },
      r3: {
        code: 'QBXT',
        dir: 'right',
        height: 185,
        percount: 5,
        children: {
          'm_QJLHZZZCTSXT': { type: 'sys', count: 30 }
        }
      },
      other: {
        // lbt: { id: 175, height: 330 },
        ncpd: { height: 300, count: 5, code: 'LBTUI', pcode: 'LBTU' },
        zqb: { 
          code: 'ZQB',
          pcode: 'ZQBP',
          height: 136,
          count:2
        },
        ranks: { count: 3 },
        contact: { count: 4 },
        zydx: {
          code: 'ZYDX',
          height: 460,
          children: {
            'm_ZLDX': { type: 'guo', count: 4 },
            'm_THJS': { type: 'hai', count: 4 },
            'm_ZCDX': { type: 'hai', count: 4 },
            'm_FKWW': { type: 'guo', count: 4 },
            'm_ZBWT': { type: 'hai', count: 4 },
            'm_RDWT': { type: 'guo', count: 4 }
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
    }
    f2 = {
      l1: {
        code: 'MBQB',
        dir: 'left',
        height: 730,
        children: {
            'm_MBQBYJ': { type: 'text', count: 16 },
            'm_YTGL': { type: 'pic', count: 20 },
            'm_SWMX': { type: 'text', count: 16 }
        }
      },
      l2: {
        code: 'ZHYJ',
        dir: 'left',
        height: 580,
        children: {
            'm_ZLXS': { type: 'text', count: 12 },
            'm_ZCYJ': { type: 'text', count: 12 },
            'm_WJJS': { type: 'text', count: 12 },
            'm_KJZB': { type: 'text', count: 12 },
            'm_XXLY': { type: 'text', count: 12 }
        }
      },
      r2: {
        code: 'JCDQ',
        dir: 'right',
        height: 1120,
        children: {
          'm_WTJQ': { type: 'text', count: 26 },
          'm_WTJZF': { type: 'text', count: 26 },
          'm_ZZTL': { type: 'text', count: 26 }
        }
      },
      r3: {
        code: 'QBXT',
        dir: 'right',
        height: 185,
        percount: 5,
        children: {
          'm_QJLHZZZCTSXT': { type: 'sys', count: 30 }
        }
      },
      b1: {
        code: 'QBWH',
        dir: 'left',
        height: 630,
        children: {
          'm_XBYL': { type: 'text', count: 14 },
          'm_LSYG': { type: 'text', count: 4 },
          'm_DDFC': { type: 'text', count: 4 }
        }
      },
      other: {
        timeline: {
          code: 'KYQB',
          height: 390,
          children: {
              'm_JQYC': { type: 'text', count: 6 },
              'm_SXZTP': { type: 'text', count: 6 },
              'm_ZKBB': { type: 'text', count: 6 },
              'm_KYTS': { type: 'text', count: 6 },
              'm_TSZL': { type: 'text', count: 6 }
          }
        },
        zqb: {
          code: 'ZQB',
          pcode: 'ZQBP',
          height: 300,
          count:2
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
    }
  }
  // f1.other.meta.width = width;
  // f1.other.meta.height = height;
  return [f1, f2]
}