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
import G6 from '@antv/g6';

export default defineComponent({
  name: 'Python',
  setup() {
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
      // let centerX: any = 0;
      let data = {
        id: "Modeling Methods",
        children: {
          id: 'test'
        }
      }
      // graph.node(function (node) {
      //   if (node.id === 'Modeling Methods') {
      //     centerX = node.x;
      //   }
      //
      //   return {
      //     label: node.id,
      //     labelCfg: {
      //       position:
      //       // @ts-ignore
      //           node.children && node.children.length > 0 ? 'right' : node.x > centerX ? 'right' : 'left', offset: 5,
      //     },
      //   };
      // });

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
    // let setChart = () => {
    //   const container = document.getElementById('container');
    //   const width = container.scrollWidth;
    //   const height = container.scrollHeight || 500;
    //   const graph = new G6.TreeGraph({
    //     container: 'container',
    //     width,
    //     height,
    //     modes: {
    //       default: [
    //         {
    //           type: 'collapse-expand',
    //           onChange: function onChange(item, collapsed) {
    //             const data = item.get('model');
    //             data.collapsed = collapsed;
    //             return true;
    //           },
    //         },
    //         'drag-canvas',
    //         'zoom-canvas',
    //       ],
    //     },
    //     defaultNode: {
    //       size: 26,
    //       anchorPoints: [
    //         [0, 0.5],
    //         [1, 0.5],
    //       ],
    //     },
    //     defaultEdge: {
    //       type: 'cubic-horizontal',
    //     },
    //     layout: {
    //       type: 'mindmap',
    //       direction: 'H',
    //       getHeight: () => {
    //         return 16;
    //       },
    //       getWidth: () => {
    //         return 16;
    //       },
    //       getVGap: () => {
    //         return 10;
    //       },
    //       getHGap: () => {
    //         return 100;
    //       },
    //       getSide: () => {
    //         return 'right';
    //       },
    //     },
    //   });
    //
    //   let centerX = 0;
    //   graph.node(function (node) {
    //     if (node.id === 'Modeling Methods') {
    //       centerX = node.x;
    //     }
    //
    //     return {
    //       label: node.id,
    //       labelCfg: {
    //         position:
    //             node.children && node.children.length > 0
    //               ? 'right'
    //               : node.x > centerX
    //                 ? 'right'
    //                 : 'left',
    //         offset: 5,
    //       },
    //     };
    //   });
    //
    //   graph.data(data);
    //   graph.render();
    //   graph.fitView();
    //
    //   if (typeof window !== 'undefined')
    //     window.onresize = () => {
    //       if (!graph || graph.get('destroyed')) return;
    //       if (!container || !container.scrollWidth || !container.scrollHeight) return;
    //       graph.changeSize(container.scrollWidth, container.scrollHeight);
    //     };
    // }
    return {}
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
      width: 400px;
      height: 400px;
    }
  }

</style>
