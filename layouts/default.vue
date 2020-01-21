<template>
  <div class="container">
    <a href="/">
      <h1>Welcome to meredithmatthews.net.</h1>
      <div>press any key to continue...</div>
    </a>
    <Navigation />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'

  export default {
      components: {
      Navigation
    }
  }
</script>
