<script lang="ts" setup>
  // TODO: SAVE IMAGES IN BBDD AND GET DYNAMICALLY AND TRY DO LAZY LOAD
</script>

<template>
   <!-- TODO: MAKE CALCULE FOR HEIGHT 100vh - 64px (default value for v-app-bar) -->
  <v-carousel height="94vh" show-arrows="hover" hide-delimiters> 
    <v-carousel-item src="/assets/images/carousel/image-1.jpg" cover />

    <v-carousel-item src="/assets/images/carousel/image-2.jpg" cover />

    <v-carousel-item src="/assets/images/carousel/image-3.jpg" cover />
  </v-carousel>
</template>

<style lang="scss"></style>