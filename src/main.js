// Import main css
import '~/assets/style/index.scss';

// // Fontawesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(fas);



// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';
import Page from '~/layouts/Page.vue';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Page', Page);

  // Fontawesome
  // Vue.component('font-awesome-icon', FontAwesomeIcon)
}
