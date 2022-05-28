<template>
  <div>
    <CreateRoom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CreateRoom from './components/CreateRoom.vue'
export default defineComponent({
  name: 'App',
  components: {
    CreateRoom,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
})
</script>
