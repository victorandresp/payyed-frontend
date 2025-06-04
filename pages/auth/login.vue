<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
</script>
<template>
    <div>
      <v-row>
        <v-col cols="6" class="pb-0">
          <AuthSideBanner/>
        </v-col>
        <v-col cols="6" class="pb-0">
          <!-- <div class="mt-10">Login</div> -->
        </v-col>
      </v-row>
    </div>
</template>
<style lang="scss">
.gradient-customer-support{
  background: linear-gradient(45deg, #00000073, #000000d9);
}
</style>