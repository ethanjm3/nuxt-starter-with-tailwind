<script setup>

const client = useSupabaseClient()

const { data: testing } = await useAsyncData('testosterone', async () => {
  const { data } = await client.from('test').select('*')
  return data
})

</script>

<template>
<div>This is Test 2

{{testing[0].Number}}

</div>
</template>