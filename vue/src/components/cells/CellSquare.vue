<script lang="ts" setup>
import { defineProps } from 'vue';
import { Cell } from 'game-of-life-core';

const props = defineProps<{ cell: Cell }>();

const cellColors = {
  alive: 'bg-black',
  dead: 'bg-white'
};

const cellClass = `w-10 h-10 flex-shrink-0 border-solid border border-slate-500 rounded-sm cursor-pointer ${cellColors[props.cell.state]} ${props.cell.state === 'alive' ? 'hover:bg-red-400' : 'hover:bg-green-500'}`;
</script>

<template>
  <div :class="cellClass" />
</template>
