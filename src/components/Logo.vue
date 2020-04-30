<template>
  <g-link
    class="navbar-item"
    to="/"
  >
    <img
      :src="require('~/assets/images/logo.svg')"
    >
    <span
      class="has-text-weight-bold is-size-5"
      style="padding-left: 0.5rem;"
    >
      {{ $static.metadata.siteName }}
    </span>
  </g-link>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
