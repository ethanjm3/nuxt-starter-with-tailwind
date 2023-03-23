<script setup>

const client = useSupabaseClient()

const { data: tabledata } = await useAsyncData('testnum2', async () => {
  const { data } = await client.from('test').select('*')
  return data})

</script>
<template>
<div>



Test
<v-divider class="border-opacity-50"></v-divider>
<v-btn class="ma-2">Button</v-btn>

<!--
{{tabledata}}
-->
<li v-for="item in tabledata" class="">
  {{ item.Number }} : {{item.primary_key}} : {{item.test_data}}
</li>
</div>
</template>
