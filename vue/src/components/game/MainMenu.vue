<script lang="ts" setup>
import { ref } from 'vue';
import GameBoard from './GameBoard.vue';
import GameLogo from '../core/GameLogo.vue';
import Button from '../core/Button.vue';
import NumberInput from '../core/NumberInput.vue';
import CheckBoxInput from '../core/CheckBoxInput.vue';
import SliderInput from '../core/SliderInput.vue';
import { GameBoardSize } from '@/types/components';

const startGame = ref<boolean>(false);
const infiniteGameBoard = ref<boolean>(false);
const updateSpeed = ref<number>(100);

const getDefaultGameBoardSize = (): GameBoardSize => {
  if (window.innerWidth <= 640) {
    return { rows: 40, columns: 25 };
  }

  if (window.innerWidth <= 768) {
    return { rows: 40, columns: 50 };
  }

  return { rows: 40, columns: 70 };
};

const gameBoardSize = ref<GameBoardSize>(getDefaultGameBoardSize());

const handleStartGame = () => {
  if (gameBoardSize.value.rows > 0 && gameBoardSize.value.columns > 0) {
    startGame.value = true;
  }
};

const handleGameBoardSizeChange = (event: any) => {
  const newValue: number | string = event.target.value ? parseInt(event.target.value) : '';
  gameBoardSize.value = { ...gameBoardSize.value, [event.target.name]: newValue };
};

const updateSpeedChange = (event: any) => {
  updateSpeed.value = parseInt(event.target.value);
};

</script>

<template>
  <GameBoard v-if="startGame" :rows="gameBoardSize.rows" :columns="gameBoardSize.columns"
    :infiniteGameBoard="infiniteGameBoard" :updateSpeed="updateSpeed" @back="() => startGame = false" />
  <div v-else
    class="w-full h-2/3 lg:w-1/2 rounded-md flex flex-col justify-center items-center bg-white shadow-sm border border-black">
    <h1 class="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
    <GameLogo />
    <div class="pt-4 pb-2">
      <div class="px-2">
        <Button :text="'Start game'" :color="'blue'" @click="handleStartGame" />
      </div>
      <div class="flex py-2 px-2">
        <div class="pe-1 w-1/2">
          <NumberInput :label="'Rows'" :name="'rows'" :value="gameBoardSize.rows" @change="handleGameBoardSizeChange" />
        </div>
        <div class="ps-1 w-1/2">
          <NumberInput :label="'Columns'" :name="'columns'" :value="gameBoardSize.columns"
            @change="handleGameBoardSizeChange" />
        </div>
      </div>
      <div class="flex py-2 px-2">
        <div class="pe-1 w-1/2">
          <SliderInput :label="'Update speed'" :name="'update-speed'" :value="updateSpeed" @change="updateSpeedChange" />
        </div>
        <div class="ps-1 w-1/2">
          <CheckBoxInput :label="'Infinite board'" :name="'infinite-board'" :checked="infiniteGameBoard"
            @change="() => infiniteGameBoard = !infiniteGameBoard" />
        </div>
      </div>
    </div>
  </div>
</template>
