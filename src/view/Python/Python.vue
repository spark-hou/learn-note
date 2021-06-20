<template>
  <div class="Python">
    <a-anchor
      class="toc-affix"
    >
      <a-anchor-link
        v-for="(item,index) in anchorList"
        :key="index"
        :href="item.id"
        :title="item.title"
      />
    </a-anchor>
    <div class="g-container">
      <a-page-header
        id="Top"
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        @back="backUp"
      />
      <div class="g-block"></div>
      <div class="g-block"></div>
      <div
        id="PythonG6"
        data-name="脑图数"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router'
import {chart} from '@/plugin/golbalInterface'
import {dropChart} from '@/plugin/globalFun'
import {G6 as mainTree, dataTransform} from '@/plugin/mindTree';

const {Util} = mainTree;


export default defineComponent({
  name: 'Python',
  setup() {
    let title = 'Python笔记'
    let router = useRouter()
    let backUp = () => {
      router.back()
    }
    let anchorList = ref([
      {
        id: '#Top',
        title: 'Top'
      }
    ])
    const rawData = {
      label: 'Modeling Methods',
      id: '0',
      children: [
        {
          label: 'Classification',
          id: '0-1',
          children: [
            {
              label: 'Logistic regression',
              id: '0-1-1',
              children: [
                {
                  label: 'Logistic regression',
                  id: '0-1-1-1',
                },
                {
                  label: 'Logistic regression',
                  id: '0-1-1-2',
                },
              ]
            },
            {
              label: 'Linear discriminant analysis',
              id: '0-1-2',
            },
            {
              label: 'Rules',
              id: '0-1-3',
            },
            {
              label: 'Decision trees',
              id: '0-1-4',
            },
            {
              label: 'Naive Bayes',
              id: '0-1-5',
            },
            {
              label: `Support vectomachine`,
              id: '0-1-6',
            },
            {
              label: 'Probabilistic neural network',
              id: '0-1-7',
            },
            {
              label: `Support vectomachine`,
              id: '0-1-8',
            },
          ],
        },
      ],
    };
    let chart: chart = {
      value: null
    }
    const renderTree = () => {
      const container: any = document.getElementById('PythonG6');
      const width = container.scrollWidth;
      const height = (container.scrollHeight || 500) - 20;
      if (!chart.value) {
        chart.value = new mainTree.TreeGraph({
          container: container,
          width,
          height,
          fitView: true,
          fitViewPadding: [10, 20],
          layout: {
            type: 'mindmap',
            direction: 'H',
            getHeight: () => {
              return 16;
            },
            getWidth: (node: any) => {
              return node.level === 0 ?
                Util.getTextSize(node.label, 16)[0] + 12 :
                Util.getTextSize(node.label, 12)[0];
            },
            getVGap: () => {
              return 10;
            },
            getHGap: () => {
              return 60;
            },
            getSide: () => {
              return 'right';
            },
          },
          defaultEdge: {
            type: 'cubic-horizontal',
            style: {
              lineWidth: 2,
            },
          },
          minZoom: 0.5,
          modes: {
            default: ['drag-canvas', 'zoom-canvas', 'dice-mindmap'],
          },
        });
      }
      chart.value.data(dataTransform(rawData));
      chart.value.render();
    }
    onMounted(() => {
      renderTree()
    })
    onUnmounted(() => {
      dropChart(chart)
    })
    return {
      title,
      backUp,
      anchorList
    }
  }
});
</script>

<style lang="less" scoped>
  .Python {
    position: relative;


  }

</style>
<style lang="less">
  .Python {
    #PythonG6 {
      max-width: 1200px;
      min-width: 800px;
      height: 800px;
      border-radius: 5px;
      border: 1px solid gray;
    }
  }

</style>
