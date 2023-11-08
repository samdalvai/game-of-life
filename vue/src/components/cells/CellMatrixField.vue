<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import CellSquare from './components/cells/CellSquare.vue';
import { CellMatrix, Cell } from 'game-of-life-core';

const props = defineProps<{ cellMatrix: CellMatrix }>();

const handleClick = () => {
  console.log("clicked cell")
};

</script>

<template>
  <div class="border-2 border-black">
    <li v-for="(cell, index) in props.cellMatrix[0]" :key="index">
        <CellSquare :cell="cell" @click="handleClick"/>
    </li>
  </div>
</template>
