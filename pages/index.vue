<script setup>
import {createClient} from '@supabase/supabase-js'
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;
const supabase = createClient(url,key)
var tabledata = ref()
let { data: test, error } = await supabase
  .from('test')
  .select('*')
tabledata = test
</script>
<template>
<div>


<!--
  <li v-for= 'items in tabledata'>
    {{items.test_data}} {{items.primary_key}} {{items.Number}}
  </li>
-->
  <v-btn>
  Button
</v-btn>
</div>
</template>
