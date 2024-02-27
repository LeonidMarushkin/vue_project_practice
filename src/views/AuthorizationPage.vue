<template>
    <AuthorizationFormComponent @clickOnForm="checkUser()" regShow buttonTxt='Вход' formHeaderTxt='ВХОД' />
</template>

<script>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthorizationFormComponent from '@/components/elements/AuthorizationFormComponent.vue';
export default {
    name: 'AuthorizationPage',
    components: {
        AuthorizationFormComponent
    },
    props: {
    },
    setup() {
        const router = useRouter();
        const checkUser = () => {
            localStorage.setItem('isLogged', JSON.stringify(true));
            router.push('/');
        }
        return {
            checkUser
        }
    }
}
</script>

<style lang="scss" scoped></style>
