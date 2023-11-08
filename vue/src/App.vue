<script lang="ts" setup>
import { ref } from 'vue';
import CellSquare from './components/cells/CellSquare.vue';
import { Cell } from 'game-of-life-core';

const cell = ref<Cell>({ state: 'alive' });

const handleClick = () => {
  const newState = cell.value.state === 'alive' ? 'dead' : 'alive';
  cell.value = { state: newState };
};
</script>

<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <CellSquare :cell="cell" @click="handleClick"/>
  </div>
</template>
