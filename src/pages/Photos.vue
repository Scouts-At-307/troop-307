<template>
  <Page>
    <h1 class="title is-1">
      {{ title }}
    </h1>
    <nav
      id="photos-breadcrumb"
      class="breadcrumb is-medium has-background-white-ter"
      aria-label="breadcrumbs"
    >
      <ul>
        <li class="is-active">
          <a
            href="#"
            aria-current="page"
          >Home</a>
        </li>
      </ul>
    </nav>

    <vue-justified-layout :items="images" v-slot="{item, style, index}">
      <img v-preview:scope-a :src="item.url" />
    </vue-justified-layout>
  </Page>
</template>

<style scoped>
  .justified-item img {
    height: 100%;
  }
</style>

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
      images: [
        {
          width: 250,
          height: 400,
          url: 'https://source.unsplash.com/featured/250x400?green,blue'
        }, 
        {
          width: 600,
          height: 400,
          url: 'https://source.unsplash.com/featured/600x400?red,blue'
        },
        {
          width: 250,
          height: 400,
          url: 'https://source.unsplash.com/featured/250x400?green,purple'
        }, 
        {
          width: 600,
          height: 400,
          url: 'https://source.unsplash.com/featured/600x400?orange,blue'
        },
        {
          width: 250,
          height: 400,
          url: 'https://source.unsplash.com/featured/250x400?yellow,purple'
        }, 
        {
          width: 600,
          height: 400,
          url: 'https://source.unsplash.com/featured/600x400?yellow,blue'
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss">
    #photos-breadcrumb {
        padding: 12px 16px;
        border-radius: .25rem;
    }
</style>
