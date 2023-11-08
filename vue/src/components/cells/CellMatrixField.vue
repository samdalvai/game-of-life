<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import CellSquare from './CellSquare.vue';
import { CellMatrix, Coordinates } from 'game-of-life-core';

const props = defineProps<{ cellMatrix: CellMatrix }>();

const handleClick = (coordinates: Coordinates) => {
  console.log("clicked cell: ", coordinates)
};

</script>

<template>
    <div class="border-2 border-black">
        <div class="flex justify-center" v-for="(cellRow, xAxis) in props.cellMatrix" :key="'row-' + xAxis">
            <CellSquare v-for="(cell, yAxis) in cellRow" :key="'cell-' + yAxis" :cell="cell" @click="handleClick({ xAxis: xAxis, yAxis: yAxis })" />
        </div>
    </div>
</template>
