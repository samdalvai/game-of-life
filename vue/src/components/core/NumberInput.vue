<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{ label: string, inputName: string, inputValue: number }>();

const emit = defineEmits(['change']);

const emitChange = (event: any) => {
  emit('change', event);
};
</script>

<template>
    <div class="w-full">
        <label class="block text-blue-600">{{ label }}</label>
        <input type="number" :name="inputName"
            class="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
            :value="inputValue" @input="emitChange" />
    </div>
</template>
