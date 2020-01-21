<template>
  <div>
    <ul v-for="(blogPost, index) in blogPosts" :key="index">
      <nuxt-link :to="`blog/${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
      <p>{{blogPost.description}}</p>
    </ul>
    <ul v-for="(axiom, index) in axiomPosts" :key="index">
      <p>{{axiom.text}}</p>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    },
    axiomPosts() {
      return this.$store.state.axioms
    }
  }
}
</script>