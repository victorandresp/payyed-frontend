<script lang="ts" setup>
defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, required: true }
});
   
</script>
<template>
    <div class="w-100">
        <div class="login-background-image">
            <div class="h-screen bg-primary opacity-80">
                <img width="auto" class="pa-10" src="/assets/images/payyed-logo-white.png" >
                <div class="w-100 h-75 px-10 d-flex flex-column justify-center align-center">
                    <h1 class="text-white text-h3 font-weight-bold pb-3 w-100">{{ title }}</h1>
                    <h3 class="text-white text-h6 font-weight-light w-100">{{ subtitle }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.login-background-image{
    width: 100%;
    height: 100vh;
    background-image: url("/public/carousel/image-3.jpg");
    background-position: center;
    overflow: hidden;
}
</style>