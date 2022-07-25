<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr">
      <h1 class="title" style="color: #fff;">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <Stats :info="item.info" />
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items';
import Stats from '@/components/UI/Stats';

export default {
  components: {
    Stats,
  },
  data() {
    return {
      item: null
    }
  },

  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find( el => el.alias === alias);
    if (!item) {
      this.$router.push('/404')
    } else {
      this.item = item;
    }
  },
  
}
</script>
<style lang="scss">
.person-title {
  color: #fff;
}
.wrapper-person {
  text-align: center;

  .stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>