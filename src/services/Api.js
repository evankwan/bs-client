import api from '../config/api.js'

export default {
  createRoom: async () => {
    return api.post('/rooms')
  },
}
