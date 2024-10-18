"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1610],{80821:function(B,d,t){t.d(d,{Z:function(){return j}});var _=t(5574),r=t.n(_),i=t(24963),u=t(86738),s=t(14726),E=t(83062),h=t(67294),p=t(85893);function j(a){var D=(0,h.useState)(!1),y=r()(D,2),P=y[0],g=y[1],O=(0,h.useContext)(i.Z),C=O.lang,M=O.notice,L=O.message,R=function(){g(!0),a.action().then(function(v){if(g(!1),typeof a.onSuccess=="function"&&a.onSuccess(v),a.messageSuccess){var n="";typeof a.messageSuccess=="function"?n=a.messageSuccess(v):n=a.messageSuccess,n.indexOf(".")>-1&&(n=C(n)),a.asynced?L.info(n):L.success(n)}}).catch(function(v){g(!1),typeof a.onError=="function"&&a.onError(v)})};return a.confirm?(0,p.jsx)(u.Z,{style:{width:500},title:C("notification.title.tip"),description:a.confirm,onConfirm:R,okText:"Yes",cancelText:"No",children:(0,p.jsx)(s.ZP,{disabled:a.disabled,icon:a.icon,loading:P,danger:a.danger,type:a.type,children:a.children})}):(0,p.jsx)(E.Z,{title:a.tips,children:(0,p.jsx)(s.ZP,{disabled:a.disabled,icon:a.icon,loading:P,onClick:R,danger:a.danger,type:a.type,children:a.children})})}},78451:function(B,d,t){t.d(d,{Z:function(){return i}});var _=t(67294),r=t(85893);function i(u){return(0,r.jsx)("span",{style:{wordBreak:"break-word"},children:u.content})}},24963:function(B,d,t){var _=t(67294),r=(0,_.createContext)({});d.Z=r},99343:function(B,d,t){t.r(d),t.d(d,{default:function(){return w}});var _=t(15009),r=t.n(_),i=t(99289),u=t.n(i),s=t(90078),E=t(10641),h=t(62597),p=t(14726),j=t(83062),a=t(42075),D=t(50136),y=t(54006),P=t(87462),g=t(67294),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},C=O,M=t(84089),L=function(S,f){return g.createElement(M.Z,(0,P.Z)({},S,{ref:f,icon:C}))},R=g.forwardRef(L),I=R,v=t(96974),n=t(80821),l=t(67255),T=t(78451),e=t(85893);function w(){var W=(0,v.UO)(),S=(0,g.useRef)();return(0,g.useEffect)(function(){var f;(f=S.current)===null||f===void 0||f.reload()},[W]),(0,e.jsx)(s._z,{header:{extra:[(0,e.jsx)(p.ZP,{type:"primary",children:(0,e.jsx)(y.Link,{to:"/app/create/image",children:"\u521B\u5EFA\u5BB9\u5668"})},"create")]},children:(0,e.jsx)(E.Z,{scroll:{x:"max-content"},actionRef:S,columns:[{title:"\u540D\u79F0",dataIndex:"siteTitle"},{title:"\u6807\u8BC6",dataIndex:"siteName"},{title:"\u6700\u540E\u9519\u8BEF",dataIndex:"message",width:250,render:function(b,o,x,m,c){return(0,e.jsx)(T.Z,{content:o.message})}},{title:"\u5220\u9664\u65E5\u671F",ellipsis:!0,dataIndex:"deletedAt",search:!1,width:180,render:function(b,o,x,m,c){return new Date(o.deletedAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:100,render:function(b,o,x,m){return[(0,e.jsx)(y.Link,{to:"/app/create/image?id="+o.id,type:"link",children:(0,e.jsx)(j.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,e.jsx)(I,{})})},"rebuild")]}}],rowKey:"id",request:function(){var f=u()(r()().mark(function b(o,x,m){var c,K,U;return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,h.cl)({pageSize:(c=o.pageSize)!==null&&c!==void 0?c:10,page:(K=o.current)!==null&&K!==void 0?K:1,isDelete:!0,siteTitle:o.siteTitle,siteName:o.siteName});case 2:return U=A.sent,A.abrupt("return",{data:U.data.list,success:!0,total:U.data.total});case 4:case"end":return A.stop()}},b)}));return function(b,o,x){return f.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(b){var o=b.selectedRowKeys;return(0,e.jsx)(a.Z,{size:16,children:(0,e.jsx)(n.Z,{danger:!0,type:"primary",action:function(){return(0,h.xb)({id:o})},onSuccess:function(){var m,c;return!((m=S.current)===null||m===void 0)&&m.reloadAndRest&&((c=S.current)===null||c===void 0||c.reloadAndRest()),!0},onError:function(){var m,c;return!((m=S.current)===null||m===void 0)&&m.reset&&((c=S.current)===null||c===void 0||c.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,l.O)(),search:{collapsed:!1},tableExtraRender:function(){return(0,e.jsx)(D.Z,{mode:"horizontal",selectedKeys:["recycle"],items:[{label:(0,e.jsx)(y.Link,{to:"/app/list",replace:!0,children:"\u5BB9\u5668\u5217\u8868"}),key:"all"},{label:(0,e.jsx)(y.Link,{to:"/app/recycle",replace:!0,children:"\u56DE\u6536\u7AD9"}),key:"recycle"}]})}})})}},62597:function(B,d,t){t.d(d,{$G:function(){return E},Ct:function(){return C},Tb:function(){return a},XH:function(){return y},cl:function(){return p},iE:function(){return g},lK:function(){return I},xb:function(){return L}});var _=t(15009),r=t.n(_),i=t(99289),u=t.n(i),s=t(54006);function E(n){return h.apply(this,arguments)}function h(){return h=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/site/create-by-image",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),h.apply(this,arguments)}function p(n){return j.apply(this,arguments)}function j(){return j=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/site/get-list",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),j.apply(this,arguments)}function a(n){return D.apply(this,arguments)}function D(){return D=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.download=!1,e.next=3,(0,s.request)("/api/app/log/run",{method:"POST",data:l});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},n)})),D.apply(this,arguments)}function y(n){return P.apply(this,arguments)}function P(){return P=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.download=!0,e.next=3,(0,s.request)("/api/app/log/run",{method:"POST",data:l,responseType:"blob"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},n)})),P.apply(this,arguments)}function g(n){return O.apply(this,arguments)}function O(){return O=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.request)("/api/app/site/get-detail",{data:l,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},n)})),O.apply(this,arguments)}function C(n){return M.apply(this,arguments)}function M(){return M=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/delete",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),M.apply(this,arguments)}function L(n){return R.apply(this,arguments)}function R(){return R=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/site/delete",{method:"POST",data:l}));case 1:case"end":return e.stop()}},n)})),R.apply(this,arguments)}function I(n){return v.apply(this,arguments)}function v(){return v=u()(r()().mark(function n(l){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.request)("/api/app/site/update-title",{method:"POST",data:l});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},n)})),v.apply(this,arguments)}},67255:function(B,d,t){t.d(d,{O:function(){return _},j:function(){return r}});function _(){var i,u=parseInt((i=localStorage.getItem("dpanel-pagesize"))!==null&&i!==void 0?i:"0");return{showSizeChanger:!0,defaultPageSize:u!=null?u:20}}function r(i){var u="dpanel-table-column-".concat(i),s={};if(localStorage.getItem(u)){var E;s=JSON.parse((E=localStorage.getItem(u))!==null&&E!==void 0?E:"{}")}return{defaultValue:s,onChange:function(p){localStorage.setItem("dpanel-table-column-".concat(i),JSON.stringify(p))}}}}}]);
