(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3697"],{"5d3e":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"表格/明细",prop:"field1"}},[a("fc-input-table",{ref:"field1",attrs:{config:e.tableRefs["field1"]}})],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),a("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1),a("el-drawer",{attrs:{title:e.drawerTitle+"说明",visible:e.drawerVisible},on:{"update:visible":function(t){e.drawerVisible=t}}},[a("pre",{staticStyle:{"padding-left":"1rem"}},[e._v(e._s(e.drawerText))])])],1)},l=[],r=(a("4160"),a("b64b"),a("159b"),{components:{},props:[],data:function(){return{tableRefs:{field1:{cmpType:"common",layout:"rowFormItem",rowType:"table",tagIcon:"row",tag:"fc-input-table",type:"default",justify:"start",align:"top",label:"表格/明细",layoutTree:!1,children:[{cmpType:"common",label:"日期范围",tag:"fc-date-duration",showDuration:!1,tagIcon:"date-range",defaultValue:null,span:24,labelWidth:0,style:{width:"100%"},type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:!1,clearable:!0,required:!1,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",readonly:!1,regList:[],changeTag:!0,proCondition:!0,asSummary:!1,formId:2,renderKey:1590564647136,layout:"colFormItem",vModel:"field2",isChild:!0,childIndex:0},{cmpType:"common",label:"附件",tag:"el-upload",tagIcon:"upload",action:"https://jsonplaceholder.typicode.com/posts/",defaultValue:[],labelWidth:0,disabled:!1,required:!1,accept:"",name:"file","auto-upload":!0,showTip:!1,buttonText:"点击上传附件",fileSize:20,sizeUnit:"MB","list-type":"text",multiple:!1,regList:[],changeTag:!0,proCondition:!1,asSummary:!1,formId:3,span:24,renderKey:1590564652172,layout:"colFormItem",vModel:"field3",isChild:!0,childIndex:1}],actionText:"添加",tableConf:{},showDivider:!1,formId:1,span:24,renderKey:1590564645807,vModel:"field1",componentName:"row1",gutter:15}},drawerVisible:!1,drawerTitle:"",drawerText:"",formData:{field1Conf:{cmpType:"common",layout:"rowFormItem",rowType:"table",tagIcon:"row",tag:"fc-input-table",type:"default",justify:"start",align:"top",label:"表格/明细",layoutTree:!1,children:[{cmpType:"common",label:"日期范围",tag:"fc-date-duration",showDuration:!1,tagIcon:"date-range",defaultValue:null,span:24,labelWidth:0,style:{width:"100%"},type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",disabled:!1,clearable:!0,required:!1,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",readonly:!1,regList:[],changeTag:!0,proCondition:!0,asSummary:!1,formId:2,renderKey:1590564647136,layout:"colFormItem",vModel:"field2"},{cmpType:"common",label:"附件",tag:"el-upload",tagIcon:"upload",action:"https://jsonplaceholder.typicode.com/posts/",defaultValue:[],labelWidth:0,disabled:!1,required:!1,accept:"",name:"file","auto-upload":!0,showTip:!1,buttonText:"点击上传附件",fileSize:20,sizeUnit:"MB","list-type":"text",multiple:!1,regList:[],changeTag:!0,proCondition:!1,asSummary:!1,formId:3,span:24,renderKey:1590564652172,layout:"colFormItem",vModel:"field3"}],actionText:"添加",tableConf:{},showDivider:!1,formId:1,span:24,renderKey:1590564645807,vModel:"field1",componentName:"row1",gutter:15},field1:void 0,field2:null,field3:[]},rules:{field2:[]},field3Action:"https://jsonplaceholder.typicode.com/posts/",field3fileList:[]}},computed:{vmFormData:function(){return this.formData}},watch:{},created:function(){window._previewVm=this},mounted:function(){},methods:{submitForm:function(){var e=this;this.checkTableData()||console.log("false"),console.log(this.formData),this.$refs["elForm"].validate((function(t){t&&console.log(e.formData)}))},resetForm:function(){this.$refs["elForm"].resetFields()},checkTableData:function(){var e=this,t=!0;return Object.keys(this.tableRefs).forEach((function(a){var o=e.$refs[a].submit();o?e.formData[a]=o:t=!1})),t},showExplain:function(e,t){e&&(this.drawerTitle=t,this.drawerText=e,this.drawerVisible=!0)},field3BeforeUpload:function(e){var t=e.size/1024/1024<20;return t||this.$message.error("文件大小超过 20MB"),t}}}),i=r,d=a("2877"),n=Object(d["a"])(i,o,l,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0d3697.44d32136.js.map