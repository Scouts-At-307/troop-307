<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <slot />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue';

export default {
  components: {
    Layout,
  },
};
</script>
