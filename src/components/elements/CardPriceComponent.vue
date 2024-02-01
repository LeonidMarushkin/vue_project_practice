<template>
  <div class="card__price">
    <span>{{ price }}</span>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'CardPriceComponent',
  components: {
  },
  props: {
    price: {
      type: String,
      default: 'Цена товара'
    },
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.card__price {
  color: #FFF;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
