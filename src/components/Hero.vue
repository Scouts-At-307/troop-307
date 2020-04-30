<template>
  <section class="hero is-medium is-primary has-background">
    <div class="hero-background">
      <g-image src="~/assets/images/carousel-test/1.jpg" />
      <g-image src="~/assets/images/carousel-test/2.jpg" />
      <g-image src="~/assets/images/carousel-test/3.jpg" />
      <g-image src="~/assets/images/carousel-test/4.jpg" />
      <g-image src="~/assets/images/carousel-test/5.jpg" />
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <h1
              v-if="showTitle"
              class="title is-2 is-spaced"
            >
              Welcome to {{ $static.metadata.siteName }}!
            </h1>
            <h2 class="subtitle is-4">
              {{ $static.metadata.siteDescription }}
            </h2>
            <g-link
              to="/about"
              class="is-size-5 has-text-weight-bold has-text-info"
            >
              About Us &#8594;
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
    }
  }
</static-query>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    const stage = document.querySelector('.hero-background');
    const fadeComplete = function () {
      stage.appendChild(arr[0]);
    };
    let arr = stage.getElementsByTagName('img');
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener('animationend', fadeComplete, false);
    }
  },
};
</script>

<style lang="scss">
.hero.has-background {
    position: relative;
    overflow: hidden;
}
.hero.has-background .hero-body {
    z-index: 2;
}
.hero-background img {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    filter: brightness(80%);
}
.hero-background img:nth-of-type(1) {
    animation-name: fader;
    animation-delay: 6s;
    animation-duration: 1s;
    z-index: 1;
}
.hero-background img:nth-of-type(2) {
    z-index: 0;
}
.hero-background img:nth-of-type(n+3) {
    display: none;
}

@keyframes fader {
    from { opacity: 1.0; }
    to   { opacity: 0.0; }
}

</style>
