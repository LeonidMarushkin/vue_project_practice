<template>
  <div class="card">
    <img class="card__image" :src="imageSource" alt="image.png">
    <CardInfoComponent :title="title" :description="description" />
    <div class="card__footer">
      <CardPriceComponent :price="price" />
      <ButtonComponent />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import ButtonComponent from '../ui/ButtonComponent.vue';
import CardInfoComponent from './CardInfoComponent.vue';
import CardPriceComponent from './CardPriceComponent.vue';

export default {
  name: 'CardProductComponent',
  components: {
    ButtonComponent,
    CardInfoComponent,
    CardPriceComponent
  },
  props: {
    title: {
      type: String,
      default: 'Название блюда'
    },
    description: {
      type: String,
      default: 'Описание блюда'
    },
    price: {
      type: String,
      default: 'Цена товара'
    },
    imageSource: {
      type: String,
      default: 'default'
    },
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #D58C51;
  width: 312px;
  height: 552px;
  flex-shrink: 0;
}

.card__image {
  width: 270px;
  height: 271px;
  flex-shrink: 0;
}
</style>
