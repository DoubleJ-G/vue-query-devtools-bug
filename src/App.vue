<template>
<div>
<h1>Fetch Todos</h1>
<div>Loading</div>
<div>
  <pre> {{ todos }}</pre>
</div>   
</div>
</template>

<script setup lang='ts'>
import { useQuery } from 'vue-query'

const { data: todos } = useQuery(['todos'], () => fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()))

</script>