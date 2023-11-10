<script lang="ts" setup>
import GameBoard from './components/game/GameBoard.vue';

</script>

<template>
  <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center p-2">
    <GameBoard :rows="15" :columns="28" :infiniteGameBoard="false" />
  </div>
</template>
