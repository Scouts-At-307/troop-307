<template>
	<Layout>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <h1 class="title is-1">{{ title }}</h1>
            <p>This is just a basic 'About Us' page!</p>
          </div>
        </div>
      </div>
    </section>
	</Layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'About Us'
    }
  },
	metaInfo() {
    return {
      title: this.title,
    }
	},
};
</script>