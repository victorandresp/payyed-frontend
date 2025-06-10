<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
</script>
<template>
    <div>
      <v-row>
        <v-col cols="6" class="pb-0 pr-0 bg-primary">
          <AuthSideBanner 
           title="Welcome back!" 
           subtitle="We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide." 
           />
        </v-col>
        <v-col cols="6" class="pb-0 px-0 bg-primary">
          <AuthLogin/>
        </v-col>
      </v-row>
    </div>
</template>
<style lang="scss">
.gradient-customer-support{
  background: linear-gradient(45deg, #00000073, #000000d9);
}
</style>