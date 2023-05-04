<script lang="ts" setup>
import { IPostResponse } from "~/types/posts";

const props = defineProps<{
  post: IPostResponse;
}>();

const date = computed(() => {
  return formatDate(props.post.createdAt);
});

const isImageDownloaded = ref(false);

onMounted(() => {
  const image = new Image();

  image.src = props.post.image;

  image.addEventListener("load", () => {
    isImageDownloaded.value = true;
  });

  image.addEventListener("error", () => {
    isImageDownloaded.value = false;
  });
});
</script>

<template>
  <article>
    <header class="entry-header">
      <h1 class="entry-title">
        <NuxtLink :to="`/posts/${post.id}`" rel="bookmark">{{
          post.title
        }}</NuxtLink>
      </h1>
      <div class="entry-meta">
        <span class="posted-on"
          ><time class="entry-date published">{{ date }}</time></span
        >
      </div>
      <div class="entry-thumbnail">
        <img
          v-if="post.image && isImageDownloaded"
          :src="post.image"
          :alt="post.title"
          class="entry-thumbnail-image"
        />
        <!-- <img
          v-else
          class="entry-thumbnail-placeholder"
          src="https://placehold.jp/500x300.png"
        /> -->
      </div>
    </header>
    <div class="entry-summary">
      <p>
        {{ post.preview }}
        <NuxtLink class="more-link" :to="`/posts/${post.id}`"
          >Read more</NuxtLink
        >
      </p>
    </div>
  </article>
</template>
