<template>
  <div class="card__info">
    <h2 class="card__title">{{ title }}</h2>
    <h3 class="card__description">{{ description }}</h3>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'CardInfoComponent',
  components: {
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
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.card__title {
  color: #FFF;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.card__description {
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
