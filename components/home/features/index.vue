<script setup lang="ts">
const features = [
    {
        icon: 'mdi-hand',
        title: 'Easy to use',
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        link: '/easy-to-use'
    },
    {
        icon: 'mdi-arrow-top-right',
        title: 'Faster Payments',
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        link: '/easy-to-use'
    },
    {
        icon: 'mdi-currency-usd',
        title: 'Lower Fees',
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        link: '/easy-to-use'
    },
    {
        icon: 'mdi-lock',
        title: '100% secure',
        description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        link: '/easy-to-use'
    },
]
</script>

<template>
    <v-container class="py-14">
        <v-row>
            <v-col class="text-center" cols="12">
                <h2 class="text-h4 font-weight-bold">Why should you choose Payyed?</h2>
                <p class="text-h6 font-weight-thin">Here’s Top 4 reasons why using a Payyed account for manage your money.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row justify="center">
                    <template v-for="feature in features" :key="feature.link">
                        <v-col cols="2">
                            <HomeFeaturesCard :feature="feature"/>
                        </v-col>
                    </template>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    
  
</template>
