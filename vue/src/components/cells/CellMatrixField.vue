<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import CellSquare from './CellSquare.vue';
import { CellMatrix, Cell } from 'game-of-life-core';

const props = defineProps<{ cellMatrix: CellMatrix }>();

const handleClick = () => {
  console.log("clicked cell")
};

</script>

<template>
    <div class="border-2 border-black">
        <div class="flex justify-center" v-for="(cellRow, xAxis) in props.cellMatrix" :key="'row-' + xAxis">
            <CellSquare v-for="(cell, yAxis) in cellRow" :key="'cell-' + yAxis" :cell="cell" @click="handleClick" />
        </div>
    </div>
</template>
