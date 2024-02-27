<template>
    <div class="head">
        <router-link to="/">
            <ButtonComponent fontawesomeIcon='fa-solid fa-arrow-left fa-2xs' isBasketCard iconShow />
        </router-link>
        <HeaderMainComponent />
    </div>
    <div class="body">
        <img class="good__image" :src="good.imageSource" alt="image.png">
        <div class="info">
            <h1 class="info__title">{{ good.title }}</h1>
            <p class="info__descr">{{ good.description }}</p>
            <div class="info__footer">
                <span class="price">{{ good.price }} ₽</span>
                <ButtonComponent @click="saveToLocalStorage(); changeLabel()" isGoodFooter textShow
                    :buttonText="buttonLabel" />
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import HeaderMainComponent from '@/components/blocks/HeaderMainComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
export default {
    name: 'GoodPage',
    components: {
        HeaderMainComponent,
        ButtonComponent
    },
    props: {
    },
    data() {

    },
    methods: {
        saveToLocalStorage() {
            let paramObj = { prodId: 0, isProdCard: 1 };
            const prodList = JSON.parse(localStorage.getItem("products"))
            // console.log(prodList[1]);
            prodList.forEach(prod => {
                // console.log(this.good.id);
                if (prod.id == this.good.id) {
                    console.log(prod.addedToBasket);
                    if (prod.addedToBasket == 1) {
                        // prod.addedToBasket = 0;
                        console.log('Удалить!');
                        this.store.commit('setStatusAdded', prod.id);
                        this.store.commit('removeFromCardBasket', prod.id);
                        console.log(prod);
                    } else {
                        // prod.addedToBasket = 1;
                        paramObj.prodId = prod.id;
                        console.log('Добавить!');
                        this.store.commit('setStatusAdded', prod.id);
                        this.store.commit('addGoodInBasket', paramObj);
                        console.log(prod);
                    }
                }
            });
            // localStorage.setItem('products', JSON.stringify(prodList));
        },
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const buttonLabel = ref('В корзину');
        // const isInBasket = ref(false);
        const changeLabel = () => {
            if (buttonLabel.value == 'Удалить') {
                buttonLabel.value = 'В корзину'
            } else {
                buttonLabel.value = 'Удалить';
            }
        };
        return {
            good: computed(() => store.getters.getGoodById(route.params.id)),
            store,
            route,
            buttonLabel,
            changeLabel,
            // isInBasket
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    background: #161516;
    height: 0;
    inset: 0;
    position: fixed;
    padding-top: 54px;
    padding-bottom: 81px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 70px 70px;
}

.body {
    margin-top: 150px;
    height: calc(100% - 240px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.good__image {
    width: 500px;
}

.info__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 34px;
}

.info__title {
    color: rgb(213, 140, 81);
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 500;
    line-height: 37px;
    letter-spacing: 0%;
    text-align: left;
    max-width: 414px;
}

.info__descr {
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 21px;
    max-width: 528px;
    ;
}

.price {
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 23px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
}
</style>
