<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import CellMatrixField from '../cells/CellMatrixField.vue';
import Button from '../core/Button.vue';
import NextIcon from '../icons/NextIcon.vue';
import PlayIcon from '../icons/PlayIcon.vue';
import { CellMatrix, initializeCellMatrix, getNextCellMatrixState, Coordinates, CellState } from 'game-of-life-core';

const props = defineProps<{ rows: number, columns: number, infiniteGameBoard: boolean }>();

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

const handleGetNextState = () => {
  cellMatrix.value = getNextCellMatrixState(cellMatrix.value, props.infiniteGameBoard);
};
</script>

<template>
    <div className="w-full h-screen py-2 xl:w-2/3 flex flex-col justify-center">
        <div className="flex justify-center">
            <h1 className="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
        </div>
        <CellMatrixField :cellMatrix="cellMatrix" @cellClick="handleCellClick"/>
        <Button :text="'Run'" :color="'green'" @click="handleGetNextState">
          <PlayIcon />
        </Button>
        <Button :text="'Next'" :color="'blue'" @click="handleGetNextState">
          <NextIcon />
        </Button>
    </div>
</template>
