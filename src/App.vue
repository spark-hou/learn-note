<template>
  <div class="App" :class="theme">
    <div class="g-bgColor">

      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'App',
    setup() {
      return {}
    }
  });
</script>

<style lang="less">

  .App {
  }
</style>
