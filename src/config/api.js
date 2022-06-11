import axios from 'axios'

export const initializeApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
  })
  return api
}

const api = initializeApi()

export default api
