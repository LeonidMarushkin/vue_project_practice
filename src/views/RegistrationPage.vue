<template>
    <AuthorizationFormComponent @clickOnForm="addUser()" buttonTxt='Зарегестрироваться' formHeaderTxt='РЕГИСТРАЦИЯ' logShow/>
</template>

<script>
import { ref } from 'vue'
import AuthorizationFormComponent from '@/components/elements/AuthorizationFormComponent.vue';
export default {
    name: 'RegistrationPage',
    components: {
        AuthorizationFormComponent
    },
    props: {
    },
    setup() {
        const isAuth = ref(true);
        return {
            isAuth
        }
    },
    methods: {
        addUser() {
            // if (localStorage.getItem("users")?.length) {
            //     const users = JSON.parse(localStorage.getItem("users"));
            //     users.forEach(user => {
            //         if (user.) {

            //         }
            //     });
            //     console.log('Действие не требуется');
            // } else {
            //     localStorage.setItem('products', JSON.stringify(this.prodCartData));
            // }
        }
    },
}
</script>

<style lang="scss" scoped></style>
