<script lang="ts" setup>
import TheHeader from "~/components/common/layout/TheHeader.vue";
import TheFooter from "~/components/common/layout/TheFooter.vue";
</script>

<template>
  <div class="container">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
