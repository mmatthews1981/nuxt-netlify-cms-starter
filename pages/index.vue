<template>
  <div>
    Homepage!
    <Axioms />
  </div>
</template>

<script>
import Axioms from '~/components/Axioms.vue'

export default {
    components: {
    Axioms
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
}
</script>

<style>
</style>
