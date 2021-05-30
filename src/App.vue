<template>
  <div
    class="App"
    :class="theme"
  >
    <div class="g-bgColor">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted} from 'vue';
import {handleAnchorClick} from '@/plugin/globalFun'

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      document.body.addEventListener('click', handleAnchorClick)
    })
    onUnmounted(() => {
      document.body.removeEventListener('click', handleAnchorClick)
    })
    return {}
  }
});
</script>

<style lang="less">
  .App {
  }
</style>
