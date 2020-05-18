<template>
  <Layout>
    <!-- Hero, maybe -->
    <!-- List forms -->
    <section class="section posts">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column" v-if="$page.forms.edges.length >= 1">
            <FormCard
              v-for="edge in filteredForms(1, 3)"
              :key="edge.node.id"
              :form="edge.node"
            />
          </div>
          <div class="column" v-if="$page.forms.edges.length >= 2">
            <FormCard
              v-for="edge in filteredForms(2, 3)"
              :key="edge.node.id"
              :form="edge.node"
            />
          </div>
          <div class="column" v-if="$page.forms.edges.length >= 3">
            <FormCard
              v-for="edge in filteredForms(3, 3)"
              :key="edge.node.id"
              :form="edge.node"
            />
          </div>
        </div>
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
          content
          cover_image(width: 770, height: 380, blur: 10)
          buttons {
              label
              link
          }
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
  methods: {
    filteredForms(column, columns) {
      const forms = this.$page.forms.edges;
      const total = forms.length; // How many items
      const gap = Math.ceil(total / columns);
      let filtered = [];
      for(var i = 0; i < gap; i++) {
        const selector = i * columns + column - 1;
        if (forms[selector]) {
          filtered.push(forms[selector]);
        }
      };
      if (filtered.length) {
        return(filtered);
      }else {
        return(null);
      };
    },
  },
};
</script>