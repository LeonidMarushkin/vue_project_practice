<template>
  <div class="header">
    <h1 class="header__title">наша продукция</h1>
    <basketIconComponent />
  </div>
</template>

<script>
// import { ref } from 'vue'
import basketIconComponent from '../icons/basketIconComponent.vue';

export default {
  name: 'HeaderMainComponent',
  components: {
    basketIconComponent
  },
  props: {
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.header__title {
  color: #FFF;
  font-family: Montserrat;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>
