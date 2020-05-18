<template>
  <div class="card">
    <g-link
      v-if="form.cover_image"
      :to="form.link"
      class="card-image"
    >
      <figure class="image is-16by9">
        <g-image
          :src="form.cover_image"
          :alt="form.title"
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
    <footer class="card-footer" v-if="form.buttons">
      <a
        class="card-footer-item"
        v-for="(button, index) in form.buttons"
        :key="index"
        :href="button.link"
        target="_blank"
      >
        {{ button.label }}
      </a>
    </footer>
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
