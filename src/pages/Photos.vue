<template>
  <Layout>
    <iframe id="photosFrame" src="https://lycheeorg.github.io/demo/"></iframe>
  </Layout>
</template>

<style scoped>
  #photosFrame {
    height: 100%;
    width: 100%;
  }
</style>

<script>
export default {
  metaInfo: {
    title: "Photos",
  },
  mounted() {
    document.querySelector('.bsa-footer').style.display = "none";
    document.querySelector('body').style.paddingBottom = "0";
    document.querySelector('main').style.height = "calc(100vh - 64px)";
  }
};
</script>
