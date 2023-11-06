<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>
