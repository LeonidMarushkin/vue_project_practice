<template>
    <div class="main">
        <div class="main__header">
            <HeaderBasketComponent />
        </div>
        <div class="main__goods">
            <MainBasketComponent />
        </div>
        <div>
            <hr class="separator">
            <div class="main__footer">
                <FooterBasketComponent :price="basketCount.reduce((a, b) => a + b.price, 0)" />
            </div>
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
import HeaderBasketComponent from '@/components/blocks/HeaderBasketComponent.vue';
import MainBasketComponent from '@/components/blocks/MainBasketComponent.vue';
import FooterBasketComponent from '@/components/blocks/FooterBasketComponent.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    name: 'BasketPage',
    components: {
        HeaderBasketComponent,
        MainBasketComponent,
        FooterBasketComponent
    },
    props: {
    },
    setup() {
        const store = useStore();

        const basketCount = computed(() => {
            return store.getters.getBasketGoods
        })
        return {
            basketCount,
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    // height: 100%;
    // width: 100%;
    // overflow: hidden;
}

.main__header {
    background: #161516;
    height: 0;
    inset: 0;
    // width: 100vh;
    position: fixed;
    padding-top: 54px;
    padding-bottom: 81px;
    z-index: 0;
}

.main__footer {
    height: 50px;
    width: 100%;
}

.main__goods {
    margin-top: 130px;
    height: calc(100% - 240px);
}

.separator {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid rgb(213, 140, 81);
}
</style>
