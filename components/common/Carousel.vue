<script lang="ts" setup>
import { GET_CAROUSEL_IMAGES } from '~/graphql/queries/carousel.query';

const { result: carouselImages, loading } = useQuery(GET_CAROUSEL_IMAGES)
// TODO: ADD error handler global in nuxt.config and/or create function general for show toast.
</script>

<template>
   <!-- TODO: MAKE CALCULE FOR HEIGHT 100vh - 64px (default value for v-app-bar) -->
  <v-carousel v-if="!loading && carouselImages.getCarouselImages.length > 0" height="94vh" show-arrows="hover" hide-delimiters> 
    <template v-for="carousel in carouselImages.getCarouselImages" :key="carousel.path">
      <v-carousel-item  :src="carousel.path" cover>
        <div class="h-100 d-flex justify-center align-center gradient-common-carousel">
          <div :class="'w-50 '+`${carousel.orientation}`">
            <h1 class="text-white text-h2 font-weight-bold pb-3">{{ carousel.title }}</h1>
            <h3 class="text-white text-h5 font-weight-light">{{  carousel.subtitle }}</h3>
          </div>
        </div>
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<style lang="scss">
.gradient-common-carousel{
  background: linear-gradient(45deg, #00000017, #0000007a);
}
</style>