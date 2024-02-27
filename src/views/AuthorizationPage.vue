<template>
    <AuthorizationFormComponent regShow buttonTxt='Вход' formHeaderTxt='ВХОД' />
</template>

<script>
// import { ref } from 'vue'

import AuthorizationFormComponent from '@/components/elements/AuthorizationFormComponent.vue';
export default {
    name: 'AuthorizationPage',
    components: {
        AuthorizationFormComponent
    },
    props: {
    },
    setup() {

    }
}
</script>

<style lang="scss" scoped></style>
