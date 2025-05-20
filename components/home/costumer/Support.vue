
<script lang="ts" setup>

</script>

<template>
    <v-parallax scale="0.1" height="600px" src="/public/parallax/image-home-parallax.jpg" >
      <div class="d-flex justify-center align-center w-100 h-100 gradient-customer-support">
        <div class="text-white text-center">
          <h4 class="text-h4 font-weight-bold mb-3"> Awesome Customer Support</h4>
          <p class="text-subtitle-1 mb-2">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
          <v-btn color="primary" variant="flat" append-icon="mdi-arrow-right">Find out more</v-btn>
        </div>
      </div>
    </v-parallax>
</template>

<style lang="scss">
.gradient-customer-support{
  background: linear-gradient(45deg, #00000073, #000000d9);
}
</style>