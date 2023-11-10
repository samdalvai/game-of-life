<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue';
import { ButtonColor } from '../../types/components';

const props = defineProps<{ text: string, color: ButtonColor }>();

const emit = defineEmits(['click']);

const emitClick = () => {
  emit('click', null);
};

const buttonColors = {
  blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-800',
  gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-800',
  green: 'bg-green-600 hover:bg-green-700 focus:ring-green-900',
  red: 'bg-red-500 hover:bg-red-600 focus:ring-red-800',
  indigo: 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-800',
  orange: 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-800',
  yellow: 'bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-700'
};

const buttonClass = computed(() => {
  return `border border-black focus:ring-1 px-4 py-2 w-full text-sm font-bold text-white rounded ${buttonColors[props.color]}`;
});
</script>

<template>
  <button :class="buttonClass" @click="emitClick">
        <span className="flex justify-center items-center">
            {{ props.text }}
        </span>
    </button>
</template>
