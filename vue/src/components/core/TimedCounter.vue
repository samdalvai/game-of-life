/*import { useEffect } from 'react';
import { CallBack } from '../../types/callbacks';

const TimedCounter = ({ interval, onCount }: { interval: number, onCount: CallBack}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
        onCount();
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, onCount]);

  return null;
};

export default TimedCounter;

<script setup>

</script>

<template>
  <div/>
</template>
