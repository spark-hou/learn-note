(self.webpackChunklearn_note=self.webpackChunklearn_note||[]).push([[217],{70681:function(e,n,r){e.exports={graphlib:r(70574),layout:r(98123),debug:r(27570),util:{time:r(11138).time,notime:r(11138).notime},version:r(88177)}},92188:function(e,n,r){"use strict";var i=r(38436),t=r(74079);e.exports={run:function(r){var e="greedy"===r.graph().acyclicer?t(r,function(n){return function(e){return n.edge(e).weight}}(r)):function(r){var t=[],o={},a={};return i.forEach(r.nodes(),function n(e){i.has(a,e)||(a[e]=!0,o[e]=!0,i.forEach(r.outEdges(e),function(e){i.has(o,e.w)?t.push(e):n(e.w)}),delete o[e])}),t}(r);i.forEach(e,function(e){var n=r.edge(e);r.removeEdge(e),n.forwardName=e.name,n.reversed=!0,r.setEdge(e.w,e.v,n,i.uniqueId("rev"))})},undo:function(t){i.forEach(t.edges(),function(e){var n,r=t.edge(e);r.reversed&&(t.removeEdge(e),n=r.forwardName,delete r.reversed,delete r.forwardName,t.setEdge(e.w,e.v,r,n))})}}},61133:function(e,n,r){var u=r(38436),c=r(11138);function d(e,n,r,t,o,a){var i=o[n][a-1],r=c.addDummyNode(e,"border",{width:0,height:0,rank:a,borderType:n},r);o[n][a]=r,e.setParent(r,t),i&&e.setEdge(i,r,{weight:1})}e.exports=function(i){u.forEach(i.children(),function e(n){var r=i.children(n),t=i.node(n);if(r.length&&u.forEach(r,e),u.has(t,"minRank")){t.borderLeft=[],t.borderRight=[];for(var o=t.minRank,a=t.maxRank+1;o<a;++o)d(i,"borderLeft","_bl",n,t,o),d(i,"borderRight","_br",n,t,o)}})}},53258:function(e,n,r){"use strict";var t=r(38436);function o(n){t.forEach(n.nodes(),function(e){a(n.node(e))}),t.forEach(n.edges(),function(e){a(n.edge(e))})}function a(e){var n=e.width;e.width=e.height,e.height=n}function i(e){e.y=-e.y}function u(e){var n=e.x;e.x=e.y,e.y=n}e.exports={adjust:function(e){var n=e.graph().rankdir.toLowerCase();"lr"!==n&&"rl"!==n||o(e)},undo:function(e){var n=e.graph().rankdir.toLowerCase();"bt"!==n&&"rl"!==n||function(n){t.forEach(n.nodes(),function(e){i(n.node(e))}),t.forEach(n.edges(),function(e){e=n.edge(e);t.forEach(e.points,i),t.has(e,"y")&&i(e)})}(e);"lr"!==n&&"rl"!==n||(function(n){t.forEach(n.nodes(),function(e){u(n.node(e))}),t.forEach(n.edges(),function(e){e=n.edge(e);t.forEach(e.points,u),t.has(e,"x")&&u(e)})}(e),o(e))}}},77822:function(e){function n(){var e={};e._next=e._prev=e,this._sentinel=e}function r(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function t(e,n){if("_next"!==e&&"_prev"!==e)return n}(e.exports=n).prototype.dequeue=function(){var e=this._sentinel,n=e._prev;if(n!==e)return r(n),n},n.prototype.enqueue=function(e){var n=this._sentinel;e._prev&&e._next&&r(e),e._next=n._next,n._next._prev=e,(n._next=e)._prev=n},n.prototype.toString=function(){for(var e=[],n=this._sentinel,r=n._prev;r!==n;)e.push(JSON.stringify(r,t)),r=r._prev;return"["+e.join(", ")+"]"}},27570:function(e,n,r){var t=r(38436),o=r(11138),a=r(70574).Graph;e.exports={debugOrdering:function(n){var e=o.buildLayerMatrix(n),r=new a({compound:!0,multigraph:!0}).setGraph({});return t.forEach(n.nodes(),function(e){r.setNode(e,{label:e}),r.setParent(e,"layer"+n.node(e).rank)}),t.forEach(n.edges(),function(e){r.setEdge(e.v,e.w,{},e.name)}),t.forEach(e,function(e,n){r.setNode("layer"+n,{rank:"same"}),t.reduce(e,function(e,n){return r.setEdge(e,n,{style:"invis"}),n})}),r}}},70574:function(e,n,r){var t;try{t=r(28282)}catch(e){}t=t||window.graphlib,e.exports=t},74079:function(e,n,r){var c=r(38436),u=r(70574).Graph,d=r(77822);e.exports=function(n,e){if(n.nodeCount()<=1)return[];e=function(e,t){var o=new u,a=0,i=0;c.forEach(e.nodes(),function(e){o.setNode(e,{v:e,in:0,out:0})}),c.forEach(e.edges(),function(e){var n=o.edge(e.v,e.w)||0,r=t(e);o.setEdge(e.v,e.w,n+r),i=Math.max(i,o.node(e.v).out+=r),a=Math.max(a,o.node(e.w).in+=r)});var n=c.range(i+a+3).map(function(){return new d}),r=a+1;return c.forEach(o.nodes(),function(e){s(n,r,o.node(e))}),{graph:o,buckets:n,zeroIdx:r}}(n,e||t),e=function(e,n,r){var t,o=[],a=n[n.length-1],i=n[0];for(;e.nodeCount();){for(;t=i.dequeue();)f(e,n,r,t);for(;t=a.dequeue();)f(e,n,r,t);if(e.nodeCount())for(var u=n.length-2;0<u;--u)if(t=n[u].dequeue()){o=o.concat(f(e,n,r,t,!0));break}}return o}(e.graph,e.buckets,e.zeroIdx);return c.flatten(c.map(e,function(e){return n.outEdges(e.v,e.w)}),!0)};var t=c.constant(1);function f(t,o,a,e,i){var u=i?[]:void 0;return c.forEach(t.inEdges(e.v),function(e){var n=t.edge(e),r=t.node(e.v);i&&u.push({v:e.v,w:e.w}),r.out-=n,s(o,a,r)}),c.forEach(t.outEdges(e.v),function(e){var n=t.edge(e),e=e.w,e=t.node(e);e.in-=n,s(o,a,e)}),t.removeNode(e.v),u}function s(e,n,r){(r.out?r.in?e[r.out-r.in+n]:e[e.length-1]:e[0]).enqueue(r)}},98123:function(e,n,r){"use strict";var f=r(38436),t=r(92188),o=r(45995),i=r(78093),u=r(11138).normalizeRanks,c=r(24219),s=r(11138).removeEmptyRanks,h=r(72981),g=r(61133),v=r(53258),l=r(53408),p=r(17873),m=r(11138),d=r(70574).Graph;e.exports=function(a,e){var r=e&&e.debugTiming?m.time:m.notime;r("layout",function(){var n=r("  buildLayoutGraph",function(){return r=a,t=new d({multigraph:!0,compound:!0}),e=R(r.graph()),t.setGraph(f.merge({},w,_(e,E),f.pick(e,b))),f.forEach(r.nodes(),function(e){var n=R(r.node(e));t.setNode(e,f.defaults(_(n,y),x)),t.setParent(e,r.parent(e))}),f.forEach(r.edges(),function(e){var n=R(r.edge(e));t.setEdge(e,f.merge({},N,_(n,k),f.pick(n,I)))}),t;var r,t,e});r("  runLayout",function(){var d,e;d=n,(e=r)("    makeSpaceForEdgeLabels",function(){var n,r;(r=(n=d).graph()).ranksep/=2,f.forEach(n.edges(),function(e){e=n.edge(e);e.minlen*=2,"c"!==e.labelpos.toLowerCase()&&("TB"===r.rankdir||"BT"===r.rankdir?e.width+=e.labeloffset:e.height+=e.labeloffset)})}),e("    removeSelfEdges",function(){var r;r=d,f.forEach(r.edges(),function(e){var n;e.v===e.w&&((n=r.node(e.v)).selfEdges||(n.selfEdges=[]),n.selfEdges.push({e:e,label:r.edge(e)}),r.removeEdge(e))})}),e("    acyclic",function(){t.run(d)}),e("    nestingGraph.run",function(){h.run(d)}),e("    rank",function(){i(m.asNonCompoundGraph(d))}),e("    injectEdgeLabelProxies",function(){var r;r=d,f.forEach(r.edges(),function(e){var n=r.edge(e);n.width&&n.height&&(n=r.node(e.v),e={rank:(r.node(e.w).rank-n.rank)/2+n.rank,e:e},m.addDummyNode(r,"edge-proxy",e,"_ep"))})}),e("    removeEmptyRanks",function(){s(d)}),e("    nestingGraph.cleanup",function(){h.cleanup(d)}),e("    normalizeRanks",function(){u(d)}),e("    assignRankMinMax",function(){var n,r;n=d,r=0,f.forEach(n.nodes(),function(e){e=n.node(e);e.borderTop&&(e.minRank=n.node(e.borderTop).rank,e.maxRank=n.node(e.borderBottom).rank,r=f.max(r,e.maxRank))}),n.graph().maxRank=r}),e("    removeEdgeLabelProxies",function(){var r;r=d,f.forEach(r.nodes(),function(e){var n=r.node(e);"edge-proxy"===n.dummy&&(r.edge(n.e).labelRank=n.rank,r.removeNode(e))})}),e("    normalize.run",function(){o.run(d)}),e("    parentDummyChains",function(){c(d)}),e("    addBorderSegments",function(){g(d)}),e("    order",function(){l(d)}),e("    insertSelfEdges",function(){var o,e;o=d,e=m.buildLayerMatrix(o),f.forEach(e,function(e){var t=0;f.forEach(e,function(e,n){var r=o.node(e);r.order=n+t,f.forEach(r.selfEdges,function(e){m.addDummyNode(o,"selfedge",{width:e.label.width,height:e.label.height,rank:r.rank,order:n+ ++t,e:e.e,label:e.label},"_se")}),delete r.selfEdges})})}),e("    adjustCoordinateSystem",function(){v.adjust(d)}),e("    position",function(){p(d)}),e("    positionSelfEdges",function(){var i;i=d,f.forEach(i.nodes(),function(e){var n,r,t,o,a=i.node(e);"selfedge"===a.dummy&&(n=(o=i.node(a.e.v)).x+o.width/2,r=o.y,t=a.x-n,o=o.height/2,i.setEdge(a.e,a.label),i.removeNode(e),a.label.points=[{x:n+2*t/3,y:r-o},{x:n+5*t/6,y:r-o},{x:n+t,y:r},{x:n+5*t/6,y:r+o},{x:n+2*t/3,y:r+o}],a.label.x=a.x,a.label.y=a.y)})}),e("    removeBorderNodes",function(){var a;a=d,f.forEach(a.nodes(),function(e){var n,r,t,o;a.children(e).length&&(n=a.node(e),r=a.node(n.borderTop),t=a.node(n.borderBottom),o=a.node(f.last(n.borderLeft)),e=a.node(f.last(n.borderRight)),n.width=Math.abs(e.x-o.x),n.height=Math.abs(t.y-r.y),n.x=o.x+n.width/2,n.y=r.y+n.height/2)}),f.forEach(a.nodes(),function(e){"border"===a.node(e).dummy&&a.removeNode(e)})}),e("    normalize.undo",function(){o.undo(d)}),e("    fixupEdgeLabelCoords",function(){var r;r=d,f.forEach(r.edges(),function(e){var n=r.edge(e);if(f.has(n,"x"))switch("l"!==n.labelpos&&"r"!==n.labelpos||(n.width-=n.labeloffset),n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":n.x+=n.width/2+n.labeloffset}})}),e("    undoCoordinateSystem",function(){v.undo(d)}),e("    translateGraph",function(){function n(e){var n=e.x,r=e.y,t=e.width,e=e.height;o=Math.min(o,n-t/2),a=Math.max(a,n+t/2),i=Math.min(i,r-e/2),u=Math.max(u,r+e/2)}var r,o,a,i,u,e,t,c;r=d,o=Number.POSITIVE_INFINITY,a=0,i=Number.POSITIVE_INFINITY,u=0,e=r.graph(),t=e.marginx||0,c=e.marginy||0,f.forEach(r.nodes(),function(e){n(r.node(e))}),f.forEach(r.edges(),function(e){e=r.edge(e);f.has(e,"x")&&n(e)}),o-=t,i-=c,f.forEach(r.nodes(),function(e){e=r.node(e);e.x-=o,e.y-=i}),f.forEach(r.edges(),function(e){e=r.edge(e);f.forEach(e.points,function(e){e.x-=o,e.y-=i}),f.has(e,"x")&&(e.x-=o),f.has(e,"y")&&(e.y-=i)}),e.width=a-o+t,e.height=u-i+c}),e("    assignNodeIntersects",function(){var a;a=d,f.forEach(a.edges(),function(e){var n,r=a.edge(e),t=a.node(e.v),o=a.node(e.w),e=r.points?(n=r.points[0],r.points[r.points.length-1]):(r.points=[],n=o,t);r.points.unshift(m.intersectRect(t,n)),r.points.push(m.intersectRect(o,e))})}),e("    reversePoints",function(){var n;n=d,f.forEach(n.edges(),function(e){e=n.edge(e);e.reversed&&e.points.reverse()})}),e("    acyclic.undo",function(){t.undo(d)})}),r("  updateInputGraph",function(){var t,o;t=a,o=n,f.forEach(t.nodes(),function(e){var n=t.node(e),r=o.node(e);n&&(n.x=r.x,n.y=r.y,o.children(e).length&&(n.width=r.width,n.height=r.height))}),f.forEach(t.edges(),function(e){var n=t.edge(e),e=o.edge(e);n.points=e.points,f.has(e,"x")&&(n.x=e.x,n.y=e.y)}),t.graph().width=o.graph().width,t.graph().height=o.graph().height})})};var E=["nodesep","edgesep","ranksep","marginx","marginy"],w={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},b=["acyclicer","ranker","rankdir","align"],y=["width","height"],x={width:0,height:0},k=["minlen","weight","width","height","labeloffset"],N={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},I=["labelpos"];function _(e,n){return f.mapValues(f.pick(e,n),Number)}function R(e){var r={};return f.forEach(e,function(e,n){r[n.toLowerCase()]=e}),r}},38436:function(e,n,r){var t;try{t={cloneDeep:r(50361),constant:r(75703),defaults:r(91747),each:r(66073),filter:r(63105),find:r(13311),flatten:r(85564),forEach:r(84486),forIn:r(62620),has:r(18721),isUndefined:r(52353),last:r(10928),map:r(35161),mapValues:r(66604),max:r(6162),merge:r(82492),min:r(53632),minBy:r(22762),now:r(7771),pick:r(78718),range:r(96026),reduce:r(54061),sortBy:r(89734),uniqueId:r(73955),values:r(52628),zipObject:r(7287)}}catch(e){}t=t||window._,e.exports=t},72981:function(e,n,r){var v=r(38436),l=r(11138);e.exports={run:function(n){var r=l.addDummyNode(n,"root",{},"_root"),t=function(o){var a={};return v.forEach(o.children(),function(e){!function n(e,r){var t=o.children(e);t&&t.length&&v.forEach(t,function(e){n(e,r+1)}),a[e]=r}(e,1)}),a}(n),o=v.max(v.values(t))-1,a=2*o+1;n.graph().nestingRoot=r,v.forEach(n.edges(),function(e){n.edge(e).minlen*=a});var i=function(r){return v.reduce(r.edges(),function(e,n){return e+r.edge(n).weight},0)}(n)+1;v.forEach(n.children(),function(e){!function o(a,i,u,c,d,f,s){var e=a.children(s);if(!e.length)return void(s!==i&&a.setEdge(i,s,{weight:0,minlen:u}));var h=l.addBorderNode(a,"_bt");var g=l.addBorderNode(a,"_bb");var n=a.node(s);a.setParent(h,s);n.borderTop=h;a.setParent(g,s);n.borderBottom=g;v.forEach(e,function(e){o(a,i,u,c,d,f,e);var n=a.node(e),r=n.borderTop||e,t=n.borderBottom||e,e=n.borderTop?c:2*c,n=r!==t?1:d-f[s]+1;a.setEdge(h,r,{weight:e,minlen:n,nestingEdge:!0}),a.setEdge(t,g,{weight:e,minlen:n,nestingEdge:!0})});a.parent(s)||a.setEdge(i,h,{weight:0,minlen:d+f[s]})}(n,r,a,i,o,t,e)}),n.graph().nodeRankFactor=a},cleanup:function(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,v.forEach(n.edges(),function(e){n.edge(e).nestingEdge&&n.removeEdge(e)})}}},45995:function(e,n,r){"use strict";var t=r(38436),h=r(11138);e.exports={run:function(n){n.graph().dummyChains=[],t.forEach(n.edges(),function(e){!function(e,n){var r,t,o,a=n.v,i=e.node(a).rank,u=n.w,c=e.node(u).rank,d=n.name,f=e.edge(n),s=f.labelRank;if(c!==i+1){for(e.removeEdge(n),o=0,++i;i<c;++o,++i)f.points=[],t={width:0,height:0,edgeLabel:f,edgeObj:n,rank:i},r=h.addDummyNode(e,"edge",t,"_d"),i===s&&(t.width=f.width,t.height=f.height,t.dummy="edge-label",t.labelpos=f.labelpos),e.setEdge(a,r,{weight:f.weight},d),0===o&&e.graph().dummyChains.push(r),a=r;e.setEdge(a,u,{weight:f.weight},d)}}(n,e)})},undo:function(o){t.forEach(o.graph().dummyChains,function(e){var n,r=o.node(e),t=r.edgeLabel;for(o.setEdge(r.edgeObj,t);r.dummy;)n=o.successors(e)[0],o.removeNode(e),t.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),r=o.node(e=n)})}}},55093:function(e,n,r){var t=r(38436);e.exports=function(o,a,e){var i,u={};t.forEach(e,function(e){for(var n,r,t=o.parent(e);t;){if((n=o.parent(t))?(r=u[n],u[n]=t):(r=i,i=t),r&&r!==t)return void a.setEdge(r,t);t=n}})}},35439:function(e,n,r){var o=r(38436);e.exports=function(t,e){return o.map(e,function(e){var n=t.inEdges(e);if(n.length){n=o.reduce(n,function(e,n){var r=t.edge(n),n=t.node(n.v);return{sum:e.sum+r.weight*n.order,weight:e.weight+r.weight}},{sum:0,weight:0});return{v:e,barycenter:n.sum/n.weight,weight:n.weight}}return{v:e}})}},23128:function(e,n,r){var c=r(38436),t=r(70574).Graph;e.exports=function(o,r,a){var i=function(e){var n;for(;e.hasNode(n=c.uniqueId("_root")););return n}(o),u=new t({compound:!0}).setGraph({root:i}).setDefaultNodeLabel(function(e){return o.node(e)});return c.forEach(o.nodes(),function(t){var e=o.node(t),n=o.parent(t);(e.rank===r||e.minRank<=r&&r<=e.maxRank)&&(u.setNode(t),u.setParent(t,n||i),c.forEach(o[a](t),function(e){var n=e.v===t?e.w:e.v,r=u.edge(n,t),r=c.isUndefined(r)?0:r.weight;u.setEdge(n,t,{weight:o.edge(e).weight+r})}),c.has(e,"minRank")&&u.setNode(t,{borderLeft:e.borderLeft[r],borderRight:e.borderRight[r]}))}),u}},56630:function(e,n,r){"use strict";var c=r(38436);e.exports=function(e,n){for(var r=0,t=1;t<n.length;++t)r+=function(n,e,r){var t=c.zipObject(r,c.map(r,function(e,n){return n})),o=c.flatten(c.map(e,function(e){return c.sortBy(c.map(n.outEdges(e),function(e){return{pos:t[e.w],weight:n.edge(e).weight}}),"pos")}),!0),a=1;for(;a<r.length;)a<<=1;e=2*a-1;--a;var i=c.map(new Array(e),function(){return 0}),u=0;return c.forEach(o.forEach(function(e){var n=e.pos+a;i[n]+=e.weight;for(var r=0;0<n;)n%2&&(r+=i[n+1]),i[n=n-1>>1]+=e.weight;u+=e.weight*r})),u}(e,n[t-1],n[t]);return r}},53408:function(e,n,r){"use strict";var f=r(38436),s=r(2588),h=r(56630),g=r(61026),t=r(23128),v=r(55093),l=r(70574).Graph,p=r(11138);function m(n,e,r){return f.map(e,function(e){return t(n,e,r)})}function E(r,e){f.forEach(e,function(e){f.forEach(e,function(e,n){r.node(e).order=n})})}e.exports=function(e){var n=p.maxRank(e),r=m(e,f.range(1,n+1),"inEdges"),t=m(e,f.range(n-1,-1,-1),"outEdges"),o=s(e);E(e,o);for(var a,i=Number.POSITIVE_INFINITY,u=0,c=0;c<4;++u,++c){!function(e,n){var t=new l;f.forEach(e,function(r){var e=r.graph().root,e=g(r,e,t,n);f.forEach(e.vs,function(e,n){r.node(e).order=n}),v(r,t,e.vs)})}(u%2?r:t,2<=u%4),o=p.buildLayerMatrix(e);var d=h(e,o);d<i&&(c=0,a=f.cloneDeep(o),i=d)}E(e,a)}},2588:function(e,n,r){"use strict";var i=r(38436);e.exports=function(t){var o={},e=i.filter(t.nodes(),function(e){return!t.children(e).length}),n=i.max(i.map(e,function(e){return t.node(e).rank})),a=i.map(i.range(n+1),function(){return[]});e=i.sortBy(e,function(e){return t.node(e).rank});return i.forEach(e,function e(n){var r;i.has(o,n)||(o[n]=!0,r=t.node(n),a[r.rank].push(n),i.forEach(t.successors(n),e))}),a}},83678:function(e,n,r){"use strict";var o=r(38436);e.exports=function(e,n){var t={};return o.forEach(e,function(e,n){n=t[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};o.isUndefined(e.barycenter)||(n.barycenter=e.barycenter,n.weight=e.weight)}),o.forEach(n.edges(),function(e){var n=t[e.v],r=t[e.w];o.isUndefined(n)||o.isUndefined(r)||(r.indegree++,n.out.push(t[e.w]))}),function(r){var e=[];function n(n){return function(e){e.merged||(o.isUndefined(e.barycenter)||o.isUndefined(n.barycenter)||e.barycenter>=n.barycenter)&&function(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight);n.weight&&(r+=n.barycenter*n.weight,t+=n.weight);e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}(n,e)}}for(;r.length;){var t=r.pop();e.push(t),o.forEach(t.in.reverse(),n(t)),o.forEach(t.out,function(n){return function(e){e.in.push(n),0==--e.indegree&&r.push(e)}}(t))}return o.map(o.filter(e,function(e){return!e.merged}),function(e){return o.pick(e,["vs","i","barycenter","weight"])})}(o.filter(t,function(e){return!e.indegree}))}},61026:function(e,n,r){var f=r(38436),s=r(35439),h=r(83678),g=r(87304);function v(e,n){f.forEach(e,function(e){e.vs=f.flatten(e.vs.map(function(e){return n[e]?n[e].vs:e}),!0)})}function l(e,n){f.isUndefined(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}e.exports=function r(t,e,o,a){var n=t.children(e);var i=t.node(e);var u=i?i.borderLeft:void 0;var c=i?i.borderRight:void 0;var d={};u&&(n=f.filter(n,function(e){return e!==u&&e!==c}));e=s(t,n);f.forEach(e,function(e){var n;t.children(e.v).length&&(n=r(t,e.v,o,a),d[e.v]=n,f.has(n,"barycenter")&&l(e,n))});i=h(e,o);v(i,d);var n=g(i,a);u&&(n.vs=f.flatten([u,n.vs,c],!0),t.predecessors(u).length&&(e=t.node(t.predecessors(u)[0]),i=t.node(t.predecessors(c)[0]),f.has(n,"barycenter")||(n.barycenter=0,n.weight=0),n.barycenter=(n.barycenter*n.weight+e.order+i.order)/(n.weight+2),n.weight+=2));return n}},87304:function(e,n,r){var c=r(38436),d=r(11138);function f(e,n,r){for(var t;n.length&&(t=c.last(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}e.exports=function(e,n){var r=d.partition(e,function(e){return c.has(e,"barycenter")}),e=r.lhs,t=c.sortBy(r.rhs,function(e){return-e.i}),o=[],a=0,i=0,u=0;e.sort(function(r){return function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:r?n.i-e.i:e.i-n.i}}(!!n)),u=f(o,t,u),c.forEach(e,function(e){u+=e.vs.length,o.push(e.vs),a+=e.barycenter*e.weight,i+=e.weight,u=f(o,t,u)});e={vs:c.flatten(o,!0)};i&&(e.barycenter=a/i,e.weight=i);return e}},24219:function(e,n,r){var i=r(38436);e.exports=function(d){var f=function(t){var o={},a=0;return i.forEach(t.children(),function e(n){var r=a;i.forEach(t.children(n),e),o[n]={low:r,lim:a++}}),o}(d);i.forEach(d.graph().dummyChains,function(e){for(var n=d.node(e),r=n.edgeObj,t=function(e,n,r,t){var o,a,i=[],u=[],c=Math.min(n[r].low,n[t].low),d=Math.max(n[r].lim,n[t].lim);o=r;for(;o=e.parent(o),i.push(o),o&&(n[o].low>c||d>n[o].lim););a=o,o=t;for(;(o=e.parent(o))!==a;)u.push(o);return{path:i.concat(u.reverse()),lca:a}}(d,f,r.v,r.w),o=t.path,a=t.lca,i=0,u=o[i],c=!0;e!==r.w;){if(n=d.node(e),c){for(;(u=o[i])!==a&&d.node(u).maxRank<n.rank;)i++;u===a&&(c=!1)}if(!c){for(;i<o.length-1&&d.node(u=o[i+1]).minRank<=n.rank;)i++;u=o[i]}d.setParent(e,u),e=d.successors(e)[0]}})}},3573:function(e,n,r){"use strict";var l=r(38436),p=r(70574).Graph,u=r(11138);function c(d,e){var f={};return l.reduce(e,function(e,t){var a=0,i=0,u=e.length,c=l.last(t);return l.forEach(t,function(e,n){var r=function(n,e){if(n.node(e).dummy)return l.find(n.predecessors(e),function(e){return n.node(e).dummy})}(d,e),o=r?d.node(r).order:u;!r&&e!==c||(l.forEach(t.slice(i,n+1),function(t){l.forEach(d.predecessors(t),function(e){var n=d.node(e),r=n.order;!(r<a||o<r)||n.dummy&&d.node(t).dummy||s(f,e,t)})}),i=n+1,a=o)}),t}),f}function d(u,e){var i={};function c(n,e,r,t,o){var a;l.forEach(l.range(e,r),function(e){a=n[e],u.node(a).dummy&&l.forEach(u.predecessors(a),function(e){var n=u.node(e);n.dummy&&(n.order<t||n.order>o)&&s(i,e,a)})})}return l.reduce(e,function(r,t){var o,a=-1,i=0;return l.forEach(t,function(e,n){"border"!==u.node(e).dummy||(e=u.predecessors(e)).length&&(o=u.node(e[0]).order,c(t,i,n,a,o),i=n,a=o),c(t,i,t.length,o,r.length)}),t}),i}function s(e,n,r){r<n&&(t=n,n=r,r=t);var t=e[n];t||(e[n]=t={}),t[r]=!0}function h(e,n,r){var t;return r<n&&(t=n,n=r,r=t),l.has(e[n],r)}function f(e,n,u,c){var d={},f={},s={};return l.forEach(n,function(e){l.forEach(e,function(e,n){d[e]=e,f[e]=e,s[e]=n})}),l.forEach(n,function(e){var i=-1;l.forEach(e,function(e){var n=c(e);if(n.length)for(var r=((n=l.sortBy(n,function(e){return s[e]})).length-1)/2,t=Math.floor(r),o=Math.ceil(r);t<=o;++t){var a=n[t];f[e]===e&&i<s[a]&&!h(u,e,a)&&(f[a]=e,f[e]=d[e]=d[a],i=s[a])}})}),{root:d,align:f}}function g(t,e,n,r,o){var a,i,u,c,d,f,s={},h=(a=t,i=e,u=n,c=o,d=new p,e=a.graph(),f=function(i,u,c){return function(e,n,r){var t,o=e.node(n),a=e.node(r),r=0;if(r+=o.width/2,l.has(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":t=-o.width/2;break;case"r":t=o.width/2}if(t&&(r+=c?t:-t),t=0,r+=(o.dummy?u:i)/2,r+=(a.dummy?u:i)/2,r+=a.width/2,l.has(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":t=a.width/2;break;case"r":t=-a.width/2}return t&&(r+=c?t:-t),t=0,r}}(e.nodesep,e.edgesep,c),l.forEach(i,function(e){var o;l.forEach(e,function(e){var n,r,t=u[e];d.setNode(t),o&&(n=u[o],r=d.edge(n,t),d.setEdge(n,t,Math.max(f(a,e,o),r||0))),o=e})}),d),g=o?"borderLeft":"borderRight";function v(e,n){for(var r=h.nodes(),t=r.pop(),o={};t;)o[t]?e(t):(o[t]=!0,r.push(t),r=r.concat(n(t))),t=r.pop()}return v(function(e){s[e]=h.inEdges(e).reduce(function(e,n){return Math.max(e,s[n.v]+h.edge(n))},0)},h.predecessors.bind(h)),v(function(e){var n=h.outEdges(e).reduce(function(e,n){return Math.min(e,s[n.w]-h.edge(n))},Number.POSITIVE_INFINITY),r=t.node(e);n!==Number.POSITIVE_INFINITY&&r.borderType!==g&&(s[e]=Math.max(s[e],n))},h.successors.bind(h)),l.forEach(r,function(e){s[e]=s[n[e]]}),s}function v(o,e){return l.minBy(l.values(e),function(e){var r=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY;return l.forIn(e,function(e,n){n=n,n=o.node(n).width/2;r=Math.max(e+n,r),t=Math.min(e-n,t)}),r-t})}function m(i,u){var e=l.values(u),c=l.min(e),d=l.max(e);l.forEach(["u","d"],function(a){l.forEach(["l","r"],function(e){var n,r,t=a+e,o=i[t];o!==u&&(n=l.values(o),(r="l"===e?c-l.min(n):d-l.max(n))&&(i[t]=l.mapValues(o,function(e){return e+r})))})})}function E(r,t){return l.mapValues(r.ul,function(e,n){if(t)return r[t.toLowerCase()][n];n=l.sortBy(l.map(r,n));return(n[1]+n[2])/2})}e.exports={positionX:function(t){var o,e=u.buildLayerMatrix(t),a=l.merge(c(t,e),d(t,e)),i={};l.forEach(["u","d"],function(r){o="u"===r?e:l.values(e).reverse(),l.forEach(["l","r"],function(e){"r"===e&&(o=l.map(o,function(e){return l.values(e).reverse()}));var n=("u"===r?t.predecessors:t.successors).bind(t),n=f(0,o,a,n),n=g(t,o,n.root,n.align,"r"===e);"r"===e&&(n=l.mapValues(n,function(e){return-e})),i[r+e]=n})});var n=v(t,i);return m(i,n),E(i,t.graph().align)},findType1Conflicts:c,findType2Conflicts:d,addConflict:s,hasConflict:h,verticalAlignment:f,horizontalCompaction:g,alignCoordinates:m,findSmallestWidthAlignment:v,balance:E}},17873:function(e,n,r){"use strict";var a=r(38436),i=r(11138),t=r(3573).positionX;e.exports=function(r){(function(r){var e=i.buildLayerMatrix(r),t=r.graph().ranksep,o=0;a.forEach(e,function(e){var n=a.max(a.map(e,function(e){return r.node(e).height}));a.forEach(e,function(e){r.node(e).y=o+n/2}),o+=n+t})})(r=i.asNonCompoundGraph(r)),a.forEach(t(r),function(e,n){r.node(n).x=e})}},20300:function(e,n,r){"use strict";var i=r(38436),a=r(70574).Graph,u=r(76681).slack;e.exports=function(e){var n,r=new a({directed:!1}),t=e.nodes()[0],o=e.nodeCount();r.setNode(t,{});for(;function(o,a){return i.forEach(o.nodes(),function r(t){i.forEach(a.nodeEdges(t),function(e){var n=e.v,n=t===n?e.w:n;o.hasNode(n)||u(a,e)||(o.setNode(n,{}),o.setEdge(t,n,{}),r(n))})}),o.nodeCount()}(r,e)<o;)n=function(n,r){return i.minBy(r.edges(),function(e){if(n.hasNode(e.v)!==n.hasNode(e.w))return u(r,e)})}(r,e),n=r.hasNode(n.v)?u(e,n):-u(e,n),function(e,n,r){i.forEach(e.nodes(),function(e){n.node(e).rank+=r})}(r,e,n);return r}},78093:function(e,n,r){"use strict";var t=r(76681).longestPath,o=r(20300),a=r(42472);e.exports=function(e){switch(e.graph().ranker){case"network-simplex":u(e);break;case"tight-tree":!function(e){t(e),o(e)}(e);break;case"longest-path":i(e);break;default:u(e)}};var i=t;function u(e){a(e)}},42472:function(e,n,r){"use strict";var f=r(38436),t=r(20300),u=r(76681).slack,o=r(76681).longestPath,c=r(70574).alg.preorder,i=r(70574).alg.postorder,a=r(11138).simplify;function d(e){e=a(e),o(e);var n,r=t(e);for(g(r),s(r,e);n=v(r);)p(r,e,n,l(r,e,n))}function s(o,a){var e=(e=i(o,o.nodes())).slice(0,e.length-1);f.forEach(e,function(e){var n,r,t;r=a,t=e,e=(n=o).node(t).parent,n.edge(t,e).cutvalue=h(n,r,t)})}function h(o,a,i){var u=o.node(i).parent,c=!0,e=a.edge(i,u),d=0;return e||(c=!1,e=a.edge(u,i)),d=e.weight,f.forEach(a.nodeEdges(i),function(e){var n,r=e.v===i,t=r?e.w:e.v;t!==u&&(n=r===c,r=a.edge(e).weight,d+=n?r:-r,e=i,r=t,o.hasEdge(e,r)&&(t=o.edge(i,t).cutvalue,d+=n?-t:t))}),d}function g(e,n){arguments.length<2&&(n=e.nodes()[0]),function n(r,t,o,a,e){var i=o;var u=r.node(a);t[a]=!0;f.forEach(r.neighbors(a),function(e){f.has(t,e)||(o=n(r,t,o,e,a))});u.low=i;u.lim=o++;e?u.parent=e:delete u.parent;return o}(e,{},1,n)}function v(n){return f.find(n.edges(),function(e){return n.edge(e).cutvalue<0})}function l(n,r,e){var t=e.v,o=e.w;r.hasEdge(t,o)||(t=e.w,o=e.v);var t=n.node(t),o=n.node(o),a=t,i=!1;t.lim>o.lim&&(a=o,i=!0);o=f.filter(r.edges(),function(e){return i===m(0,n.node(e.v),a)&&i!==m(0,n.node(e.w),a)});return f.minBy(o,function(e){return u(r,e)})}function p(e,n,r,t){var o,a,i=r.v,r=r.w;e.removeEdge(i,r),e.setEdge(t.v,t.w,{}),g(e),s(e,n),o=e,a=n,n=f.find(o.nodes(),function(e){return!a.node(e).parent}),n=(n=c(o,n)).slice(1),f.forEach(n,function(e){var n=o.node(e).parent,r=a.edge(e,n),t=!1;r||(r=a.edge(n,e),t=!0),a.node(e).rank=a.node(n).rank+(t?r.minlen:-r.minlen)})}function m(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}(e.exports=d).initLowLimValues=g,d.initCutValues=s,d.calcCutValue=h,d.leaveEdge=v,d.enterEdge=l,d.exchangeEdges=p},76681:function(e,n,r){"use strict";var a=r(38436);e.exports={longestPath:function(t){var o={};a.forEach(t.sources(),function n(e){var r=t.node(e);if(a.has(o,e))return r.rank;o[e]=!0;e=a.min(a.map(t.outEdges(e),function(e){return n(e.w)-t.edge(e).minlen}));return e!==Number.POSITIVE_INFINITY&&null!=e||(e=0),r.rank=e})},slack:function(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}}},11138:function(e,n,r){"use strict";var u=r(38436),a=r(70574).Graph;function i(e,n,r,t){for(var o;o=u.uniqueId(t),e.hasNode(o););return r.dummy=n,e.setNode(o,r),o}function c(n){return u.max(u.map(n.nodes(),function(e){e=n.node(e).rank;if(!u.isUndefined(e))return e}))}e.exports={addDummyNode:i,simplify:function(t){var o=(new a).setGraph(t.graph());return u.forEach(t.nodes(),function(e){o.setNode(e,t.node(e))}),u.forEach(t.edges(),function(e){var n=o.edge(e.v,e.w)||{weight:0,minlen:1},r=t.edge(e);o.setEdge(e.v,e.w,{weight:n.weight+r.weight,minlen:Math.max(n.minlen,r.minlen)})}),o},asNonCompoundGraph:function(n){var r=new a({multigraph:n.isMultigraph()}).setGraph(n.graph());return u.forEach(n.nodes(),function(e){n.children(e).length||r.setNode(e,n.node(e))}),u.forEach(n.edges(),function(e){r.setEdge(e,n.edge(e))}),r},successorWeights:function(r){var e=u.map(r.nodes(),function(e){var n={};return u.forEach(r.outEdges(e),function(e){n[e.w]=(n[e.w]||0)+r.edge(e).weight}),n});return u.zipObject(r.nodes(),e)},predecessorWeights:function(r){var e=u.map(r.nodes(),function(e){var n={};return u.forEach(r.inEdges(e),function(e){n[e.v]=(n[e.v]||0)+r.edge(e).weight}),n});return u.zipObject(r.nodes(),e)},intersectRect:function(e,n){var r,t=e.x,o=e.y,a=n.x-t,i=n.y-o,n=e.width/2,e=e.height/2;if(!a&&!i)throw new Error("Not possible to find intersection inside of the rectangle");a=Math.abs(i)*n>Math.abs(a)*e?(r=(e=i<0?-e:e)*a/i,e):(r=n=a<0?-n:n)*i/a;return{x:t+r,y:o+a}},buildLayerMatrix:function(t){var o=u.map(u.range(c(t)+1),function(){return[]});return u.forEach(t.nodes(),function(e){var n=t.node(e),r=n.rank;u.isUndefined(r)||(o[r][n.order]=e)}),o},normalizeRanks:function(n){var r=u.min(u.map(n.nodes(),function(e){return n.node(e).rank}));u.forEach(n.nodes(),function(e){e=n.node(e);u.has(e,"rank")&&(e.rank-=r)})},removeEmptyRanks:function(r){var t=u.min(u.map(r.nodes(),function(e){return r.node(e).rank})),o=[];u.forEach(r.nodes(),function(e){var n=r.node(e).rank-t;o[n]||(o[n]=[]),o[n].push(e)});var a=0,i=r.graph().nodeRankFactor;u.forEach(o,function(e,n){u.isUndefined(e)&&n%i!=0?--a:a&&u.forEach(e,function(e){r.node(e).rank+=a})})},addBorderNode:function(e,n,r,t){var o={width:0,height:0};4<=arguments.length&&(o.rank=r,o.order=t);return i(e,"border",o,n)},maxRank:c,partition:function(e,n){var r={lhs:[],rhs:[]};return u.forEach(e,function(e){(n(e)?r.lhs:r.rhs).push(e)}),r},time:function(e,n){u.now();return n()},notime:function(e,n){return n()}}},88177:function(e){e.exports="0.8.5"}}]);