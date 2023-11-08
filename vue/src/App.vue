<script lang="ts" setup>
import { ref } from 'vue';
import CellMatrixField from './components/cells/CellMatrixField.vue';
import { CellMatrix, initializeCellMatrix, Coordinates, CellState } from 'game-of-life-core';

const cellMatrix = ref<CellMatrix>(initializeCellMatrix(5, 5));

const handleCellClick = (coordinates: Coordinates) => {
  const { xAxis, yAxis } = coordinates;
  const nextState: CellState = cellMatrix.value[xAxis][yAxis].state === 'alive' ? 'dead' : 'alive';

  const updatedCellMatrix: CellMatrix = [...cellMatrix.value];
  updatedCellMatrix[xAxis][yAxis].state = nextState;

  cellMatrix.value = updatedCellMatrix;
};

</script>

<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <CellMatrixField :cellMatrix="cellMatrix" @cellClick="handleCellClick"/>
  </div>
</template>
