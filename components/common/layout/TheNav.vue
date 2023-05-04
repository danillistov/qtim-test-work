<script lang="ts" setup>
interface IMenuItem {
  id: number;
  name: string;
  route: string;
}

defineProps<{
  navMenuItems: IMenuItem[];
}>();
</script>

<template>
  <nav id="site-navigation" class="main-navigation">
    <div class="menu-menu-1-container">
      <ul id="menu-menu-1" class="menu">
        <li
          v-for="item in navMenuItems"
          :key="`header-nav-menu-item-${item.id}`"
        >
          <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
