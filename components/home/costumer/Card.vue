<script setup lang="ts">
defineProps({
    testimony: {
    type: Object,
    required: true,
  },
});
    
</script>
<template>
  <v-card height="100%" elevation="3" class="text-center pa-5">
      <v-icon size="70" color="grey-lighten-2" icon="mdi-format-quote-open" />
      <p class="text-body-1 mb-3">“{{ testimony.text }}”</p>
      <p class="text-caption font-weight-bold">{{ testimony.name }}</p>
      <p class="text-caption">{{ testimony.from }}</p>
  </v-card>
</template>
<style lang="scss">
</style>