<script lang="ts" setup>
const isVisiblePassword = ref(false)

const email = ref('');
const password = ref('');

const loginValid = ref(false);
const rulesEmail = ref([
  (value: string) => !!value || "Email is required",
  (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid Email"
])
const rulesPassword = ref([
  (value: string) => !!value || "Password is required.",
  (value: string) => value.length >= 6 || "Password is at least 6 characters"
])

const handleLogin = () => {
  console.log(email.value);
  console.log(password.value);
}
</script>
<template>
  <v-form ref="loginForm" v-model="loginValid" class="d-flex w-100 h-100 justify-center align-center">
      <div class="w-75">
        <h3 class="text-h5 font-weight-light w-100 pb-2">Log In</h3>
        <p>Email</p>
        <v-text-field
            v-model="email"
            :rules="rulesEmail"
            type="email"
            density="compact"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          />
        <p>Password</p>
        <v-text-field
            v-model="password"
            :rules="rulesPassword"
            :append-inner-icon="isVisiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="isVisiblePassword ? 'text' : 'password'"
            density="compact"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="isVisiblePassword = !isVisiblePassword"
          />
          <v-btn 
            :disabled="!loginValid" 
            class="mt-2"
            width="100%" 
            variant="outlined" 
            color="white" 
            @click="handleLogin"
          >Login
          </v-btn>
          <p class="mt-3 text-right">Don't have an account? <NuxtLink class="text-white text-weight-bold" to="/auth/sign-up">Sign Up</NuxtLink></p>
      </div>
  </v-form>
</template>


<style>

</style>