<script lang="ts" setup>
import PostsListItem from "./PostsListItem.vue";
import { IPostResponse } from "~/types/posts";

defineProps<{
  posts: IPostResponse[];
}>();
</script>

<template>
  <div class="grid bloggrid">
    <PostsListItem
      v-for="post in posts"
      :key="`post-item-${post.id}`"
      :post="post"
    />
  </div>
</template>

<style scoped>
.bloggrid {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  margin: 0 auto;
  padding: 10px;
}
</style>
