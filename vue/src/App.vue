<script lang="ts" setup>
import { ref } from 'vue';
import CellMatrixField from './components/cells/CellMatrixField.vue';
import { CellMatrix, initializeCellMatrix } from 'game-of-life-core';

const cellMatrix = ref<CellMatrix>(initializeCellMatrix(5, 5));

</script>

<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <CellMatrixField :cellMatrix="cellMatrix"/>
  </div>
</template>
