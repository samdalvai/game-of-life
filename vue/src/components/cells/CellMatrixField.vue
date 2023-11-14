<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import CellSquare from './CellSquare.vue';
import { CellMatrix, Coordinates } from 'game-of-life-core';

const props = defineProps<{ cellMatrix: CellMatrix }>();

const emit = defineEmits(['cellClick']);

const emitCellClick = (coordinates: Coordinates) => {
  emit('cellClick', coordinates);
};

</script>

<template>
    <div class="border-2 border-black">
        <div class="flex justify-center" v-for="(cellRow, xAxis) in props.cellMatrix" :key="'row-' + xAxis">
            <CellSquare v-for="(cell, yAxis) in cellRow" :key="'cell-' + yAxis" :cell="cell" @click="emitCellClick({ xAxis: xAxis, yAxis: yAxis })" />
        </div>
    </div>
</template>
