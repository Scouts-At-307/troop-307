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
            role="button"
            class="navbar-burger burger"
            :class="{ 'is-active': showNav }"
            aria-label="menu"
            aria-expanded="false"
            @click="showNav = !showNav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          class="navbar-menu"
          :class="{ 'is-active': showNav } "
        >
          <div class="navbar-end">
            <a
              class="navbar-item"
              href="//scoutsat307.org"
            >
              Unit Home
            </a>
            <g-link
              class="navbar-item"
              to="/"
            >
              Home
            </g-link>
            <g-link
              class="navbar-item"
              to="/about"
            >
              About
            </g-link>
            <g-link
              class="navbar-item"
              to="/photos"
            >
              Photos
            </g-link>
            <g-link
              class="navbar-item"
              to="/calendar"
            >
              Calendar
            </g-link>
            <g-link
              class="navbar-item"
              to="/links"
            >
              Links
            </g-link>
            <g-link
              class="navbar-item"
              to="/photos"
            >
              Photos
            </g-link>
            <g-link
              class="navbar-item"
              to="/summer-camp"
            >
              Summer Camp
            </g-link>
            <g-link
              class="navbar-item"
              to="/forms"
            >
              Forms and Registration
            </g-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="section">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="footer has-text-centered">
      <span>Copyright © {{ new Date().getFullYear() }}. </span>
      <span>Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>
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
  }),
};
</script>
