<template lang="">
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img class="card-img" :src="imgUrl" alt="title">
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot name="body"></slot>

      <router-link
        v-if="link"
        :to="link"
        class="link"
        style="display: block; margin: 16px;"
      >See more</router-link>
    </div>
      <slot name="footer" ></slot>
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
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    }
  }
}
</script>

<style lang="">
  
</style>