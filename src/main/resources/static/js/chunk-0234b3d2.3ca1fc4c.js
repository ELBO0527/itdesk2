(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0234b3d2"],{1681:function(t,s,e){},b0f2:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-sheet",{attrs:{color:"grey lighten-3",height:"280"}},[e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"pa-3",attrs:{cols:"6",md:"3"}},[e("div",{attrs:{color:"grey lighten-3",align:"center",justify:"center",width:"420"}},[e("h1",[t._v("문의하기")])])])],1)],1)],1),e("v-form",{model:{value:t.valid,callback:function(s){t.valid=s},expression:"valid"}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-tabs",[e("v-tab",[t._v(" 문의 하기 ")]),e("v-tab",{attrs:{to:"/help-list"}},[t._v(" 문의 내용 보기 ")])],1)],1),e("v-row",{staticClass:"mx-24"},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("div",{staticClass:"pa-12",attrs:{justify:"center",align:"center"}},[e("h2",[t._v("양식을 작성해주세요")])]),e("v-sheet",{attrs:{height:"120"}},[e("v-row",[e("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[e("v-sheet",{attrs:{align:"center",justify:"center"}},[e("h4",[t._v("이메일 주소")])])],1),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[e("v-row",[e("v-text-field",{attrs:{label:"이메일 주소를 입력하세요.",solo:"",dense:"","full-width":"200"}}),e("v-list-item-subtitle",[t._v("*답변 등록 시 연락받을 이메일 주소를 입력하세요.")])],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-sheet",{attrs:{height:"120"}},[e("v-row",[e("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[e("v-sheet",{attrs:{align:"center",justify:"center"}},[e("h4",[t._v("휴대폰 번호")])])],1),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[e("v-row",[e("v-text-field",{attrs:{label:"'-'을 제외한 휴대폰 번호를 입력하세요.",solo:"",dense:""}}),e("v-list-item-subtitle",[t._v("*'-'을 제외한 휴대폰 번호를 입력하세요.")])],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-sheet",{attrs:{height:"120"}},[e("v-row",[e("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[e("v-sheet",{attrs:{align:"center",justify:"center"}},[e("h4",[t._v("문의 유형")])])],1),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"5"}},[e("v-row",[e("v-select",{attrs:{items:t.items,label:"문의 유형","hide-details":"",solo:""}}),e("v-select",{staticClass:"px-4",attrs:{items:t.items,label:"ass",solo:"","hide-details":""}}),e("v-list-item-subtitle",{staticClass:"pt-4"},[t._v("*문의 유형을 선택하세요")])],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-sheet",{attrs:{height:"120"}},[e("v-row",[e("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[e("v-sheet",{attrs:{align:"center",justify:"center"}},[e("h4",[t._v("제목")])])],1),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[e("v-row",[e("v-text-field",{attrs:{label:"제목을 입력하세요.",solo:"",dense:""}}),e("v-list-item-subtitle",[t._v("*제목을 입력하세요")])],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-sheet",{attrs:{height:"280"}},[e("v-row",[e("v-col",{staticClass:"pa-4",attrs:{cols:"3",md:"5"}},[e("v-sheet",{attrs:{align:"center",justify:"center"}},[e("h4",[t._v("내용")])])],1),e("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"5"}},[e("v-textarea",{attrs:{solo:"",name:"input-7-4",label:"내용"}})],1)],1),e("v-row",[e("v-col",{attrs:{align:"center",justify:"center"}},[e("v-btn",{attrs:{color:"primary"}},[t._v(" 문의하기")])],1)],1)],1)],1)],1)],1)],1)],1)},l=[],i=e("2877"),o=e("6544"),r=e.n(o),c=e("8336"),n=e("62ad"),v=e("4bd4"),h=e("5d23"),u=e("0fd9"),d=e("b974"),f=e("8dd9"),m=e("71a3"),p=e("fe57"),w=e("8654"),g=e("5530"),b=(e("a9e3"),e("1681"),e("58df")),x=Object(b["a"])(w["a"]),y=x.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(g["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},w["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var s=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,s)+"px"}},genInput:function(){var t=w["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){w["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),C={},_=Object(i["a"])(C,a,l,!1,null,null,null);s["default"]=_.exports;r()(_,{VBtn:c["a"],VCol:n["a"],VForm:v["a"],VListItemSubtitle:h["b"],VRow:u["a"],VSelect:d["a"],VSheet:f["a"],VTab:m["a"],VTabs:p["a"],VTextField:w["a"],VTextarea:y})}}]);
//# sourceMappingURL=chunk-0234b3d2.3ca1fc4c.js.map