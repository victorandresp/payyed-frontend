// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    //TODO: Review eslint rules for nuxt 3 and apollo graphql for avoid unexpected bugs and errors 
    '@nuxt/eslint',
    '@nuxtjs/apollo',
  ],
  runtimeConfig: {
    public: {
      // Variables access only on client side
      frontendUrl: process.env.FRONTEND_URL, 
    },
    // Variables access only on server side
    graphqlUrl: process.env.GRAPHQL_URL, 
  },
  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        // tokenName: "auth-token",
        httpEndpoint: process.env.GRAPHQL_URL as string,
      },
    }
  }
})