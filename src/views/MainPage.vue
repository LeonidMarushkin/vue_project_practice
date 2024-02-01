<template>
  <div class="main">
    <div class="main__header">
      <HeaderMainComponent />
    </div>
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
  // height: calc(100vh - 135px);
}

.main__header {
  padding-top: 54px;
  padding-bottom: 81px;
}
</style>
