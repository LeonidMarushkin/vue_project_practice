<template>
  <div class="main">
    <CardProductComponent v-for="( cartData, index ) in prodCartData" v-bind:key="index" :title="cartData.title"
      :description="cartData.description" :price="cartData.price" :imageSource="cartData.imageSource"
      :goodId="cartData.id" @clickMain="addToBasket(cartData.id)" />
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
    return {
      products: []
    }
  },
  props: {
  },
  mounted() {
    if (localStorage.getItem("products")?.length) {
      console.log('Действие не требуется');
    } else {
      localStorage.setItem('products', JSON.stringify(this.prodCartData));
    }
    if (localStorage.getItem("basket")?.length) {
      // console.log('Корзина не пустая');
      this.store.dispatch('updateData');
    }
  },
  setup() {
    const store = useStore();

    const prodCartData = computed(() => {
      return store.getters.getGoods
    })

    const addToBasket = (goodId) => {
      let paramObj = { prodId: 0, isProdCard: 0 };
      paramObj.prodId = goodId;
      console.log(`Добвалено в в корзину`, goodId);
      store.commit('addGoodInBasket', paramObj);
    }
    return {
      prodCartData,
      addToBasket,
      store
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
