<template>
  <div class="main">
    <CardProductComponent v-for="( cartData, index ) in prodCartData" v-bind:key="index" :title="cartData.title"
      :description="cartData.description" :price="cartData.price" :imageSource="cartData.imageSource" />
  </div>
</template>

<script>
// import { ref } from 'vue'
import { computed } from 'vue';
import CardProductComponent from '../elements/CardProductComponent.vue';
import { useStore } from 'vuex';

export default {
  name: 'MainComponent',
  components: {
    CardProductComponent
  },
  data() {

  },
  props: {
  },
  setup() {
    const store = useStore();

    const prodCartData = computed(() => {
      return store.getters.getGoods
    })

    return {
      prodCartData
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 312px);
  // grid-template-rows: 50% 50%;
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 35px;
}
</style>
