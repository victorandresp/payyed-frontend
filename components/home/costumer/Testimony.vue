<script setup lang="ts">
type TestimonialsType = {
    text: string
    name: string
    from: string
}
 const testimonials : TestimonialsType[] = [
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

 const orderTestimonials = (array: TestimonialsType[]) => {
    if (array.length % 2 !== 0) return []

    const matrix = [];
    for (let i = 0; i < array.length; i += 2) {
        matrix.push([array[i], array[i + 1]]);
    }

    return matrix as TestimonialsType[][]
 }
//  console.log();
 
</script>
<template>
    <div>
        <v-carousel width="1000">
            <template v-for="testimony in orderTestimonials(testimonials)" :key="testimony.name">
                <v-carousel-item width="400">
                    <div class="d-flex w-100">
                        <HomeCostumerCard :testimony="testimony" />
                    </div>
                </v-carousel-item>
            </template>
        </v-carousel>
    </div>
</template>
<style lang="scss">
</style>