<template>
    <div class="test-class">
        <div>Default Page</div>
        <p v-if="!loading">{{ result.getUser }}</p>
        <div class="example-class">
            <p>Testing sass</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    // const text = ref({})
    const query = gql`
        query{
            getUser{
                id,
                name
            }
        }`

      const { result, loading } = useQuery(query);

      if (!loading) {
        console.log(result);
        
      }

</script>
<style lang="scss">
 .example-class{
    p{
        color: rgb(108, 108, 231);
    }
 }
</style>