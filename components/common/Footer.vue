<script lang="ts" setup>
const links = [
  { route: '/about-us', name: 'About Us'},
  { route: '/support', name: 'Support'},
  { route: '/help', name: 'Help'},
  { route: '/careers', name: 'Affiliate'},
  { route: '/fees', name: 'Fees'},
]

const currentYear = () =>{
  const date = new Date();
  return date.getFullYear();
}

</script>
<template>
 <footer class="pa-10">
  <v-row justify="space-between">
    <v-col cols="auto">
      <div class="d-flex">
        <template v-for="link in links" :key="link.route">
          <NuxtLink class="text-black text-decoration-none mr-4" :to="link.route">
            {{ link.name }}
          </NuxtLink>
        </template>
      </div>
    </v-col>
    <v-col cols="auto">
       <v-btn icon="mdi-facebook" size="small" variant="plain" />
       <v-btn icon="mdi-twitter" size="x-small" variant="plain" />
       <v-btn icon="mdi-google" size="x-small" variant="plain" />
       <v-btn icon="mdi-youtube" size="x-small" variant="plain" />
    </v-col>
  </v-row>
  <v-row class="border-t-thin" justify="space-between">
    <v-col cols="auto">
      <p class="text-gray text-caption"> Copyright © {{ currentYear ()}} <span class="text-primary">Payyed</span>. All Rights Reserved.</p>
      <p class="text-gray text-caption"> Developed by 
        <a href="https://github.com/victorandresp" style="color: black;" target="_blank">Victor Andrés</a> 
        with Love <span class="text-primary text-body-1">♥</span>
      </p>
    </v-col>
    <v-col cols="auto">
      test
    </v-col>
  </v-row>
</footer>
</template>
<style></style>