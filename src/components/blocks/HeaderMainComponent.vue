<template>
  <div class="header">
    <div v-if="textShow">
      <h1 class="header__title">наша продукция</h1>
    </div>
    <div class="header__cart">
      <div class="header__text">
        <span>{{ basketCount.length }} товара</span>
        <span>на сумму {{ basketCount.reduce((a, b) => a + b.price, 0) }} ₽</span>
      </div>
      <router-link to="/basket">
        <ButtonCartComponent />
      </router-link>
      <ButtonComponent @click="logoff()" textShow isBasketFooter buttonText='Выход' />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { useStore } from 'vuex';
import ButtonCartComponent from '../ui/ButtonCartComponent.vue';
import ButtonComponent from '../ui/ButtonComponent.vue';
import { computed } from 'vue';

export default {
  name: 'HeaderMainComponent',

  components: {
    ButtonCartComponent,
    ButtonComponent
  },

  props: {
    textShow: {
      type: Boolean,
      default: false
    },
  },

  methods: {
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const basketCount = computed(() => {
      return store.getters.getBasketGoods
    })

    const logoff = () => {
      localStorage.setItem('isLogged', JSON.stringify(false));
      router.push('/authorization');
    }

    // const basketSum = computed(()=> {

    // })
    return {
      basketCount,
      route,
      logoff
      // basketSum
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.header__title {
  color: #FFF;
  font-family: Montserrat;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.header__text {
  color: #FFF;
  text-align: right;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.header__cart {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}
</style>
