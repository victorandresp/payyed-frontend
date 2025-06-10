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
           title="Get Verified!" 
           subtitle="Every day, Payyed makes thousands of customers happy." 
           />
        </v-col>
        <v-col cols="6" class="pb-0 px-0 bg-primary">
          <AuthSignUp/>
        </v-col>
      </v-row>
    </div>
</template>
<style lang="scss">
</style>