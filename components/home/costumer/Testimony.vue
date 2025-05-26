<script setup lang="ts">

 const testimonials = [
    {
        text: `It's a real good idea to manage your money by payyed. The rates are fair and you can carry out the transactions without worrying!`,
        name: "John Smith", 
        from: "CEO at FutureTech Innovations"
    },
    {
        text: `Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.`,
        name: "Emily Johnson",
        from: "Marketing Manager at Stellar Enterprises"
    },
    {
        text: `I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.`,
        name: "Michael Brown",
        from: "Senior Developer at QuantumWorks Inc."
    },
    {
        text: `I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.`,
        name: "Sarah Williams",
        from: "Chief Financial Officer at Horizon Group"
    },
    {
        text: `Fast easy to use transfers to a different currency. Much better value that the banks.`,
        name: "David Miller",
        from: "Software Engineer at Nebula Systems"
    },
    {
        text: `Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.`,
        name: "Jessica Davis",
        from: "Data Analyst at Pioneer Analytics" 
    },
 ];

</script>
<template>
    <div class="pb-15 pt-5">
        <div class="text-center mb-7">
            <h4 class="text-h4 font-weight-bold mb-3">What people are saying about Payyed</h4>
            <p class="text-subtitle-1">A payments experience people love to talk about.</p>
        </div>
        <HomeCostumerCarousel :testimonials="testimonials"/>
    </div>
</template>