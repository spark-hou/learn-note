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
    <code>
      安装tensorflow2.3的cpu版本
      pip install tensorflow-cpu==2.3.0 -i https://pypi.douban.com/simple/

      二、Tensorflow GPU 版本安装
      GPU版本有两个依赖库cuda和cudnn，对于 tensorflow2.3来讲
      CUDA的版本需要是 10.1
      cudnn版本号需要不小于 7.6
      因为GPU版本这两个依赖库比较大，不推荐大家手动配置

      conda install cudatoolkit=10.1
      conda install cudnn=7.6.5
    </code>
    <a-typography>
      <a-typography-title>Introduction</a-typography-title>
      <a-typography-paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </a-typography-paragraph>
      <a-typography-paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to
        <a-typography-text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development.
        </a-typography-text>
      </a-typography-paragraph>
      <a-typography-title :level="2">Guidelines and Resources</a-typography-title>
      <a-typography-paragraph>
        We supply a series of design principles, practical patterns and high quality design resources
        (
        <a-typography-text code>Sketch</a-typography-text>
        and
        <a-typography-text code>Axure</a-typography-text>
        ), to help people create their product prototypes beautifully and efficiently.
      </a-typography-paragraph>

      <a-typography-paragraph>
        <ul>
          <li>
            <a-typography-link href="/docs/resources">Resource Download</a-typography-link>
          </li>
        </ul>
      </a-typography-paragraph>

      <a-typography-paragraph>
        Press
        <a-typography-text keyboard>Esc</a-typography-text>
        to exit...
      </a-typography-paragraph>

      <a-divider />

      <a-typography-title>介绍</a-typography-title>
      <a-typography-paragraph>
        蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
      </a-typography-paragraph>
      <a-typography-paragraph>
        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
        Ant Design。基于
        <a-typography-text mark>『确定』和『自然』</a-typography-text>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
        <a-typography-text strong>更好的用户体验</a-typography-text>
        。
      </a-typography-paragraph>
      <a-typography-title :level="2">设计资源</a-typography-title>
      <a-typography-paragraph>
        我们提供完善的设计原则、最佳实践和设计资源文件（
        <a-typography-text code>Sketch</a-typography-text>
        和
        <a-typography-text code>Axure</a-typography-text>
        ），来帮助业务快速设计出高质量的产品原型。
      </a-typography-paragraph>

      <a-typography-paragraph>
        <ul>
          <li>
            <a-typography-link href="/docs/resources-cn">设计资源</a-typography-link>
          </li>
        </ul>
      </a-typography-paragraph>

      <a-typography-paragraph>
        <blockquote>{{ blockContent }}</blockquote>
        <pre>{{ blockContent }}</pre>
      </a-typography-paragraph>

      <a-typography-paragraph>
        按
        <a-typography-text keyboard>Esc</a-typography-text>
        键退出阅读……
      </a-typography-paragraph>
    </a-typography>
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
