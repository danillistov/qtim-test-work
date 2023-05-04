import { describe, it, beforeEach, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { fakePostResponseData } from "../__fixtures__";
import PostsListItemVue from "~/components/PostsListItem.vue";
import type { IPostResponse } from "~/types/posts";
import { formatDate } from "~/utils";

describe("PostsListItem component", () => {
  let currentPost: IPostResponse;

  beforeEach(() => {
    currentPost = fakePostResponseData[0];
  });

  it("should display card text data correctly ", () => {
    const wrapper = shallowMount(PostsListItemVue, {
      propsData: {
        post: currentPost,
      },
    });

    expect(wrapper.find(".entry-title").text()).toContain(currentPost.title);

    const date: string = formatDate(currentPost.createdAt);
    expect(wrapper.find(".entry-date").text()).toContain(date);

    expect(wrapper.find(".entry-summary").text()).toContain(
      currentPost.preview
    );

    wrapper.unmount();
  });

  it("should be displayed correct image", () => {
    const wrapper = shallowMount(PostsListItemVue, {
      propsData: {
        post: currentPost,
      },
    });

    const imageEl = wrapper.find(".entry-thumbnail-image");

    expect(imageEl.isVisible()).toBeTruthy();
    expect(imageEl.attributes("src")).toBe(currentPost.image);

    wrapper.unmount();
  });

  it("should be displayed placeholder for image", () => {
    currentPost.image = "error";

    const wrapper = shallowMount(PostsListItemVue, {
      propsData: {
        post: currentPost,
      },
    });

    expect(
      wrapper.find(".entry-thumbnail-placeholder").isVisible()
    ).toBeTruthy();

    wrapper.unmount();
  });
});
