<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr">
      <h1 class="title" style="color: #fff;">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <div class="card-stats">
        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
          <div class="stat-value">{{stat.value}}</div>
          <div class="stat">{{stat.title}}</div>
        </div>
      </div>
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import items from '@/seeders/items';

export default {
  data() {
    return {
      item: null
    }
  },

  created() {
    const alias = this.$route.params.itemAlias;
    this.item = items.find( el => el.alias === alias);
  },
  
}
</script>
<style lang="scss">
.person-title {
  color: #fff;
}
.wrapper-person {
  text-align: center;

  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>