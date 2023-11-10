<script lang="ts" setup>
import { onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps<{ interval: number }>();

const emit = defineEmits(['count']);

const emitCount = () => {
  emit('count', null);
};

const runCounter = () => {
  const intervalId = setInterval(() => {
    emitCount();
  }, props.interval);

  return () => clearInterval(intervalId);
};

onMounted(() => {
  runCounter();
});
</script>
