<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import PostsList from "~/components/PostsList.vue";
import { usePostsStore } from "~/stores/PostsStore";
import Pagination from "~/components/common/AppPagination.vue";

const store = usePostsStore();

const { posts } = storeToRefs(store);

const currentLimit = ref(15);

const limitedPosts = computed(() => {
  return posts.value.slice(0, currentLimit.value);
});

async function changeCurrentLimitValue(newLimit: number) {
  currentLimit.value = newLimit;

  await nextTick();

  window.scrollBy({
    top: 800,
    left: 0,
    behavior: "smooth",
  });
}

onMounted(async () => {
  await store.fetchPosts();
});
</script>

<template>
  <div>
    <PostsList v-if="posts && posts.length" :posts="limitedPosts" />
    <div v-else class="preloader">Loading...</div>

    <Pagination
      v-if="posts?.length && posts?.length > currentLimit"
      class="pagination-btn"
      :photos-count="posts.length"
      :current-limit="currentLimit"
      @change-limit="changeCurrentLimitValue"
    />
  </div>
</template>
