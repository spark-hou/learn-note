/**
* @author  sparkHou
* @date 2021-04-14 17:00
* @Description:
*/
<template>
  <div
    class="home g-container"
  >
    <div>
      主题色：
      <input
        type="color"
        v-model="color"
      />
    </div>

    <div class="title">
      spark的在线笔记
    </div>
    <router-link
      class="g-cursor link"
      to="/python"
    >python笔记
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch, onMounted} from 'vue';
import {throttle} from '@/plugin/globalFun'

export default defineComponent({
  name: 'Home',
  setup() {
    const changeTheme = throttle((primaryColor: string) => {
      (window as any).less.modifyVars({
        "@primary-color": primaryColor
      }).then(() => {
        //把颜色设置写入stroage
        localStorage.setItem('color', primaryColor)
      })

    })
    let color = ref('#992777')
    watch(color, (val: string) => {
      changeTheme(val)
    })
    //进入时获取主题色
    onMounted(() => {
      //读取主题颜色
      if (localStorage.getItem('color')) {
        color.value = localStorage.getItem('color') || '#992777'
      }

    })
    return {color}
  }
});
</script>

<style lang="less">
  .home {
    position: relative;
    text-align: center;
    padding-top: 20px;

    .title {
      font-size: 30px;
      font-weight: bolder;
      padding: 20px;
    }

    .link {
      font-size: 20px;
      border-bottom: 1px solid gray;
      padding: 10px;
    }
  }
</style>
