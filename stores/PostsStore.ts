import { defineStore } from "pinia";
import type { IPostResponse } from "@/types/posts.d.ts";

interface IPostsStoreState {
  posts: IPostResponse[];
  currentPost: IPostResponse;
}

export const usePostsStore = defineStore("PhotosStore", {
  state: (): IPostsStoreState => {
    return {
      posts: [],
      currentPost: {} as IPostResponse,
    };
  },

  actions: {
    async fetchPosts(): Promise<void> {
      try {
        const response = await fetch(
          "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/"
        );

        const data = await response.json();

        this.posts = data;
      } catch (err) {
        throw new Error(`[PostsStore/fetchPosts]: ${err}`);
      }
    },

    async fetchPostById(id: string | string[]): Promise<void> {
      try {
        const response = await fetch(
          `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
        );

        const data = await response.json();

        this.currentPost = data;
      } catch (err) {
        throw new Error(`[PostsStore/fetchPostById]: ${err}`);
      }
    },
  },
});
