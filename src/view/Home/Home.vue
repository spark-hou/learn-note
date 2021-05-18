/**
* @author  sparkHou
* @date 2021-04-14 17:00
* @Description:
*/
<template>
  <div
    class="g-container"
  >
    <router-link to="/python">python</router-link>
    adasdasdas
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    let ad = () => {
      console.log('aaaaa')
    }
    ad()
    return {}
  }
});
</script>

<style lang="less">
  .less {
    color: @color-red;
  }
</style>
