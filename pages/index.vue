<template>
    <div>
        <div>Default Page</div>
        <p v-if="!loading">{{ result.getUser }}</p>
    </div>
</template>
<script setup lang="ts">
    const text = ref({})
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