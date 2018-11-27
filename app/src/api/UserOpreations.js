import api from '../api';

export async function validateUserAPI (params) {
    const response = await api.request({
      method: 'post',
      baseURL: api.baseURL,
      url: '/api/user/validate/',
      data: params,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }

  export async function signupAPI (params) {
    const response = await api.request({
      method: 'post',
      baseURL: api.baseURL,
      url: '/api/user/signup/',
      data: params,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }

  export async function updateAPI (params) {
    const response = await api.request({
      method: 'post',
      baseURL: api.baseURL,
      url: '/api/user/updateUser/',
      data: params,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }

  export async function getUserAPI (id) {
    const response = await api.request({
      method: 'get',
      baseURL: api.baseURL,
      url: '/api/user/getUserDetails/'+id,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }