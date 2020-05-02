<template>
  <Page>
    <h1 class="title is-1">
      {{ $page.page.title }}
    </h1>
    <div class="content" v-html="$page.page.content">
    </div>
  </Page>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.page.title,
    }
  }
}
</script>

<page-query>
  query MarkdownPage($id: ID!) {
    page: markdownPage(id: $id) {
      title
      path
      content
    }
  }
</page-query>