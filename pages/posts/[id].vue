<script lang="ts" setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "nuxt/app";
import { usePostsStore } from "~/stores/PostsStore";
import { formatDate } from "~/utils";

const store = usePostsStore();
const route = useRoute();

const { currentPost } = storeToRefs(store);

const date = computed(() => {
  return formatDate(currentPost.value.createdAt);
});

onMounted(async () => {
  const id = route.params.id;
  await store.fetchPostById(id);
});
</script>

<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column two-thirds">
      <main id="main" class="site-main" role="main">
        <article>
          <header class="entry-header">
            <h1 class="entry-title">{{ currentPost.title }}</h1>
            <div class="entry-meta">
              <span class="posted-on"
                ><time class="entry-date published">{{ date }}</time></span
              >
            </div>
            <div class="entry-thumbnail">
              <img
                v-if="currentPost.image"
                :src="currentPost.image"
                :alt="currentPost.preview"
              />
            </div>
          </header>
          <div
            v-if="currentPost.description"
            class="entry-content"
            v-html="currentPost.description"
          ></div>
        </article>
        <nav class="navigation post-navigation" role="navigation">
          <h1 class="screen-reader-text">Post navigation</h1>
          <div class="nav-links">
            <div class="nav-previous">
              <NuxtLink to="/" rel="prev"
                ><span class="meta-nav">←</span> Thanks for watching!</NuxtLink
              >
            </div>
          </div>
        </nav>
      </main>
    </div>
  </div>
</template>
