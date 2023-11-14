<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import { CellMatrix, initializeCellMatrix, getNextCellMatrixState, Coordinates, CellState } from 'game-of-life-core';
import CellMatrixField from '../cells/CellMatrixField.vue';
import GameBoardMenu from './GameBoardMenu.vue';
import ZoomableWindow from '../core/ZoomableWindow.vue';
import TimedCounter from '../core/TimedCounter.vue';

const props = defineProps<{ rows: number, columns: number, infiniteGameBoard: boolean, updateSpeed: number }>();

const gameRunning = ref(false);

const emit = defineEmits(['back']);

const emitBack = () => {
  emit('back', null);
};

const cellMatrix = ref<CellMatrix>(initializeCellMatrix(props.rows, props.columns));

const handleCellClick = (coordinates: Coordinates) => {
  const { xAxis, yAxis } = coordinates;
  const nextState: CellState = cellMatrix.value[xAxis][yAxis].state === 'alive' ? 'dead' : 'alive';

  const updatedCellMatrix: CellMatrix = [...cellMatrix.value];
  updatedCellMatrix[xAxis][yAxis].state = nextState;

  cellMatrix.value = updatedCellMatrix;
};

const handleRunGame = () => {
  gameRunning.value = !gameRunning.value;
};

const handleResetState = () => {
  cellMatrix.value = initializeCellMatrix(props.rows, props.columns);
  gameRunning.value = false;
};

const handleGetNextState = () => {
  cellMatrix.value = getNextCellMatrixState(cellMatrix.value, props.infiniteGameBoard);
};

const handleRandomizeState = () => {
  cellMatrix.value = initializeCellMatrix(props.rows, props.columns, true);
};
</script>

<template>
  <div className="w-full h-screen py-2 xl:w-2/3 flex flex-col justify-center">
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
    </div>
    <ZoomableWindow :zoom-enabled="!gameRunning">
      <CellMatrixField :cellMatrix="cellMatrix" @cellClick="handleCellClick" />
    </ZoomableWindow>
    <GameBoardMenu :game-running="gameRunning" @run="handleRunGame" @reset="handleResetState" @next="handleGetNextState"
      @randomize="handleRandomizeState" @back="emitBack" />
  </div>
  <TimedCounter v-if="gameRunning" :interval="updateSpeed" @count="handleGetNextState" />
</template>
