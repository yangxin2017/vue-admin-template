import request from '@/utils/request'
import Cookies from 'js-cookie'

function initUserToken(){
    let obj = {
        authToken: Cookies.get('token'),
        authUserId: Cookies.get("userid")
    };
    return obj;
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