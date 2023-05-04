<script lang="ts" setup>
import TheNav from "~/components/common/layout/TheNav.vue";

const navMenuItems = [{ id: 1, name: "Blog", route: "/" }];
</script>

<template>
  <header id="masthead" class="site-header">
    <div class="site-branding">
      <h1 class="site-title">
        <a href="index.html" rel="home">Danil Listov</a>
      </h1>
      <h2 class="site-description">
        Simple blog list for testing frontend skills
      </h2>
    </div>
    <TheNav :nav-menu-items="navMenuItems" />
  </header>
</template>
