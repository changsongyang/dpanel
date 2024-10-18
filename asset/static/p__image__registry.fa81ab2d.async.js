"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9013],{5966:function(U,p,e){var E=e(97685),n=e(1413),v=e(45987),i=e(21770),f=e(72723),y=e(55241),P=e(97435),R=e(67294),c=e(61856),t=e(85893),h=["fieldProps","proFieldProps"],j=["fieldProps","proFieldProps"],m="text",s=function(l){var a=l.fieldProps,g=l.proFieldProps,d=(0,v.Z)(l,h);return(0,t.jsx)(c.Z,(0,n.Z)({valueType:m,fieldProps:a,filedConfig:{valueType:m},proFieldProps:g},d))},r=function(l){var a=(0,i.Z)(l.open||!1,{value:l.open,onChange:l.onOpenChange}),g=(0,E.Z)(a,2),d=g[0],K=g[1];return(0,t.jsx)(f.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(b){var _,B=b.getFieldValue(l.name||[]);return(0,t.jsx)(y.Z,(0,n.Z)((0,n.Z)({getPopupContainer:function(u){return u&&u.parentNode?u.parentNode:u},onOpenChange:function(u){return K(u)},content:(0,t.jsxs)("div",{style:{padding:"4px 0"},children:[(_=l.statusRender)===null||_===void 0?void 0:_.call(l,B),l.strengthText?(0,t.jsx)("div",{style:{marginTop:10},children:(0,t.jsx)("span",{children:l.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},l.popoverProps),{},{open:d,children:l.children}))}})},M=function(l){var a=l.fieldProps,g=l.proFieldProps,d=(0,v.Z)(l,j),K=(0,R.useState)(!1),L=(0,E.Z)(K,2),b=L[0],_=L[1];return a!=null&&a.statusRender&&d.name?(0,t.jsx)(r,{name:d.name,statusRender:a==null?void 0:a.statusRender,popoverProps:a==null?void 0:a.popoverProps,strengthText:a==null?void 0:a.strengthText,open:b,onOpenChange:_,children:(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,(0,n.Z)({valueType:"password",fieldProps:(0,n.Z)((0,n.Z)({},(0,P.Z)(a,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(x){var u;a==null||(u=a.onBlur)===null||u===void 0||u.call(a,x),_(!1)},onClick:function(x){var u;a==null||(u=a.onClick)===null||u===void 0||u.call(a,x),_(!0)}}),proFieldProps:g,filedConfig:{valueType:m}},d))})}):(0,t.jsx)(c.Z,(0,n.Z)({valueType:"password",fieldProps:a,proFieldProps:g,filedConfig:{valueType:m}},d))},o=s;o.Password=M,o.displayName="ProFormComponent",p.Z=o},90672:function(U,p,e){var E=e(1413),n=e(45987),v=e(67294),i=e(61856),f=e(85893),y=["fieldProps","proFieldProps"],P=function(c,t){var h=c.fieldProps,j=c.proFieldProps,m=(0,n.Z)(c,y);return(0,f.jsx)(i.Z,(0,E.Z)({ref:t,valueType:"textarea",fieldProps:h,proFieldProps:j},m))};p.Z=v.forwardRef(P)},80821:function(U,p,e){e.d(p,{Z:function(){return c}});var E=e(5574),n=e.n(E),v=e(24963),i=e(86738),f=e(14726),y=e(83062),P=e(67294),R=e(85893);function c(t){var h=(0,P.useState)(!1),j=n()(h,2),m=j[0],s=j[1],r=(0,P.useContext)(v.Z),M=r.lang,o=r.notice,Z=r.message,l=function(){s(!0),t.action().then(function(g){if(s(!1),typeof t.onSuccess=="function"&&t.onSuccess(g),t.messageSuccess){var d="";typeof t.messageSuccess=="function"?d=t.messageSuccess(g):d=t.messageSuccess,d.indexOf(".")>-1&&(d=M(d)),t.asynced?Z.info(d):Z.success(d)}}).catch(function(g){s(!1),typeof t.onError=="function"&&t.onError(g)})};return t.confirm?(0,R.jsx)(i.Z,{style:{width:500},title:M("notification.title.tip"),description:t.confirm,onConfirm:l,okText:"Yes",cancelText:"No",children:(0,R.jsx)(f.ZP,{disabled:t.disabled,icon:t.icon,loading:m,danger:t.danger,type:t.type,children:t.children})}):(0,R.jsx)(y.Z,{title:t.tips,children:(0,R.jsx)(f.ZP,{disabled:t.disabled,icon:t.icon,loading:m,onClick:l,danger:t.danger,type:t.type,children:t.children})})}},24963:function(U,p,e){var E=e(67294),n=(0,E.createContext)({});p.Z=n},24396:function(U,p,e){e.r(p),e.d(p,{default:function(){return b}});var E=e(15009),n=e.n(E),v=e(99289),i=e.n(v),f=e(80821),y=e(5574),P=e.n(y),R=e(24963),c=e(75870),t=e(184),h=e(5966),j=e(90672),m=e(14726),s=e(67294),r=e(85893),M=(0,s.forwardRef)(function(_,B){var x=(0,s.useState)(!1),u=P()(x,2),A=u[0],S=u[1],D=(0,s.useRef)(),C=(0,s.useState)(0),$=P()(C,2),O=$[0],V=$[1],H=(0,s.useContext)(R.Z),J=H.notice;return(0,s.useImperativeHandle)(B,function(){return{setEditId:function(T){(0,c.t1)({id:T}).then(function(F){var I;S(!0),V(T),(I=D.current)===null||I===void 0||I.setFieldsValue({title:F.data.info.title,serverAddress:F.data.info.serverAddress,username:F.data.info.setting.username,proxy:F.data.info.setting.proxy.join(`
`)})})}}}),(0,r.jsxs)(t.a,{drawerProps:{forceRender:!0},name:"create",title:"\u6DFB\u52A0/\u7F16\u8F91\u955C\u50CF\u4ED3\u5E93",open:A,onOpenChange:function(T){S(T)},formRef:D,trigger:(0,r.jsx)(m.ZP,{type:"primary",onClick:function(){var T;(T=D.current)===null||T===void 0||T.resetFields(),V(0)},children:"\u6DFB\u52A0\u4ED3\u5E93"}),onFinish:function(){var w=i()(n()().mark(function T(F){var I,N,z,G;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,(0,c.ZH)({id:O,title:F.title,serverAddress:F.serverAddress,username:(I=F.username)!==null&&I!==void 0?I:"",password:(N=F.password)!==null&&N!==void 0?N:"",proxy:F.proxy?F.proxy.split(`
`):[]});case 2:if(z=W.sent,!(z&&z.data&&z.data.id>0)){W.next=8;break}return J.success("\u6DFB\u52A0\u6216\u662F\u7F16\u8F91\u955C\u50CF\u4ED3\u5E93\u6210\u529F"),_.onFinish&&_.onFinish(),(G=D.current)===null||G===void 0||G.resetFields(),W.abrupt("return",!0);case 8:case"end":return W.stop()}},T)}));return function(T){return w.apply(this,arguments)}}(),children:[(0,r.jsx)(h.Z,{label:"\u540D\u79F0",name:"title",placeholder:"\u6307\u5B9A\u4ED3\u5E93\u4E00\u4E2A\u540D\u79F0",disabled:O==-1,required:!0}),(0,r.jsx)(h.Z,{label:"\u4ED3\u5E93\u5730\u5740",tooltip:"\u4F8B\u5982:ccr.ccs.tencentyun.com\uFF0Cdocker.io",name:"serverAddress",placeholder:"\u586B\u5199\u4ED3\u5E93\u5730\u5740\uFF0C\u5B98\u65B9\u9ED8\u8BA4\u7559\u7A7A",disabled:O==-1}),(0,r.jsx)(h.Z,{label:"\u7528\u6237\u540D",name:"username",placeholder:"\u914D\u7F6E\u4ED3\u5E93\u7528\u6237\u540D",tooltip:""},"username"),(0,r.jsx)(h.Z.Password,{label:"\u5BC6\u7801",name:"password",placeholder:"\u914D\u7F6E\u4ED3\u5E93\u5BC6\u7801,\u4E3A\u7A7A\u65F6\u4F7F\u7528\u65E7\u5BC6\u7801"},"password"),(0,r.jsx)(j.Z,{label:"\u52A0\u901F\u5730\u5740",name:"proxy",fieldProps:{autoSize:{minRows:10}},placeholder:`https://docker.1panel.live 
https://docker.m.daocloud.io`,tooltip:"\u914D\u7F6E\u8BE5\u4ED3\u5E93\u7684\u52A0\u901F\u5730\u5740\uFF0C\u591A\u4E2A\u5730\u5740\u7528\u6362\u884C\u5206\u9694\u3002\u591A\u4E2A\u5730\u5740\u91C7\u7528\u8F6E\u8BAD\u7684\u65B9\u5F0F\u4E0B\u8F7D"})]})}),o=M,Z=e(67255),l=e(43425),a=e(90078),g=e(10641),d=e(42075),K=e(96074),L=e(83062);function b(){var _=(0,s.useRef)(),B=(0,s.useRef)();return(0,r.jsx)(a._z,{header:{extra:[(0,r.jsx)(o,{onFinish:function(){var u,A;!((u=_.current)===null||u===void 0)&&u.reloadAndRest&&((A=_.current)===null||A===void 0||A.reloadAndRest())},ref:B})]},children:(0,r.jsx)(g.Z,{scroll:{x:"max-content"},rowKey:"id",columns:[{title:"\u540D\u79F0",ellipsis:!0,dataIndex:"title"},{title:"Url",dataIndex:"serverAddress"},{title:"\u7528\u6237",dataIndex:["setting","username"]},{title:"\u64CD\u4F5C",width:100,render:function(u,A,S,D,C){return(0,r.jsx)(d.Z,{split:(0,r.jsx)(K.Z,{type:"vertical"}),children:(0,r.jsx)(m.ZP,{type:"link",onClick:function(){var O;(O=B.current)===null||O===void 0||O.setEditId(A.id)},children:(0,r.jsx)(L.Z,{title:"\u7BA1\u7406",children:(0,r.jsx)(l.Z,{})})})})}}],request:function(){var x=i()(n()().mark(function u(A,S,D){var C;return n()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,c.Ot)({title:A.title,serverAddress:A.serverAddress});case 2:return C=O.sent,O.abrupt("return",{data:C.data.list,success:!0,total:C.data.list.length});case 4:case"end":return O.stop()}},u)}));return function(u,A,S){return x.apply(this,arguments)}}(),toolBarRender:function(){return[]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},pagination:(0,Z.O)(),actionRef:_,tableAlertOptionRender:function(u){var A=u.selectedRowKeys;return(0,r.jsx)(d.Z,{size:16,children:(0,r.jsx)(f.Z,{danger:!0,type:"primary",action:function(){return(0,c.ix)({id:A})},onSuccess:function(){var D,C;return!((D=_.current)===null||D===void 0)&&D.reloadAndRest&&((C=_.current)===null||C===void 0||C.reloadAndRest()),!0},onError:function(){var D,C;return!((D=_.current)===null||D===void 0)&&D.reset&&((C=_.current)===null||C===void 0||C.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})}})})}},75870:function(U,p,e){e.d(p,{Ot:function(){return y},ZH:function(){return R},ix:function(){return t},t1:function(){return j}});var E=e(15009),n=e.n(E),v=e(99289),i=e.n(v),f=e(54006);function y(s){return P.apply(this,arguments)}function P(){return P=i()(n()().mark(function s(r){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,f.request)("/api/common/registry/get-list",{method:"POST",data:r}));case 1:case"end":return o.stop()}},s)})),P.apply(this,arguments)}function R(s){return c.apply(this,arguments)}function c(){return c=i()(n()().mark(function s(r){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,f.request)("/api/common/registry/create",{method:"POST",data:r}));case 1:case"end":return o.stop()}},s)})),c.apply(this,arguments)}function t(s){return h.apply(this,arguments)}function h(){return h=i()(n()().mark(function s(r){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,f.request)("/api/common/registry/delete",{method:"POST",data:r}));case 1:case"end":return o.stop()}},s)})),h.apply(this,arguments)}function j(s){return m.apply(this,arguments)}function m(){return m=i()(n()().mark(function s(r){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,f.request)("/api/common/registry/get-detail",{method:"POST",data:r}));case 1:case"end":return o.stop()}},s)})),m.apply(this,arguments)}},67255:function(U,p,e){e.d(p,{O:function(){return E},j:function(){return n}});function E(){var v,i=parseInt((v=localStorage.getItem("dpanel-pagesize"))!==null&&v!==void 0?v:"0");return{showSizeChanger:!0,defaultPageSize:i!=null?i:20}}function n(v){var i="dpanel-table-column-".concat(v),f={};if(localStorage.getItem(i)){var y;f=JSON.parse((y=localStorage.getItem(i))!==null&&y!==void 0?y:"{}")}return{defaultValue:f,onChange:function(R){localStorage.setItem("dpanel-table-column-".concat(v),JSON.stringify(R))}}}}}]);
