// Import main css
import '~/assets/style/index.scss';
// Progressbar with NProgress
import NProgress from 'nprogress';
import '~/assets/style/nprogress-307.css';

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';
import Page from '~/layouts/Page.vue';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Page', Page);

  // Theme color
  head.meta.push({
    name: 'theme-color',
    content: '#e53935'
  });

  if (process.isClient) {
    // NProgress
    NProgress.configure({ showSpinner: false });
    router.beforeEach((to, from, next) => {
      NProgress.start();
      next();
    });
    router.afterEach((to, from) => {
      NProgress.done();
    });
  };
}
