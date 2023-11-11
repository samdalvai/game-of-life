<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import GameBoard from './GameBoard.vue';
import Button from '../core/Button.vue';

const startGame = ref(false);

</script>

<template>
<GameBoard v-if="startGame" :rows="15" :columns="28" :infiniteGameBoard="true"/>
<div v-else class="w-full h-2/3 lg:w-1/2 rounded-md flex flex-col justify-center items-center bg-white shadow-sm border border-black">
        <h1 class="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
        <div class="pt-4 pb-2">
            <div class="px-2">
                <Button :text="'Start game'" :color="'blue'" />
            </div>
            <div class="flex py-2 px-2">
                <div class="pe-1 w-1/3">

                </div>
                <div class="px-1 w-1/3">

                </div>
                <div class="ps-1 w-1/3">

                </div>
            </div>
        </div>
    </div>
</template>
