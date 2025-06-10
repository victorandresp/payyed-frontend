<script lang="ts" setup>

</script>
<template>
  <div class="d-flex w-100 h-100 justify-center align-center">
      <div class="w-75">
        <h3 class="text-h5 font-weight-light w-100 pb-2">Sign Up</h3>
        <p>Name</p>
        <v-text-field
            type="text"
            density="compact"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          />
        <p>Last Name</p>
        <v-text-field
            type="text"
            density="compact"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          />
        <p>Email</p>
        <v-text-field
            type="email"
            density="compact"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          />
        <p>Password</p>
        <v-text-field
            type="password"
            density="compact"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
          />
        <p>Repeat Password</p>
        <v-text-field
            type="password"
            density="compact"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
          />
          <v-btn width="100%" variant="outlined" color="white">Login</v-btn>
          <p class="mt-3 text-right">Already have an account? <NuxtLink class="text-white text-weight-bold" to="/auth/login">Log In</NuxtLink></p>
      </div>
  </div>
</template>


<style>

</style>