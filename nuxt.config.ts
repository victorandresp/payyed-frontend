// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', 
    '@nuxtjs/apollo', 
    'vuetify-nuxt-module'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
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
  },
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/sass/main.scss'
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            colors: {
              primary:"#2dbe60"
            },
          },
          dark: {
            colors: {
              primary:"#2dbe60"
            },
          }
        }
      }
    }
    
  }

  //#2dbe60
})