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
          :class="{ 'is-active': showNav } "
          class="navbar-menu"
        >
          <div class="navbar-end">
            <a
              class="navbar-item"
              href="//scoutsat307.org"
            >
              Unit Home
            </a>
            <g-link
              exact-active-class="is-active"
              class="navbar-item"
              to="/"
            >
              Home
            </g-link>
            <g-link
              active-class="is-active"
              class="navbar-item"
              to="/about"
            >
              About
            </g-link>
            <g-link
              active-class="is-active"
              class="navbar-item"
              to="/photos"
            >
              Photos
            </g-link>
            <g-link
              active-class="is-active"
              class="navbar-item"
              to="/calendar"
            >
              Calendar
            </g-link>
            <g-link
              active-class="is-active"
              class="navbar-item"
              to="/links"
            >
              Links
            </g-link>
            <g-link
              active-class="is-active"
              class="navbar-item"
              to="/summer-camp"
            >
              Summer Camp
            </g-link>
            <g-link
              active-class="is-active"
              class="navbar-item"
              to="/forms"
            >
              Forms and Registration
            </g-link>
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
