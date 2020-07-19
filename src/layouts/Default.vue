<template>
  <div id="app">
    <nav
      class="navbar"
      role="navigation"
      aria-label="primary navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <Logo v-if="showLogo" />
          <a
            :class="{ 'is-active': showNav }"
            @click="showNav = !showNav"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          :class="{ 'is-active': showNav }"
          class="navbar-menu"
        >
          <div 
            class="navbar-end" 
            @click="showNav = false"
          >
            <!-- Generate Navbar menu from GraphQL data -->
            <template v-for="item in $static.menu.edges">
              <a
                v-if="item.node.external"
                v-bind:key="item.node.id"
                class="navbar-item"
                :href="item.node.link"
              >
                {{item.node.name}}
              </a>
              <g-link
                v-else-if="item.node.link == '/'"
                v-bind:key="item.node.id"
                exact-active-class="is-active"
                class="navbar-item"
                :to="item.node.link"
              >
                {{item.node.name}}
              </g-link>
              <g-link
                v-else
                v-bind:key="item.node.id"
                active-class="is-active"
                class="navbar-item"
                :to="item.node.link"
              >
                {{item.node.name}}
              </g-link>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <transition
      name="fade"
      appear
    >
      <main>
        <slot />
      </main>
    </transition>

    <footer
      ref="bsaFooter"
      class="bsa-footer"
    />
  </div>
</template>

<static-query>
  query {
    menu: allMenu(order: ASC) {
      edges {
        node {
          id
          name
          link
          external
        }
      }
    }
  }
</static-query>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
  props: {
    showLogo: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    showNav: false,
    bodyMargin: 56,
  }),
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.fixFooter);
    this.fixFooter();
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.fixFooter);
  },
  methods: {
    fixFooter() {
      const footerHeight = `${this.$refs.bsaFooter.clientHeight}px`;
      document.querySelector('body').style.paddingBottom = footerHeight;
    },
  },
};
</script>

<style>
.fade-enter-active {
  transition: opacity .2s;
}

.fade-enter {
  opacity: 0;
}
</style>
