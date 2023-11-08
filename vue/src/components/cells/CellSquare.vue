<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import { Cell } from 'game-of-life-core';

const props = defineProps<{ cell: Cell }>();

const emit = defineEmits(['click']);

const emitClick = () => {
  emit('click', () => null);
};

const cellColors = {
  alive: 'bg-black',
  dead: 'bg-white'
};

const cellClass = computed(() => {
  const baseClass = 'w-10 h-10 flex-shrink-0 border-solid border border-slate-500 rounded-sm cursor-pointer ' + cellColors[props.cell.state];

  if (props.cell.state === 'alive') {
    return baseClass + ' hover:bg-red-400';
  }

  return baseClass + ' hover:bg-green-500';
});
</script>

<template>
  <div :class="cellClass" @click="emitClick"></div>
</template>
