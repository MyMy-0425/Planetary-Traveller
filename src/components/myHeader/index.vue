<template>
  <div>
    <shortcut></shortcut>
    <headers></headers>
  </div>
</template>

<script>
import shortcut from './shortcut'
import headers from './headers'


export default {
    name:'myHeader',
    components:{
      shortcut,headers
    }
}
</script>

<style scoped>
</style>