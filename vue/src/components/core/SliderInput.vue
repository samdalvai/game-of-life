<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{ label: string, name: string, value: number }>();

const emit = defineEmits(['change']);

const emitChange = (event: any) => {
  emit('change', event);
};
</script>

<template>
    <div class="w-full flex flex-col justify-center items-start">
        <label class="flex text-blue-600 pb-2">
            {{label}}{{': '}}
            <div class="text-blue-600 ps-2">{{value}}{{' ms'}}</div>
        </label>
        <div class="w-full flex justify-between">
            <input
                type="range"
                name={name}
                class="w-full"
                :value="value"
                :min="10"
                :max="1000"
                @input="emitChange"
            />
        </div>
    </div>
</template>
