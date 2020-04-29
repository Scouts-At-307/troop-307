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
                            class="navbar-item is-active"
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

        <transition name="fade" appear>
            <main>
                <slot />
            </main>
        </transition>

        <footer class="bsa-footer" ref="bsaFooter"></footer>
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
    methods: {
        fixFooter() {
            let footerHeight = this.$refs.bsaFooter.clientHeight + 'px'
            document.querySelector('body').style.marginBottom = footerHeight
        }
    },
    mounted() {
        // Register an event listener when the Vue component is ready
        window.addEventListener('resize', this.fixFooter)
        this.fixFooter()
    },
    beforeDestroy() {
        // Unregister the event listener before destroying this Vue instance
        window.removeEventListener('resize', this.fixFooter)
    },
    data: () => ({
        showNav: false,
        bodyMargin: 56
    }),
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