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
    url: 'cms/api/contents',
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