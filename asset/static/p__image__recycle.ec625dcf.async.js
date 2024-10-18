"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4202],{45742:function(W,E,n){n.d(E,{Z:function(){return h}});var O=n(87462),a=n(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"profile",theme:"outlined"},_=f,o=n(84089),D=function(r,T){return a.createElement(o.Z,(0,O.Z)({},r,{ref:T,icon:_}))},M=a.forwardRef(D),h=M},80821:function(W,E,n){n.d(E,{Z:function(){return m}});var O=n(5574),a=n.n(O),f=n(24963),_=n(86738),o=n(14726),D=n(83062),M=n(67294),h=n(85893);function m(r){var T=(0,M.useState)(!1),l=a()(T,2),R=l[0],t=l[1],c=(0,M.useContext)(f.Z),C=c.lang,A=c.notice,x=c.message,I=function(){t(!0),r.action().then(function(v){if(t(!1),typeof r.onSuccess=="function"&&r.onSuccess(v),r.messageSuccess){var g="";typeof r.messageSuccess=="function"?g=r.messageSuccess(v):g=r.messageSuccess,g.indexOf(".")>-1&&(g=C(g)),r.asynced?x.info(g):x.success(g)}}).catch(function(v){t(!1),typeof r.onError=="function"&&r.onError(v)})};return r.confirm?(0,h.jsx)(_.Z,{style:{width:500},title:C("notification.title.tip"),description:r.confirm,onConfirm:I,okText:"Yes",cancelText:"No",children:(0,h.jsx)(o.ZP,{disabled:r.disabled,icon:r.icon,loading:R,danger:r.danger,type:r.type,children:r.children})}):(0,h.jsx)(D.Z,{title:r.tips,children:(0,h.jsx)(o.ZP,{disabled:r.disabled,icon:r.icon,loading:R,onClick:I,danger:r.danger,type:r.type,children:r.children})})}},94359:function(W,E,n){n.d(E,{Z:function(){return R}});var O=n(67294),a=n(3089),f=n(98165),_=n(18429),o=n(8751),D=n(14313),M=n(30159),h=n(87740),m=n(66309),r=n(83062),T=n(54006),l=n(85893);function R(t){var c=(0,l.jsx)(l.Fragment,{});if(t.status=="0"&&(c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(a.Z,{}),color:"default",children:"waiting"})),t.status=="10"&&(c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(f.Z,{spin:!0}),color:"processing",children:"processing"})),t.status=="20"&&(c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(_.Z,{}),color:"error",children:"error"})),t.status=="30"&&(c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(o.Z,{}),color:"success",children:"success"})),t.status=="running"){var C,A;c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(D.Z,{}),color:"success",children:(C=t.message)!==null&&C!==void 0&&C.showInTag?(A=t.message)===null||A===void 0?void 0:A.content:t.status})}if(t.status=="paused"){var x,I;c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(M.Z,{}),children:(x=t.message)!==null&&x!==void 0&&x.showInTag?(I=t.message)===null||I===void 0?void 0:I.content:t.status})}if(t.status=="restarting"||t.status=="waiting"){var U,v;c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(h.Z,{}),children:(U=t.message)!==null&&U!==void 0&&U.showInTag?(v=t.message)===null||v===void 0?void 0:v.content:t.status})}if(t.status=="exited"||t.status=="dead"||t.status=="removing"){var g,B;c=(0,l.jsx)(m.Z,{icon:(0,l.jsx)(_.Z,{}),color:"warning",children:(g=t.message)!==null&&g!==void 0&&g.showInTag?(B=t.message)===null||B===void 0?void 0:B.content:t.status})}return t.link&&(c=(0,l.jsx)(T.Link,{to:t.link,children:c})),t.message&&(c=(0,l.jsx)(r.Z,{placement:t.message.placement,title:t.message.content,children:c})),(0,l.jsx)(l.Fragment,{children:c})}},78451:function(W,E,n){n.d(E,{Z:function(){return f}});var O=n(67294),a=n(85893);function f(_){return(0,a.jsx)("span",{style:{wordBreak:"break-word"},children:_.content})}},24963:function(W,E,n){var O=n(67294),a=(0,O.createContext)({});E.Z=a},52548:function(W,E,n){n.r(E),n.d(E,{default:function(){return K}});var O=n(15009),a=n.n(O),f=n(99289),_=n.n(f),o=n(90078),D=n(10641),M=n(37476),h=n(14726),m=n(42075),r=n(83062),T=n(66309),l=n(96074),R=n(50136),t=n(54006),c=n(18148),C=n(94359),A=n(95089),x=n(43425),I=n(45742),U=n(80821),v=n(67294),g=n(67255),B=n(78451),i=n(85893);function K(){var u=(0,v.useRef)();return(0,i.jsx)(o._z,{header:{extra:[(0,i.jsx)(h.ZP,{type:"primary",children:(0,i.jsx)(t.Link,{to:"/image/create",children:"\u521B\u5EFA\u955C\u50CF"})},"create"),(0,i.jsx)(h.ZP,{children:"\u62C9\u53D6\u955C\u50CF"},"pull")]},children:(0,i.jsx)(D.Z,{scroll:{x:"max-content"},actionRef:u,rowKey:"id",columns:[{title:"\u540D\u79F0",render:function(s,e,L,j){return(0,i.jsx)(m.Z,{direction:"vertical",style:{textAlign:"left"},children:e.imageInfo&&e.imageInfo.info.Id?(0,i.jsx)(t.Link,{to:"/image/detail/".concat(e.imageInfo.info.Id),children:(0,i.jsxs)(r.Z,{title:"\u67E5\u770B\u955C\u50CF",children:[" ",e.title]})},"detail"):e.title},e.id)}},{title:"\u6700\u65B0Tag",dataIndex:"tag",search:!1,render:function(s,e,L,j){return e.imageInfo?e.imageInfo.info.Id==""?(0,i.jsx)(T.Z,{children:"none"},"none"):(0,i.jsx)(m.Z,{direction:"vertical",style:{textAlign:"left"},children:e.imageInfo.info.RepoTags.map(function(P,Z){return(0,i.jsx)(T.Z,{color:"#2db7f5",children:P},Z)})},e.id):(0,i.jsx)(i.Fragment,{})}},{title:"\u955C\u50CFId",search:!1,copyable:!0,width:300,render:function(s,e,L,j,P){return(0,i.jsx)(B.Z,{content:e.imageInfo&&e.imageInfo.info.Id})}},{title:"\u6784\u5EFA\u72B6\u6001",width:150,ellipsis:!0,search:!1,render:function(s,e,L,j){return[(0,i.jsx)("div",{children:(0,i.jsx)(C.Z,{status:e.status},e.id)},e.id)]}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:150,render:function(s,e,L,j){return(0,i.jsxs)(m.Z,{split:(0,i.jsx)(l.Z,{type:"vertical"}),children:[(0,i.jsx)(t.Link,{to:"/image/create?id="+e.id,type:"link",children:(0,i.jsx)(r.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,i.jsx)(x.Z,{})})},"rebuild"),(0,i.jsx)(M.Y,{title:"\u6784\u5EFA\u65E5\u5FD7",submitter:!1,trigger:(0,i.jsx)(t.Link,{to:"#",children:(0,i.jsx)(r.Z,{title:"\u6784\u5EFA\u65E5\u5FD7",children:(0,i.jsx)(I.Z,{})})},e.id),children:(0,i.jsx)(A.ZP,{theme:"dark",height:"500px",value:e.message})},"log")]})}}],request:function(){var d=_()(a()().mark(function s(e,L,j){var P,Z,p;return a()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,c.Xn)({page:(P=e.current)!==null&&P!==void 0?P:1,pageSize:(Z=e.pageSize)!==null&&Z!==void 0?Z:10});case 2:return p=y.sent,y.abrupt("return",{data:p.data.list,success:!0,total:p.data.total});case 4:case"end":return y.stop()}},s)}));return function(s,e,L){return d.apply(this,arguments)}}(),pagination:(0,g.O)(),search:{collapsed:!1},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(s){var e=s.selectedRowKeys;return(0,i.jsx)(m.Z,{size:16,children:(0,i.jsx)(U.Z,{danger:!0,type:"primary",action:function(){return(0,c.$q)({id:e})},onSuccess:function(){var j,P;return!((j=u.current)===null||j===void 0)&&j.reloadAndRest&&((P=u.current)===null||P===void 0||P.reloadAndRest()),!0},onError:function(){var j,P;return!((j=u.current)===null||j===void 0)&&j.reset&&((P=u.current)===null||P===void 0||P.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},tableExtraRender:function(){return(0,i.jsx)(R.Z,{mode:"horizontal",selectedKeys:["build"],items:[{label:(0,i.jsx)(t.Link,{to:"/image/list",replace:!0,children:"\u5168\u90E8\u955C\u50CF"}),key:"all"},{label:(0,i.jsx)(t.Link,{to:"/image/list/build",replace:!0,children:"\u6784\u5EFA\u4EFB\u52A1"}),key:"build"}]})}})})}},18148:function(W,E,n){n.d(E,{$q:function(){return t},Fj:function(){return g},KG:function(){return D},KX:function(){return i},T8:function(){return l},Xn:function(){return r},ao:function(){return C},c5:function(){return U},c7:function(){return x}});var O=n(15009),a=n.n(O),f=n(99289),_=n.n(f),o=n(54006);function D(u){return M.apply(this,arguments)}function M(){return M=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return e.stop()}},u)})),M.apply(this,arguments)}function h(u){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function u(d){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),m.apply(this,arguments)}function r(u){return T.apply(this,arguments)}function T(){return T=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return e.stop()}},u)})),T.apply(this,arguments)}function l(u){return R.apply(this,arguments)}function R(){return R=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),R.apply(this,arguments)}function t(u){return c.apply(this,arguments)}function c(){return c=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),c.apply(this,arguments)}function C(u){return A.apply(this,arguments)}function A(){return A=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),A.apply(this,arguments)}function x(){return I.apply(this,arguments)}function I(){return I=_()(a()().mark(function u(){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.request)("/api/app/image/image-prune",{method:"POST"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},u)})),I.apply(this,arguments)}function U(){return v.apply(this,arguments)}function v(){return v=_()(a()().mark(function u(){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,o.request)("/api/app/image/build-prune",{method:"POST"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},u)})),v.apply(this,arguments)}function g(u){return B.apply(this,arguments)}function B(){return B=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},u)})),B.apply(this,arguments)}function i(u){return K.apply(this,arguments)}function K(){return K=_()(a()().mark(function u(d){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return e.stop()}},u)})),K.apply(this,arguments)}},67255:function(W,E,n){n.d(E,{O:function(){return O},j:function(){return a}});function O(){var f,_=parseInt((f=localStorage.getItem("dpanel-pagesize"))!==null&&f!==void 0?f:"0");return{showSizeChanger:!0,defaultPageSize:_!=null?_:20}}function a(f){var _="dpanel-table-column-".concat(f),o={};if(localStorage.getItem(_)){var D;o=JSON.parse((D=localStorage.getItem(_))!==null&&D!==void 0?D:"{}")}return{defaultValue:o,onChange:function(h){localStorage.setItem("dpanel-table-column-".concat(f),JSON.stringify(h))}}}}}]);
