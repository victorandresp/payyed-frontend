<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})

</script>
<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col cols="6" class="pa-0">
        <AuthSideBanner/>
      </v-col>
      <v-col cols="6" class="pa-0">
        <div class="mt-10">Login</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">
.gradient-customer-support{
  background: linear-gradient(45deg, #00000073, #000000d9);
}
</style>