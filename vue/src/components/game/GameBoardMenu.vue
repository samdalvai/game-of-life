<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue';
import Button from '../core/Button.vue';
import PlayIcon from '../icons/PlayIcon.vue';
import PauseIcon from '../icons/PauseIcon.vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import NextIcon from '../icons/NextIcon.vue';

const props = defineProps<{ gameRunning: boolean}>();

const runButtonText = computed(() => {
  return props.gameRunning ? 'Run' : 'Pause';
});

const runButtonColor = computed(() => {
  return props.gameRunning ? 'green' : 'yellow';
});

const emit = defineEmits(['run', 'reset', 'next']);

const emitRun = () => {
  emit('run', null);
};

const emitReset = () => {
  emit('reset', null);
};

const emitNext = () => {
  emit('next', null);
};

</script>

<template>
    <div className="pt-3 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 flex md:pe-1">
            <div className="pe-1 w-1/3">
                <Button :text="runButtonText" :color="runButtonColor" @click="emitRun">
                    <PlayIcon v-if="gameRunning"/>
                    <PauseIcon v-else/>
                </Button>
            </div>
            <div className="px-1 w-1/3">
                <Button :text="'Reset'" :color="'gray'" @click="emitReset">
                    <DeleteIcon />
                </Button>
            </div>
            <div className="ps-1 w-1/3">
                <Button :text="'Next'" :color="'blue'" @click="emitNext">
                    <NextIcon />
                </Button>
            </div>
        </div>
        <div className="w-full md:w-2/5 flex pt-2 md:ps-1 md:pt-0">
            <div className="pe-1 w-1/2">

            </div>
            <div className="ps-1 w-1/2">

            </div>
        </div>
    </div>
</template>
