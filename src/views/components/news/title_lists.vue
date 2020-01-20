<template>
  <div>hello world {{ mes }}</div>
</template>
<script>
export default {
  props: {
    mes: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
    .dv{background: #f00;}
</style>
