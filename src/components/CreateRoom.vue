<template>
  <div>
    <button id="create-room" @click="createRoom">Create room</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Api from '../services/Api'

export default defineComponent({
  setup() {
    const createRoom = async () => {
      try {
        const response = await Api.createRoom()
        console.log(response)
      } catch (error) {
        console.error(error)
      }
      return
    }

    return {
      createRoom,
    }
  },
})
</script>

<style scoped></style>
