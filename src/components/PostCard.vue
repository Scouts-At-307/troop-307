<template>
  <div class="card">
    <g-link
      v-if="post.cover_image"
      :to="post.path"
      class="card-image"
    >
      <figure class="image is-16by9">
        <g-image
          :src="post.cover_image"
          alt="Cover image"
        />
      </figure>
    </g-link>
    <div class="card-content">
      <g-link
        :to="post.path"
        class="is-size-4 has-text-weight-bold"
      >
        {{ post.title }}
      </g-link>
      <p
        v-html="post.description"
        class="content"
      />
      <PostMeta :post="post" />
    </div>
    <div
      v-if="post.tags"
      class="card-footer"
    >
      <PostTags
        :post="post"
        class="card-footer-item"
      />
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta';
import PostTags from '~/components/PostTags';

export default {
  components: {
    PostMeta,
    PostTags,
  },
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
