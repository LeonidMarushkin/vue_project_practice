<template>
    <div class="main">
        <div class="main__header">
            <router-link to="/">
                <ButtonComponent fontawesomeIcon='fa-solid fa-arrow-left fa-2xs' isBasketCard iconShow />
            </router-link>
            <h1 class="main__header-info">Корзина с выбранными товарами</h1>
            <ButtonComponent @click="logoff()" textShow isBasketFooter buttonText='Выход' />
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '../ui/ButtonComponent.vue';
export default {
    name: 'HeaderBasketComponent',
    components: {
        ButtonComponent
    },
    props: {
    },
    setup() {
        const router = useRouter();
        const logoff = () => {
            localStorage.setItem('isLogged', JSON.stringify(false));
            router.push('/authorization');
        }
        return {
            logoff
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.main__header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 74px;
}

.main__header-info {
    color: #FFF;
    font-family: Montserrat;
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}
</style>
