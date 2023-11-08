<script lang="ts" setup>
import CellSquare from './components/cells/CellSquare.vue';

</script>

<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <CellSquare :cell="{ state: 'dead' }" />
  </div>
</template>
