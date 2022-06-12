import { createPinia, setActivePinia } from 'pinia'

import Api from '../services/Api'
import { useRoomStore } from './index'

jest.mock('../services/Api', () => ({
  createRoom: jest.fn(() => ({
    data: {
      ID: 1107,
    },
  })),
}))

describe('room store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('createRoom', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })
    it('should make a post request to the api to create a room', async () => {
      const store = useRoomStore()
      expect(store.joinedRoom).toBe(null)

      await store.createRoom()

      expect(Api.createRoom).toHaveBeenCalledWith()
      expect(store.joinedRoom).toBe(1107)
    })
  })
})
