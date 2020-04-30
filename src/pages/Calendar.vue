<template>
  <Page>
    <h1 class="title is-1">
      {{ title }}
    </h1>
    <ClientOnly>
      <Calendar />
    </ClientOnly>
  </Page>
</template>

<script>
export default {
  components: {
    Calendar: () => import('~/components/Calendar.vue'),
  },
  data() {
    return {
      title: 'Calendar',
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>
