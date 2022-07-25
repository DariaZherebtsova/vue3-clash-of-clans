<template>
  <div>
    <carousel :settings="settings">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <Card 
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            {{ item.descr }}
          </template>
          <template v-slot:footer>
            <Stats :info="item.info" />
          </template>
        </Card>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import Card from '@/components/UI/Card';
import Stats from '@/components/UI/Stats';
import items from '@/seeders/items';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Card,
    Stats,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        breakpoints: {
          300: {
            itemsToShow: 1,
          },
          770: {
            itemsToShow: 2,
          },
          1050: {
            itemsToShow: 3,
          },
        }
      },
    }
  },
}
</script>
