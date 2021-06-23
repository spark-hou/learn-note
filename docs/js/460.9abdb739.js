(self.webpackChunklearn_note=self.webpackChunklearn_note||[]).push([[460],{59460:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var g=n(66252),p=(0,g.HX)("data-v-bf9d56b2");(0,g.dD)("data-v-bf9d56b2");var h={class:"Python"},m={class:"g-container"},b=(0,g.Wm)("br",null,null,-1),v=(0,g.Wm)("br",null,null,-1),y=(0,g.Wm)("br",null,null,-1),k=(0,g.Uk)(" 安装tensorflow2.3的cpu版本 "),x=(0,g.Uk)("pip install tensorflow-cpu==2.3.0 -i https://pypi.douban.com/simple/ "),D=(0,g.Uk)(" Tensorflow GPU 版本安装"),w=(0,g.Uk)(" GPU版本有两个依赖库cuda和cudnn，对于 tensorflow2.3来讲"),W=(0,g.Uk)(" CUDA的版本需要是 10.1"),E=(0,g.Uk)(" cudnn版本号需要不小于 7.6"),P=(0,g.Uk)(" 因为GPU版本这两个依赖库比较大，不推荐大家手动配置"),F=(0,g.Uk)(" conda install cudatoolkit=10.1 "),T=(0,g.Wm)("br",null,null,-1),U=(0,g.Uk)(" conda install cudnn=7.6.5 "),C=(0,g.uE)('<div class="g-block" data-v-bf9d56b2></div><div class="g-block" data-v-bf9d56b2></div><div id="PythonG6" data-name="脑图数" data-v-bf9d56b2></div><div class="g-block" data-v-bf9d56b2></div><div class="g-block" data-v-bf9d56b2></div>',5);(0,g.Cn)();var e=p(function(t,e,n,i,a,l){var o=(0,g.up)("a-anchor-link"),r=(0,g.up)("a-anchor"),c=(0,g.up)("a-page-header"),u=(0,g.up)("a-typography-title"),d=(0,g.up)("a-typography-text"),s=(0,g.up)("a-typography-paragraph"),f=(0,g.up)("a-typography");return(0,g.wg)(),(0,g.j4)("div",h,[(0,g.Wm)(r,{class:"toc-affix"},{default:p(function(){return[((0,g.wg)(!0),(0,g.j4)(g.HY,null,(0,g.Ko)(t.anchorList,function(t,e){return(0,g.wg)(),(0,g.j4)(o,{key:e,href:t.id,title:t.title},null,8,["href","title"])}),128))]}),_:1}),(0,g.Wm)("div",m,[(0,g.Wm)(c,{id:"Top",style:{border:"1px solid rgb(235, 237, 240)"},title:t.title,onBack:t.backUp},null,8,["title","onBack"]),b,v,y,(0,g.Wm)(f,null,{default:p(function(){return[(0,g.Wm)(u,null,{default:p(function(){return[k]}),_:1}),(0,g.Wm)(s,null,{default:p(function(){return[(0,g.Wm)(d,{code:"",copyable:""},{default:p(function(){return[x]}),_:1})]}),_:1}),(0,g.Wm)(u,null,{default:p(function(){return[D]}),_:1}),(0,g.Wm)(s,null,{default:p(function(){return[w]}),_:1}),(0,g.Wm)(s,null,{default:p(function(){return[W]}),_:1}),(0,g.Wm)(s,null,{default:p(function(){return[E]}),_:1}),(0,g.Wm)(s,null,{default:p(function(){return[P]}),_:1}),(0,g.Wm)(d,{code:"",copyable:""},{default:p(function(){return[F]}),_:1}),T,(0,g.Wm)(d,{code:"",copyable:""},{default:p(function(){return[U]}),_:1})]}),_:1}),C])])}),l=n(2262),o=n(42119),r=n(75257),c=n(13782),u=(n(92222),n(21249),n(96053)),i=u.ZP.Util,d=["#5B8FF9","#5AD8A6","#5D7092","#F6BD16","#6F5EF9","#6DC8EC","#D3EEF9","#DECFEA","#FFE0C7","#1E9493","#BBDEDE","#FF99C3","#FFE0ED","#CDDDFD","#CDF3E4","#CED4DE","#FCEBB9","#D3CEFD","#945FB9","#FF9845"];u.ZP.registerNode("dice-mind-map-root",{jsx:function(t){var e=i.getTextSize(t.label,16)[0]+24,n=t.style.stroke||"#096dd9";return'\n      <group>\n        <rect draggable="true" style={{width: '.concat(e,", height: 42, stroke: ").concat(n,", radius: 4}} keyshape>\n          <text style={{ fontSize: 16, marginLeft: 12, marginTop: 12 }}>").concat(t.label,"</text>\n          <text style={{ marginLeft: ").concat(e-16,", marginTop: -20, stroke: '#66ccff', fill: '#000', cursor: 'pointer', opacity: ").concat(t.hover?.75:0,' }} action="add">+</text>\n        </rect>\n      </group>\n    ')},getAnchorPoints:function(){return[[0,.5],[1,.5]]}},"single-node"),u.ZP.registerNode("dice-mind-map-sub",{jsx:function(t){var e=i.getTextSize(t.label,14)[0]+24,n=t.color||t.style.stroke;return'\n      <group>\n        <rect draggable="true" style={{width: '.concat(e+24,', height: 22}} keyshape>\n          <text draggable="true" style={{ fontSize: 14, marginLeft: 12, marginTop: 6 }}>').concat(t.label,"</text>\n          <text style={{ marginLeft: ").concat(e-8,", marginTop: -10, stroke: ").concat(n,", fill: '#000', cursor: 'pointer', opacity: ").concat(t.hover?.75:0,", next: 'inline' }} action=\"add\">+</text>\n          <text style={{ marginLeft: ").concat(e-4,", marginTop: -10, stroke: ").concat(n,", fill: '#000', cursor: 'pointer', opacity: ").concat(t.hover?.75:0,", next: 'inline' }} action=\"delete\">-</text>\n        </rect>\n        <rect style={{ fill: ").concat(n,", width: ").concat(e+24,", height: 2, x: 0, y: 22 }} />\n\n      </group>\n    ")},getAnchorPoints:function(){return[[0,.965],[1,.965]]}},"single-node"),u.ZP.registerNode("dice-mind-map-leaf",{jsx:function(t){var e=i.getTextSize(t.label,12)[0]+24,n=t.color||t.style.stroke;return'\n      <group>\n        <rect draggable="true" style={{width: '.concat(e+20,", height: 26, fill: 'transparent' }}>\n          <text style={{ fontSize: 12, marginLeft: 12, marginTop: 6 }}>").concat(t.label,"</text>\n              <text style={{ marginLeft: ").concat(e-8,", marginTop: -10, stroke: ").concat(n,", fill: '#000', cursor: 'pointer', opacity: ").concat(t.hover?.75:0,", next: 'inline' }} action=\"add\">+</text>\n              <text style={{ marginLeft: ").concat(e-4,", marginTop: -10, stroke: ").concat(n,", fill: '#000', cursor: 'pointer', opacity: ").concat(t.hover?.75:0,", next: 'inline' }} action=\"delete\">-</text>\n        </rect>\n        <rect style={{ fill: ").concat(n,", width: ").concat(e+24,", height: 2, x: 0, y: 32 }} />\n\n      </group>\n    ")},getAnchorPoints:function(){return[[0,.965],[1,.965]]}},"single-node"),u.ZP.registerBehavior("scroll-canvas",{getEvents:function(){return{wheel:"onWheel"}},onWheel:function(t){var e,n,i=this.graph;i&&(t.ctrlKey?(n=i.get("canvas").getPointByClient(t.clientX,t.clientY),e=i.getZoom(),0<t.wheelDelta?e+=.05*e:e*=.05*e,i.zoomTo(e,{x:n.x,y:n.y})):(e=t.deltaX||t.movementX,n=t.deltaY||t.movementY||125*-t.wheelDelta/3,i.translate(-e,-n)),t.preventDefault())}});var s=u.ZP.Util,n=(0,g.aZ)({name:"Python",setup:function(){function t(){var t=document.getElementById("PythonG6"),e=t.scrollWidth,n=(t.scrollHeight||500)-20;a.value||(a.value=new u.ZP.TreeGraph({container:t,width:e,height:n,fitView:!0,fitViewPadding:[10,20],layout:{type:"mindmap",direction:"H",getHeight:function(){return 16},getWidth:function(t){return 0===t.level?s.getTextSize(t.label,16)[0]+12:s.getTextSize(t.label,12)[0]},getVGap:function(){return 10},getHGap:function(){return 60},getSide:function(){return"right"}},defaultEdge:{type:"cubic-horizontal",style:{lineWidth:2}},minZoom:.5,modes:{default:["drag-canvas","zoom-canvas","dice-mindmap"]}})),a.value.data(function n(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"",l=(0,c.Z)({},t);switch(i){case 0:l.type="dice-mind-map-root";break;case 1:l.type="dice-mind-map-sub";break;default:l.type="dice-mind-map-leaf"}return l.hover=!1,1===i&&(l.color=d[e]),a&&(l.color=a),l.direction="left",t.children&&(l.children=t.children.map(function(t,e){return n(t,i+1,e,l.color||"")})),l}(i)),a.value.render()}var e=(0,o.tv)(),n=(0,l.iH)([{id:"#Top",title:"Top"}]),i={label:"Modeling Methods",id:"0",children:[{label:"Classification",id:"0-1",children:[{label:"Logistic regression",id:"0-1-1",children:[{label:"Logistic regression",id:"0-1-1-1"},{label:"Logistic regression",id:"0-1-1-2"}]},{label:"Linear discriminant analysis",id:"0-1-2"},{label:"Rules",id:"0-1-3"},{label:"Decision trees",id:"0-1-4"},{label:"Naive Bayes",id:"0-1-5"},{label:"Support vectomachine",id:"0-1-6"},{label:"Probabilistic neural network",id:"0-1-7"},{label:"Support vectomachine",id:"0-1-8"}]}]},a={value:null};return(0,g.bv)(function(){t()}),(0,g.Ah)(function(){(0,r.Kk)(a)}),{title:"Python笔记",backUp:function(){e.back()},anchorList:n}}});n.render=e,n.__scopeId="data-v-bf9d56b2";var a=n}}]);