<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{ label: string, name: string, checked: boolean }>();

const emit = defineEmits(['change']);

const emitChange = (event: any) => {
  emit('change', event);
};

</script>

<template>
<div class="w-full flex flex-col justify-center items-center">
        <label class="block text-blue-600">{{label}}</label>
        <input
            type="checkbox"
            :name="name"
            class="h-5 w-5 mt-3 text-blue-600 focus:ring-2 focus:ring-blue-300"
            :checked="checked"
            @change="emitChange"
        />
    </div>
</template>
