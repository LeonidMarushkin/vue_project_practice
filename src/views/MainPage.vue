<template>
  <div class="main">
    <HeaderMainComponent />
    <MainComponent />
  </div>
</template>

<script>
// import { ref } from 'vue'
import HeaderMainComponent from '@/components/blocks/HeaderMainComponent.vue';
import MainComponent from '@/components/blocks/MainComponent.vue';

export default {
  name: 'MainPage',
  components: {
    HeaderMainComponent,
    MainComponent
  },
  props: {
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #161516;
}
</style>
