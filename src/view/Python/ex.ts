// const colorArr = [
//   '#5B8FF9',
//   '#5AD8A6',
//   '#5D7092',
//   '#F6BD16',
//   '#6F5EF9',
//   '#6DC8EC',
//   '#D3EEF9',
//   '#DECFEA',
//   '#FFE0C7',
//   '#1E9493',
//   '#BBDEDE',
//   '#FF99C3',
//   '#FFE0ED',
//   '#CDDDFD',
//   '#CDF3E4',
//   '#CED4DE',
//   '#FCEBB9',
//   '#D3CEFD',
//   '#945FB9',
//   '#FF9845',
// ];
//
// const rawData = {
//   label: 'Modeling Methods',
//   id: '0',
//   children: [{
//     label: 'Classification',
//     id: '0-1',
//     color: '#5AD8A6',
//     children: [{
//       label: 'Logistic regression',
//       id: '0-1-1',
//     },
//     {
//       label: 'Linear discriminant analysis',
//       id: '0-1-2',
//     },
//     {
//       label: 'Rules',
//       id: '0-1-3',
//     },
//     {
//       label: 'Decision trees',
//       id: '0-1-4',
//     },
//     {
//       label: 'Naive Bayes',
//       id: '0-1-5',
//     },
//     {
//       label: `Support vecto
//
//           sd
//           sd
//           sd
//           sd
//           sd
//           sd
//           machine`,
//       id: '0-1-6',
//     },
//     {
//       label: 'Probabilistic neural network',
//       id: '0-1-7',
//     },
//     {
//       label: `Support vecto
//
//           sd
//           sd
//           sd
//           sd
//           sd
//           sd
//           machine`,
//       id: '0-1-8',
//     },
//     ],
//   },
//   {
//     label: 'Consensus',
//     id: '0-2',
//     color: '#F6BD16',
//     children: [{
//       label: 'Models diversity',
//       id: '0-2-1',
//       children: [{
//         label: 'Different initializations',
//         id: '0-2-1-1',
//       },
//       {
//         label: 'Different parameter choices',
//         id: '0-2-1-2',
//       },
//       {
//         label: 'Different architectures',
//         id: '0-2-1-3',
//       },
//       {
//         label: 'Different modeling methods',
//         id: '0-2-1-4',
//       },
//       {
//         label: 'Different training sets',
//         id: '0-2-1-5',
//       },
//       {
//         label: 'Different feature sets',
//         id: '0-2-1-6',
//       },
//       ],
//     },
//     {
//       label: 'Methods',
//       id: '0-2-2',
//       children: [{
//         label: 'Classifier selection',
//         id: '0-2-2-1',
//       },
//       {
//         label: 'Classifier fusion',
//         id: '0-2-2-2',
//       },
//       ],
//     },
//     {
//       label: 'Common',
//       id: '0-2-3',
//       children: [{
//         label: 'Bagging',
//         id: '0-2-3-1',
//       },
//       {
//         label: 'Boosting',
//         id: '0-2-3-2',
//       },
//       {
//         label: 'AdaBoost',
//         id: '0-2-3-3',
//       },
//       ],
//     },
//     ],
//   },
//   {
//     label: 'Regression',
//     id: '0-3',
//     color: '#269A99',
//     children: [{
//       label: 'Multiple linear regression',
//       id: '0-3-1',
//     },
//     {
//       label: 'Partial least squares',
//       id: '0-3-2',
//     },
//     {
//       label: 'Multi-layer feedforward neural network',
//       id: '0-3-3',
//     },
//     {
//       label: 'General regression neural network',
//       id: '0-3-4',
//     },
//     {
//       label: 'Support vector regression',
//       id: '0-3-5',
//     },
//     ],
//   },
//   ],
// };
//
//
// const dataTransform = (data) => {
//   const changeData = (d, level = 0, color) => {
//     const data = {
//       ...d,
//     };
//     switch (level) {
//     case 0:
//       data.type = 'dice-mind-map-root';
//       break;
//     case 1:
//       data.type = 'dice-mind-map-sub';
//       break;
//     default:
//       data.type = 'dice-mind-map-leaf';
//       break;
//     }
//
//     data.hover = false;
//
//     if (color) {
//       data.color = color;
//     }
//
//     if (level === 1 && !d.direction) {
//       if (!d.direction) {
//         data.direction = d.id.charCodeAt(d.id.length - 1) % 2 === 0 ? 'right' : 'left';
//       }
//     }
//
//     if (d.children) {
//       data.children = d.children.map((child) => changeData(child, level + 1, data.color));
//     }
//     return data;
//   };
//   return changeData(data);
// };
//
// const container = document.getElementById('container');
//
// const width = container.scrollWidth;
// const height = (container.scrollHeight || 500) - 20;
// const tree = new G6.TreeGraph({
//   container: 'container',
//   width,
//   height,
//   fitView: true,
//   fitViewPadding: [10, 20],
//   layout: {
//     type: 'mindmap',
//     direction: 'H',
//     getHeight: () => {
//       return 16;
//     },
//     getWidth: (node) => {
//       return node.level === 0 ?
//         Util.getTextSize(node.label, 16)[0] + 12 :
//         Util.getTextSize(node.label, 12)[0];
//     },
//     getVGap: () => {
//       return 10;
//     },
//     getHGap: () => {
//       return 60;
//     },
//     getSide: (node) => {
//       return 'right';
//     },
//   },
//   defaultEdge: {
//     type: 'cubic-horizontal',
//     style: {
//       lineWidth: 2,
//     },
//   },
//   minZoom: 0.5,
//   modes: {
//     default: ['drag-canvas', 'zoom-canvas', 'dice-mindmap'],
//   },
// });
//
// tree.data(dataTransform(rawData));
//
// tree.render();
