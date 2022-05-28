<template>
  <div>
    <button id="create-room" @click="createRoom">Create room</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const createRoom = () => {
      console.log('function triggered')
    }

    return {
      createRoom,
    }
  },
})
</script>

<style scoped></style>
