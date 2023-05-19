"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[9456],{69575:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S});var r=o(69307),a=o(65736),i=o(7862),c=o.n(i),s=o(92694),l=o(9818),n=o(75606),m=o(68734);const{addCesSurveyForAnalytics:u}=(0,l.dispatch)(n.STORE_KEY),d=(0,s.applyFilters)("woocommerce_admin_variations_report_charts",[{key:"items_sold",label:(0,a.__)("Items sold","woocommerce"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:(0,a.__)("Net sales","woocommerce"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:(0,a.__)("Orders","woocommerce"),order:"desc",orderby:"orders_count",type:"number"}]),_=(0,s.applyFilters)("woocommerce_admin_variations_report_filters",[{label:(0,a.__)("Show","woocommerce"),staticParams:["chartType","paged","per_page"],param:"filter-variations",showFilters:()=>!0,filters:[{label:(0,a.__)("All variations","woocommerce"),chartMode:"item-comparison",value:"all"},{label:(0,a.__)("Single variation","woocommerce"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:m.uC,labels:{placeholder:(0,a.__)("Type to search for a variation","woocommerce"),button:(0,a.__)("Single variation","woocommerce")}}}]},{label:(0,a.__)("Comparison","woocommerce"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:m.uC,labels:{helpText:(0,a.__)("Check at least two variations below to compare","woocommerce"),placeholder:(0,a.__)("Search for variations to compare","woocommerce"),title:(0,a.__)("Compare Variations","woocommerce"),update:(0,a.__)("Compare","woocommerce")},onClick:u}},{label:(0,a.__)("Advanced filters","woocommerce"),value:"advanced"}]}]),p=(0,s.applyFilters)("woocommerce_admin_variations_report_advanced_filters",{title:(0,a._x)("Variations match {{select /}} filters","A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce"),filters:{attribute:{allowMultiple:!0,labels:{add:(0,a.__)("Attribute","woocommerce"),placeholder:(0,a.__)("Search attributes","woocommerce"),remove:(0,a.__)("Remove attribute filter","woocommerce"),rule:(0,a.__)("Select a product attribute filter match","woocommerce"),title:(0,a.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce"),filter:(0,a.__)("Select attributes","woocommerce")},rules:[{value:"is",label:(0,a._x)("Is","product attribute","woocommerce")},{value:"is_not",label:(0,a._x)("Is Not","product attribute","woocommerce")}],input:{component:"ProductAttribute"}},category:{labels:{add:(0,a.__)("Categories","woocommerce"),placeholder:(0,a.__)("Search categories","woocommerce"),remove:(0,a.__)("Remove categories filter","woocommerce"),rule:(0,a.__)("Select a category filter match","woocommerce"),title:(0,a.__)("{{title}}Category{{/title}} {{rule /}} {{filter /}}","woocommerce"),filter:(0,a.__)("Select categories","woocommerce")},rules:[{value:"includes",label:(0,a._x)("Includes","categories","woocommerce")},{value:"excludes",label:(0,a._x)("Excludes","categories","woocommerce")}],input:{component:"Search",type:"categories",getLabels:m.YC}},product:{labels:{add:(0,a.__)("Products","woocommerce"),placeholder:(0,a.__)("Search products","woocommerce"),remove:(0,a.__)("Remove products filter","woocommerce"),rule:(0,a.__)("Select a product filter match","woocommerce"),title:(0,a.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce"),filter:(0,a.__)("Select products","woocommerce")},rules:[{value:"includes",label:(0,a._x)("Includes","products","woocommerce")},{value:"excludes",label:(0,a._x)("Excludes","products","woocommerce")}],input:{component:"Search",type:"variableProducts",getLabels:m.oC}}}});var v=o(62409),b=o(43707),w=o(5945),y=o(50933),h=o(36526),g=o(27410);const f=e=>{const{itemsLabel:t,mode:o}=(e=>{let{query:t}=e;const o="compare-variations"===t["filter-variations"]&&t.variations&&t.variations.split(",").length>1;return{compareObject:"variations",itemsLabel:(0,a.__)("%d variations","woocommerce"),mode:o?"item-comparison":"time-comparison"}})(e),{path:i,query:c,isError:s,isRequesting:l}=e;if(s)return(0,r.createElement)(w.Z,null);const n={...c};return"item-comparison"===o&&(n.segmentby="variation"),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(g.Z,{query:c,path:i,filters:_,advancedFilters:p,report:"variations"}),(0,r.createElement)(y.Z,{mode:o,charts:d,endpoint:"variations",isRequesting:l,query:n,selectedChart:(0,v.Z)(c.chart,d),filters:_,advancedFilters:p}),(0,r.createElement)(b.Z,{charts:d,mode:o,filters:_,advancedFilters:p,endpoint:"variations",isRequesting:l,itemsLabel:t,path:i,query:n,selectedChart:(0,v.Z)(n.chart,d)}),(0,r.createElement)(h.Z,{isRequesting:l,query:c,filters:_,advancedFilters:p}))};f.propTypes={path:c().string.isRequired,query:c().object.isRequired};const S=f},36526:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(69307),a=o(65736),i=o(92694),c=o(92819),s=o(86020),l=o(10431),n=o(81595),m=o(74617),u=o(17844),d=o(39705),_=o(59714),p=o(68734),v=o(79205);const b=(0,v.O3)("manageStock","no"),w=(0,v.O3)("stockStatuses",{});class y extends r.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,a.__)("Product / Variation title","woocommerce"),key:"name",required:!0,isLeftAligned:!0},{label:(0,a.__)("SKU","woocommerce"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:(0,a.__)("Items sold","woocommerce"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Net sales","woocommerce"),screenReaderLabel:(0,a.__)("Net sales","woocommerce"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Orders","woocommerce"),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===b?{label:(0,a.__)("Status","woocommerce"),key:"stock_status"}:null,"yes"===b?{label:(0,a.__)("Stock","woocommerce"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{query:t}=this.props,o=(0,l.getPersistedQuery)(t),{formatAmount:i,formatDecimal:u,getCurrencyConfig:d}=this.context;return(0,c.map)(e,(e=>{const{items_sold:t,net_revenue:c,orders_count:v,product_id:y,variation_id:h}=e,g=e.extended_info||{},{stock_status:f,stock_quantity:S,low_stock_amount:C,deleted:k,sku:x}=g,q=(R=e,(0,p.V1)(R.extended_info||{}));var R;const F=(0,l.getNewPath)(o,"/analytics/orders",{filter:"advanced",variation_includes:h}),E=(0,m.getAdminLink)(`post.php?post=${y}&action=edit`);return[{display:k?q+" "+(0,a.__)("(Deleted)","woocommerce"):(0,r.createElement)(s.Link,{href:E,type:"wp-admin"},q),value:q},{display:x,value:x},{display:(0,n.formatValue)(d(),"number",t),value:t},{display:i(c),value:u(c)},{display:(0,r.createElement)(s.Link,{href:F,type:"wc-admin"},v),value:v},"yes"===b?{display:(0,_.d)(f,S,C)?(0,r.createElement)(s.Link,{href:E,type:"wp-admin"},(0,a._x)("Low","Indication of a low quantity","woocommerce")):w[f],value:w[f]}:null,"yes"===b?{display:S,value:S}:null].filter(Boolean)}))}getSummary(e){const{query:t}=this.props,{variations_count:o=0,items_sold:r=0,net_revenue:c=0,orders_count:s=0}=e,{formatAmount:l,getCurrencyConfig:m}=this.context,u=m();return[{label:(0,i.applyFilters)("experimental_woocommerce_admin_variations_report_table_summary_variations_count_label",(0,a._n)("variation sold","variations sold",o,"woocommerce"),o,t),value:(0,n.formatValue)(u,"number",o)},{label:(0,a._n)("item sold","items sold",r,"woocommerce"),value:(0,n.formatValue)(u,"number",r)},{label:(0,a.__)("net sales","woocommerce"),value:l(c)},{label:(0,a._n)("orders","orders",s,"woocommerce"),value:(0,n.formatValue)(u,"number",s)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:o,isRequesting:c,query:s}=this.props,l={helpText:(0,a.__)("Check at least two variations below to compare","woocommerce"),placeholder:(0,a.__)("Search by variation name or SKU","woocommerce")};return(0,r.createElement)(d.Z,{baseSearchQuery:t,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:c,itemIdField:"variation_id",labels:l,query:s,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],tableQuery:{orderby:s.orderby||"items_sold",order:s.order||"desc",extended_info:!0,product_includes:s.product_includes,variations:s.variations},title:(0,i.applyFilters)("experimental_woocommerce_admin_variations_report_table_title",(0,a.__)("Variations","woocommerce"),s),columnPrefsKey:"variations_report_columns",filters:o,advancedFilters:e})}}y.contextType=u.CurrencyContext;const h=y}}]);