(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cd0f183"],{1681:function(t,e,s){},"4bd4":function(t,e,s){"use strict";var a=s("5530"),i=(s("caad"),s("2532"),s("07ac"),s("4de4"),s("159b"),s("7db0"),s("58df")),r=s("7e2b"),o=s("3206");e["a"]=Object(i["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,s=function(t){return t.$watch("hasError",(function(s){e.$set(e.errorBag,t._uid,s)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=s(t)))})):a.valid=s(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var s=this.watchers.find((function(t){return t._uid===e._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},b0f2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-sheet",{attrs:{color:"grey lighten-3",height:"280"}},[s("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"pa-3",attrs:{cols:"6",md:"3"}},[s("div",{attrs:{color:"grey lighten-3",align:"center",justify:"center",width:"420"}},[s("h1",[t._v("문의하기")])])])],1)],1)],1),s("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-tabs",[s("v-tab",[t._v(" 문의 하기 ")]),s("v-tab",{attrs:{to:"/help-list"}},[t._v(" 문의 내용 보기 ")])],1)],1),s("v-row",{staticClass:"mx-24"},[s("v-col",{attrs:{cols:"12",md:"12"}},[s("div",{staticClass:"pa-12",attrs:{justify:"center",align:"center"}},[s("h2",[t._v("양식을 작성해주세요")])]),s("v-sheet",{attrs:{height:"120"}},[s("v-row",[s("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[s("v-sheet",{attrs:{align:"center",justify:"center"}},[s("h4",[t._v("이메일 주소")])])],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[s("v-row",[s("v-text-field",{attrs:{label:"이메일 주소를 입력하세요.",solo:"",dense:"","full-width":"200"}}),s("v-list-item-subtitle",[t._v("*답변 등록 시 연락받을 이메일 주소를 입력하세요.")])],1)],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-sheet",{attrs:{height:"120"}},[s("v-row",[s("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[s("v-sheet",{attrs:{align:"center",justify:"center"}},[s("h4",[t._v("휴대폰 번호")])])],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[s("v-row",[s("v-text-field",{attrs:{label:"'-'을 제외한 휴대폰 번호를 입력하세요.",solo:"",dense:""}}),s("v-list-item-subtitle",[t._v("*'-'을 제외한 휴대폰 번호를 입력하세요.")])],1)],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-sheet",{attrs:{height:"120"}},[s("v-row",[s("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[s("v-sheet",{attrs:{align:"center",justify:"center"}},[s("h4",[t._v("문의 유형")])])],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"5"}},[s("v-row",[s("v-select",{attrs:{items:t.items,label:"문의 유형","hide-details":"",solo:""}}),s("v-select",{staticClass:"px-4",attrs:{items:t.items,label:"ass",solo:"","hide-details":""}}),s("v-list-item-subtitle",{staticClass:"pt-4"},[t._v("*문의 유형을 선택하세요")])],1)],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-sheet",{attrs:{height:"120"}},[s("v-row",[s("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[s("v-sheet",{attrs:{align:"center",justify:"center"}},[s("h4",[t._v("제목")])])],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[s("v-row",[s("v-text-field",{attrs:{label:"제목을 입력하세요.",solo:"",dense:""}}),s("v-list-item-subtitle",[t._v("*제목을 입력하세요")])],1)],1)],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"12"}},[s("v-sheet",{attrs:{height:"280"}},[s("v-row",[s("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[s("v-sheet",{attrs:{align:"center",justify:"center"}},[s("h4",[t._v("내용")])])],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"5"}},[s("v-textarea",{attrs:{solo:"",name:"input-7-4",label:"내용"}})],1)],1),s("v-row",[s("v-col",{attrs:{align:"center",justify:"center"}},[s("v-btn",{attrs:{color:"primary"}},[t._v(" 문의하기")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],r=s("2877"),o=s("6544"),n=s.n(o),l=s("8336"),c=s("62ad"),u=s("4bd4"),h=s("5d23"),d=s("0fd9"),v=s("b974"),f=s("8dd9"),p=s("71a3"),m=s("fe57"),w=s("8654"),g=s("5530"),b=(s("a9e3"),s("1681"),s("58df")),_=Object(b["a"])(w["a"]),x=_.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(g["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},w["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=w["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){w["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),y={},V=Object(r["a"])(y,a,i,!1,null,null,null);e["default"]=V.exports;n()(V,{VBtn:l["a"],VCol:c["a"],VForm:u["a"],VListItemSubtitle:h["b"],VRow:d["a"],VSelect:v["a"],VSheet:f["a"],VTab:p["a"],VTabs:m["a"],VTextField:w["a"],VTextarea:x})}}]);
//# sourceMappingURL=chunk-5cd0f183.e01aa129.js.map