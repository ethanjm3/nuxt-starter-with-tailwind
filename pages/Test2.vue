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
<div>THis is Test 2

{{tabledata[0].Number}}
</div>
</template>