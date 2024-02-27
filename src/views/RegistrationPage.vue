<template>
    <AuthorizationFormComponent buttonTxt='Зарегестрироваться' formHeaderTxt='РЕГИСТРАЦИЯ' logShow/>
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
}
</script>

<style lang="scss" scoped></style>
