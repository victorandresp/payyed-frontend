
<script lang="ts" setup>
type TestimonialsType = {
    text: string
    name: string
    from: string
}

defineProps<{ testimonials: TestimonialsType[] }>();


const orderTestimonials = (array: TestimonialsType[]) => {
    if (array.length % 2 !== 0) return []

    const matrix = [];
    for (let i = 0; i < array.length; i += 2) {
        matrix.push([array[i], array[i + 1]]);
    }
    
    return matrix as TestimonialsType[][]
 }

</script>
<template>
  <div>
    <v-carousel height="auto" class="w-75 mx-auto" hide-delimiters>
            <template v-for="(testimony, i) in orderTestimonials(testimonials)" :key="i">
                <v-carousel-item>
                    <v-row class="ma-0" justify="center">
                       <v-col cols="5">
                           <HomeCostumerCard v-if="testimony[0]" class="mr-5" :testimony="testimony[0]" />
                        </v-col>
                        <v-col cols="5">
                           <HomeCostumerCard v-if="testimony[1]" :testimony="testimony[1]" />
                       </v-col>
                    </v-row>
                </v-carousel-item>
            </template>    
        </v-carousel>
  </div>
</template>