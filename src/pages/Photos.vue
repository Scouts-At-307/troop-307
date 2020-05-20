<template>
  <Page>
    <h1 class="title is-1">
      {{ title }}
    </h1>
    <nav
      id="photos-breadcrumb"
      class="is-medium is-size-5 has-background-white-ter"
    >
      <ul style="display:flex">
        <li>
          Favorite Photos
        </li>
        <li style="margin-left:auto">
          <a 
            class="button is-black is-small" 
            href="//gallery-troop.scoutsat307.org"
            target="_blank"
          >
            All photos →
          </a>
        </li>
      </ul>
    </nav>

    <vue-justified-layout :items="images" v-slot="{item, style, index}">
      <g-image v-preview:scope-a :src="item.image" />
    </vue-justified-layout>
  </Page>
</template>

<style scoped>
  .justified-item img {
    height: 100%;
  }
</style>

<page-query>
  query {
    photos: allStarredPhotos(sortBy: "id") {
      edges {
        node {
          id
          height
          width
          image
        }
      }
    }
  }
</page-query>

<script>
import {VueJustifiedLayout} from 'vue-justified-layout';

import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import createPreviewDirective from "vue-photoswipe-directive";

export default {
  components: {
    VueJustifiedLayout,
  },
  directives: {
    preview: createPreviewDirective({
      bgOpacity: 0.9,
    }, PhotoSwipe, PhotoSwipeUI),
  },
  data() {
    return {
      title: 'Photos',
      images: []
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  mounted() {
    this.$page.photos.edges.forEach(edge => {
      this.images.push(edge.node);
    });
  }
};
</script>

<style lang="scss">
    #photos-breadcrumb {
        padding: 12px 16px;
        border-radius: .25rem;
    }
</style>
