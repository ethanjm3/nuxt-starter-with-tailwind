<script>
import {createClient} from '@supabase/supabase-js'
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;
const supabase = createClient(url,key)
  
let { data: test, error } = await supabase
  .from('tease')
  .select('id,testdata')
console.log(test)

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>