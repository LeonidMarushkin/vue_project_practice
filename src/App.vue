<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {
  },
  props: {
  },
  setup() {
    const router = useRouter();
    onBeforeMount(() => {
      if (!localStorage.getItem('isLogged')) {
        localStorage.setItem('isLogged', JSON.stringify(false));
      }
      if (!JSON.parse(localStorage.getItem('isLogged'))) {
        router.push('/authorization');
      }
    })
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
