<template>
    <div class="main__auth">
        <form class="auth-form" name="form-auth" method="*">
            <a href="">Зарегистрироваться</a>
            <h1 class="auth-form__header">ВХОД</h1>
            <div class="auth-form__info">
                <div class="auth-form__info-wrapper">
                    <input class="auth-form__info-field" type="login" name="login" autocomplete="off" required
                        placeholder="Логин">
                </div>
                <div class="auth-form__info-wrapper">
                    <input class="auth-form__info-field" type="password" name="password" autocomlete="off" required
                        placeholder="Пароль">
                </div>
            </div>
            <div class="">
                <input type="checkbox" class="auth-form__checkbox password-toggler">
            </div>
            <ButtonComponent textShow isBasketFooter buttonText='Выход' />
        </form>
    </div>
</template>

<script>
// import { ref } from 'vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
export default {
    name: 'AuthorizationFormComponent',
    components: {
        ButtonComponent
    },
    props: {
    },
    setup() {
    }
}
</script>

<style lang="scss" scoped>
.main__auth {
    background-image: url("../../assets/img/background.jpg");
    background-size: auto;
    padding-bottom: 1px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    padding-top: 220px
}

.auth-form__header {
    color: rgb(22, 21, 22);
    font-family: Montserrat;
    font-size: 45px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0%;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 36px;
}

.auth-form__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.auth-form__info-field {
    box-sizing: border-box;
    border: 1px solid rgb(213, 140, 81);
    border-radius: 61px;
    color: rgb(22, 21, 22);
    font-family: Montserrat;
    font-size: 35px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
}

.auth-form__info-wrapper {}

.auth-form {
    width: 460px;
    padding: 70px 0;
    border: 3px solid green;
    text-align: center;
    background: rgb(255, 255, 255);
}

</style>
