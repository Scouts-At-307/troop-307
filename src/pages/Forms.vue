<template>
  <Layout>
    <!-- Hero, maybe -->
    <!-- List posts -->
    <section class="section posts">
      <div class="container">
        <FormCard
          v-for="edge in $page.forms.edges"
          :key="edge.node.id"
          :form="edge.node"
        />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    forms: allForm(sortBy: "title") {
      edges {
        node {
          id
          title
          date(format: "D. MMMM YYYY")
          content
          cover_image(width: 770, height: 380, blur: 10)
        }
      }
    }
  }
</page-query>

<script>
import FormCard from '~/components/FormCard.vue';

export default {
  components: {
    FormCard,
  },
  metaInfo: {
    title: 'Forms',
  },
};
</script>