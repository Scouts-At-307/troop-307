<template>
  <div class="card">
    <g-link
      v-if="form.cover_image"
      :to="form.path"
      class="card-image"
    >
      <figure class="image is-16by9">
        <g-image
          :src="form.cover_image"
          alt="Cover image"
        />
      </figure>
    </g-link>
    <div class="card-content">
      <h1
        class="is-size-4 has-text-weight-bold"
      >
        {{ form.title }}
      </h1>
      <p
        v-html="form.content"
        class="content"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
