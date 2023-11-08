<script lang="ts" setup>
import CellSquare from './components/cells/CellSquare.vue';
import { Cell } from 'game-of-life-core';

const cell: Cell = { state: 'dead' };
</script>

<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <CellSquare :cell="cell" />
  </div>
</template>
