<script setup lang="ts">
const menuItems = ref([
    { name: 'Send'},
    { name: 'Recieve'},
    { name: 'About Us'},
    { name: 'Fees'},
    { name: 'Help'},
])

</script>

<template>
    <v-app-bar height="88">
        <v-row>
            <v-spacer/>
            <v-col cols="auto">
                <NuxtLink to="/">
                    <v-img width="auto" src="/assets/images/payyed-logo.png"/>
                </NuxtLink>
            </v-col>
            <v-col cols="6">
                <template v-for="item in menuItems" :key="item.name">
                    <v-btn text>{{ item.name }}</v-btn>
                </template>
            </v-col>
            <v-col cols="2">
                <v-btn to="/auth/login">login</v-btn>
                <v-btn color="primary" variant="flat">sign up</v-btn>
            </v-col>
            <v-spacer/>
        </v-row>
    </v-app-bar>
</template>