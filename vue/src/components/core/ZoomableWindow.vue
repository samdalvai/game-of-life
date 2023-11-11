<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps<{ zoomEnabled: boolean }>();

const zoom = ref(0.5);

const windowStyle = computed(() => {
  return {
    transform: `scale(${zoom.value})`
  };
});

const handleZoomIn = () => {
  zoom.value += 0.05;
};

const handleZoomOut = () => {
  zoom.value -= 0.05;
};
</script>

<template>
    <div class="w-full h-full bg-white overflow-hidden border rounded-sm border-gray-500 relative shadow-md">
        <div class="w-full h-full flex items-center justify-center transform origin-center transition-transform"
            :style="windowStyle">
            <slot>GameBoard</slot>
        </div>
        <div class="flex absolute bottom-2 right-2">
            <button
                class="flex items-center justify-center w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white px-2 rounded ml-2 border border-black"
                @click="handleZoomIn" v-if="zoomEnabled">
                <span class="flex items-center text-xl pb-1">+</span>
            </button>
            <button
                class="flex items-center justify-center w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white px-2 rounded ml-2 border border-black"
                @click="handleZoomOut" v-if="zoomEnabled">
                <span class="flex items-center text-xl pb-1">-</span>
            </button>
        </div>
    </div>
</template>
