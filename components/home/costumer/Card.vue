<script setup lang="ts">
defineProps({
    testimony: {
    type: Object,
    required: true,
  },
});
    
</script>
<template>
   <div>
    <h1> {{ testimony }} </h1>
   </div>

   <!-- “” -->
</template>
<style lang="scss">
</style>