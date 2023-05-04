<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  photosCount: number;
  currentLimit: number;
}>();

defineEmits<{
  (e: "change-limit", limit: number): void;
}>();

const step = 10;

const newLimitStep = computed(() => {
  return props.photosCount - props.currentLimit < step
    ? props.photosCount - props.currentLimit
    : step;
});
</script>

<template>
  <button @click="$emit('change-limit', currentLimit + newLimitStep)">
    Show <b>{{ newLimitStep }}</b> more photos
  </button>
</template>
