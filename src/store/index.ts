import { defineStore } from 'pinia'

import Api from '../services/Api'

export const useRoomStore = defineStore('room', {
  state: () => ({
    joinedRoom: null,
  }),
  actions: {
    async createRoom() {
      const { data } = await Api.createRoom()
      this.joinedRoom = data.ID
    },
  },
})
