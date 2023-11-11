<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps<{ gameRunning: boolean}>();

const zoom = ref(0.5);

const windowStyle = computed(() => {
  return {
    transform: `scale(${zoom.value})`
  };
});

</script>

<template>
    <div className="w-full h-full bg-white overflow-hidden border rounded-sm border-gray-500 relative shadow-md">
            <div className="w-full h-full flex items-center justify-center transform origin-center transition-transform" :style="windowStyle">
            <slot>GameBoard</slot>
            </div>
            <div className="flex absolute bottom-2 right-2">
            </div>
        </div>
</template>
