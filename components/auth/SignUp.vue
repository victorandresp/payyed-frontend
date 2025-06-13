<script lang="ts" setup>
const isVisiblePassword = ref(false)
const isVisibleRepeatPassword = ref(false)

const signUpValid = ref(false)

const signUpData = reactive({
  name:"",
  lastName:"",
  email:"",
  password:"",
  repeatPassword:"",
})

const rulesSignUp = {
  name: ref([
    (value: string) => !!value || "Name is required",
    (value: string) => value.length >= 6 || "Name is at least 6 characters"
  ]),
  lastName: ref([
    (value: string) => !!value || "Last Name is required",
    (value: string) => value.length >= 6 || "Last Name is at least 6 characters"
  ]),
  email: ref([
    (value: string) => !!value || "Email is required",
    (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid Email"
  ]),
  password: ref([
    (value: string) => !!value || "Password is required.",
    (value: string) => value.length >= 6 || "Password is at least 6 characters"
  ]),
  repeatPassword: ref([
    (value: string) => !!value || "Password is required.",
    (value: string) => value.length >= 6 || "Password is at least 6 characters",
    (value: string) => value === signUpData.password || "Password does not match"
  ])

}

const handleSignUp = () =>{
  console.log(signUpData);
}
</script>
<template>
  <v-form ref="formSignUp" v-model="signUpValid" class="d-flex w-100 h-100 justify-center align-center">
      <div class="w-75">
        <h3 class="text-h5 font-weight-light w-100 pb-2">Sign Up</h3>
        <p>Name</p>
        <v-text-field
            v-model="signUpData.name"
            :rules="rulesSignUp.name.value"
            type="text"
            density="compact"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          />
        <p>Last Name</p>
        <v-text-field
         v-model="signUpData.lastName"
            :rules="rulesSignUp.lastName.value"
            type="text"
            density="compact"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          />
        <p>Email</p>
        <v-text-field
            v-model="signUpData.email"
            :rules="rulesSignUp.email.value"
            type="email"
            density="compact"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          />
        <p>Password</p>
        <v-text-field
            v-model="signUpData.password"
            :rules="rulesSignUp.password.value"
            :append-inner-icon="isVisiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="isVisiblePassword ? 'text' : 'password'"
            density="compact"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="isVisiblePassword = !isVisiblePassword"
          />
        <p>Repeat Password</p>
        <v-text-field
            v-model="signUpData.repeatPassword"
            :rules="rulesSignUp.repeatPassword.value"
            :append-inner-icon="isVisibleRepeatPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="isVisibleRepeatPassword ? 'text' : 'password'"
            density="compact"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="isVisibleRepeatPassword = !isVisibleRepeatPassword"
          />
          <v-btn
            :disabled="!signUpValid"
            class="mt-2"
            width="100%" 
            variant="outlined" 
            color="white"
            @click="handleSignUp"
            >
            Sign Up
          </v-btn>
          <p class="mt-3 text-right">Already have an account? <NuxtLink class="text-white text-weight-bold" to="/auth/login">Log In</NuxtLink></p>
      </div>
  </v-form>
</template>


<style>

</style>