<script lang="ts" setup>
import { GET_CAROUSEL_IMAGES } from '~/graphql/queries/carousel.query';

const { result: carouselImages, loading } = useQuery(GET_CAROUSEL_IMAGES)

</script>

<template>
   <!-- TODO: MAKE CALCULE FOR HEIGHT 100vh - 64px (default value for v-app-bar) -->
  <v-carousel v-if="!loading && carouselImages.getCarouselImages.length > 0" height="94vh" show-arrows="hover" hide-delimiters> 
    <template v-for="carousel in carouselImages.getCarouselImages" :key="carousel.path">
      <v-carousel-item :src="carousel.path" cover />
    </template>
  </v-carousel>
</template>

<style lang="scss"></style>