<template lang="">
  <div class="card">
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">card-body</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
  }
}
</script>

<style lang="">
  
</style>