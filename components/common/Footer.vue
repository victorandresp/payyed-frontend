<script lang="ts" setup>
const links = [
  { route: '/about-us', name: 'About Us'},
  { route: '/support', name: 'Support'},
  { route: '/help', name: 'Help'},
  { route: '/careers', name: 'Affiliate'},
  { route: '/fees', name: 'Fees'},
]

</script>
<template>
 <v-footer class="pa-10">
  <v-row justify="space-between">
    <v-col>
      <div class="d-flex">
        <template v-for="link in links" :key="link.route">
          <NuxtLink class="text-black text-decoration-none ml-4" :to="link.route">
            {{ link.name }}
          </NuxtLink>

        </template>
      </div>
    </v-col>
  </v-row>
 </v-footer>
</template>
<style></style>