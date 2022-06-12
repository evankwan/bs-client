import api from '../config/api'

export default {
  createRoom: async () => {
    return api.post('/rooms')
  },
}
