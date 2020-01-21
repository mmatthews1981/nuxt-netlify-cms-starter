<template>
  <div>
    <ul v-for="(axiom, index) in axiomPosts" :key="index">
      <li>{{axiom.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    axiomPosts() {
      return this.$store.state.axioms
    }
  }
}
</script>