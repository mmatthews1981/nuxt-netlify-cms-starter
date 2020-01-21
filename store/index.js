export const state = () => ({
  blogPosts: [],
  axioms: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setAxiomPosts(state, list) {
    state.axioms = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let blogs = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = blogs.keys().map(key => {
      let res = blogs(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)

    let axioms = await require.context(
      '~/assets/content/axioms/',
      false,
      /\.json$/
    )
    let axiomPosts = axioms.keys().map(key => {
      let res = axioms(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setAxiomPosts', axiomPosts)
  }
}
