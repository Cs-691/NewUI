import api from '../api';

export async function getChatResponse (message) {
    const response = await api.request({
      method: 'get',
      baseURL: api.baseURL,
      url: '/api/chat/response/'+message,
      data: message,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    return response.data
  }
