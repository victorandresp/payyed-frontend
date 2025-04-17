// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/apollo',
  ],
  runtimeConfig: {
    public: {
      // Variables access only on client side
      frontendUrl: process.env.FRONTEND_URL, 
    },
    // Variables access only on server side
    graphqlUrl: process.env.API_KEY, 
  },
  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "auth-token",
        httpEndpoint: process.env.GRAPHQL_URL as string,
      },
    }
  }
})