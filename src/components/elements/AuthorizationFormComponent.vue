<template>
    <div class="main__auth">
        <form @submit.prevent class="auth-form" name="form-auth" method="*">
            <div v-if="regShow">
                <router-link to="/registration">
                    <a class="auth-form__link" href="">Зарегистрироваться</a>
                </router-link>
            </div>
            <div v-if="logShow">
                <router-link to="/authorization">
                    <a class="auth-form__link" href="">Войти</a>
                </router-link>
            </div>
            <h1 class="auth-form__header">{{ formHeaderTxt }}</h1>
            <div class="auth-form__info">
                <input class="auth-form__info-field" v-model="loginValue" type="login" name="login" autocomplete="off"
                    required placeholder="Логин">
                <input class="auth-form__info-field" v-model="passValue" type="password" name="password" autocomlete="off"
                    required placeholder="Пароль">
            </div>
            <div v-if="regShow" class="button">
                <ButtonComponent @click="checkUser()" textShow isBasketFooter :buttonText=buttonTxt />
            </div>
            <div v-if="logShow" class="button">
                <ButtonComponent @click="addUser()" textShow isBasketFooter :buttonText=buttonTxt />
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
export default {
    name: 'AuthorizationFormComponent',
    components: {
        ButtonComponent
    },
    props: {
        buttonTxt: {
            type: String,
            default: ''
        },
        regShow: {
            type: Boolean,
            default: false
        },
        logShow: {
            type: Boolean,
            default: false
        },
        formHeaderTxt: {
            type: String,
            default: ''
        },
    },
    setup() {
        const loginValue = ref('');
        const passValue = ref('');
        const router = useRouter();
        const addUser = () => {
            //валидация
            // console.log('log', loginValue);
            // console.log('pass', passValue);
            const users = JSON.parse(localStorage.getItem('users'));
            if (!(loginValue.value == '') && !(passValue.value == '')) {
                users.push({
                    login: loginValue.value,
                    pass: passValue.value
                });
                localStorage.users = JSON.stringify(users);
            }
            // localStorage.setItem('isLogged', JSON.stringify(true));
            // router.push('/');
        }
        const checkUser = () => {
            //валидация
            // console.log('log', loginValue);
            // console.log('pass', passValue);
            const users = JSON.parse(localStorage.getItem('users'));
            const userFinded = users.find(elem => {
                return elem.login == loginValue.value
            })
            if (!userFinded) {
                alert('Такой пользователь не зарегистрирован!');
            } else {
                if (userFinded.pass == passValue.value) {
                    localStorage.isLogged = JSON.stringify(true);
                    router.push('/');
                } else {
                    alert('Введен неверный пароль!');
                }
            }
        }
        return {
            checkUser,
            addUser,
            loginValue,
            passValue
        }
    }
}
</script>

<style lang="scss" scoped>
.main__auth {
    background-image: url("../../assets/img/background.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    padding-top: 220px;
    padding-bottom: 350px;
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
    margin-bottom: 60px;
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

.auth-form {
    width: 460px;
    padding: 70px 0;
    border: 3px solid green;
    text-align: center;
    background: rgb(255, 255, 255);
}

.auth-form__link {
    padding-left: 315px;
}
</style>
