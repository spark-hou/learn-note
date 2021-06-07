<template>
  <div class="Python">
    <a-anchor
      class="toc-affix"
    >
      <a-anchor-link
        href="#haha"
        title="Basic demo"
      />
    </a-anchor>
    <div class="g-container">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        @back="backUp"
      />
      <div class="g-block"></div>
      <div class="g-block"></div>
      <div id="g6"></div>
      <div style="height: 4000px">

      </div>
      i am python
      <a-button id="haha">
        hahahah
      </a-button>
      <div style="height: 4000px">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import {useRouter} from 'vue-router'
import G6 from '@antv/g6';

export default defineComponent({
  name: 'Python',
  setup() {
    let title = 'Python笔记'
    let router = useRouter()
    let backUp = () => {
      router.back()
    }
    //知识图谱树
    onMounted(() => {
      const container: any = document.getElementById('g6');
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      const graph = new G6.TreeGraph({
        container: 'g6',
        width,
        height,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item: any, collapsed) {
                const data = item.get('model');
                data.collapsed = collapsed;
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: 'cubic-horizontal',
        },
        layout: {
          type: 'mindmap',
          direction: 'H',
          getHeight: () => {
            return 16;
          },
          getWidth: () => {
            return 16;
          },
          getVGap: () => {
            return 10;
          },
          getHGap: () => {
            return 100;
          },
          getSide: () => {
            return 'right';
          },
        },
      });
      let centerX: any = 0;
      let data = {
        id: "Modeling Methods",
        children: [
          {id: 'test1'},
          {id: 'test2'},
          {id: 'test3'},
        ]
      }

      graph.node(function (node) {
        console.log(node, '====')
        if (node.id === 'Modeling Methods') {
          centerX = node.x;
        }
        return {
          label: node.id,
          labelCfg: {
            position:
            // @ts-ignore
                node.children && node.children.length > 0 ? 'right' : node.x > centerX ? 'right' : 'left', offset: 5,
          },
        };
      });

      graph.data(data);
      graph.render();
      graph.fitView();

      // if (typeof window !== 'undefined')
      //   window.onresize = () => {
      //     if (!graph || graph.get('destroyed')) return;
      //     if (!container || !container.scrollWidth || !container.scrollHeight) return;
      //     graph.changeSize(container.scrollWidth, container.scrollHeight);
      //   };
    })
    return {
      title,
      backUp
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
    #g6 {
      max-width: 1200px;
      min-width: 800px;
      height: 800px;
      border: 1px solid black;
    }
  }

</style>
