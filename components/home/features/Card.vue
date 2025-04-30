<script setup lang="ts">
defineProps({
    feature: {
    type: Object,
    required: true,
  },
});
</script>

<template>
    <v-card elevation="0">
        <v-card-title primary-title>
            <v-icon class="mb-3" :icon="feature.icon" color="primary"/>
            <p class="font-weight-bold">{{ feature.title }}</p>
        </v-card-title>
        <v-card-text  primary-title>
            {{ feature.description }}
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" append-icon="mdi-chevron-right" >
                Learn more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
