import api from '../api';

export async function getChatResponse (symptoms) {
    const response = await api.request({
      method: 'post',
      baseURL: api.baseURL,
      url: '/api/chat/response/',
      data: symptoms,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }

  export async function getRemediesAPI (illness) {
    const response = await api.request({
      method: 'get',
      baseURL: api.baseURL,
      url: '/api/user/getRemedies/'+illness,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }
