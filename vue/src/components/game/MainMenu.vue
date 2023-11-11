<script lang="ts" setup>
import { ref } from 'vue';
import GameBoard from './GameBoard.vue';
import Button from '../core/Button.vue';
import NumberInput from '../core/NumberInput.vue';
import { GameBoardSize } from '@/types/components';

const startGame = ref<boolean>(false);
const gameBoardSize = ref<GameBoardSize>(getDefaultGameBoardSize());
const infiniteGameBoard = ref<boolean>(false);

function getDefaultGameBoardSize (): GameBoardSize {
  if (window.innerWidth <= 640) {
    return { rows: 40, columns: 25 };
  }

  if (window.innerWidth <= 768) {
    return { rows: 40, columns: 50 };
  }

  return { rows: 40, columns: 70 };
}

const handleStartGame = () => {
  if (gameBoardSize.value.rows > 0 && gameBoardSize.value.columns > 0) {
    startGame.value = true;
  }
};

const handleGameBoardSizeChange = (event: any) => {
  const newValue: number | string = event.target.value ? parseInt(event.target.value) : '';
  gameBoardSize.value = { ...gameBoardSize.value, [event.target.name]: newValue };
};

</script>

<template>
    <GameBoard v-if="startGame" :rows="gameBoardSize.rows" :columns="gameBoardSize.columns" :infiniteGameBoard="infiniteGameBoard" @back="() => startGame = false" />
    <div v-else
        class="w-full h-2/3 lg:w-1/2 rounded-md flex flex-col justify-center items-center bg-white shadow-sm border border-black">
        <h1 class="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
        <div class="pt-4 pb-2">
            <div class="px-2">
                <Button :text="'Start game'" :color="'blue'" @click="handleStartGame" />
            </div>
            <div class="flex py-2 px-2">
                <div class="pe-1 w-1/3">
                    <NumberInput :label="'Rows'" :inputName="'rows'" :inputValue="gameBoardSize.rows" @change="handleGameBoardSizeChange" />
                </div>
                <div class="px-1 w-1/3">
                    <NumberInput :label="'Columns'" :inputName="'columns'" :inputValue="gameBoardSize.columns" @change="handleGameBoardSizeChange" />
                </div>
                <div class="ps-1 w-1/3">

                </div>
            </div>
        </div>
    </div>
</template>
