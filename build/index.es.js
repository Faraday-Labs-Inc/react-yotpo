import t,{useMemo as r,useEffect as e,Fragment as n}from"react";function o(t){if(!t)return null;try{return Buffer.from(t,"base64").toString("ascii").split("/").pop()}catch(r){return console.error("Could not decode productId: "+t,r.message),null}}function i(t){void 0===t&&(t=200);var n=r((function(){var r,e,n,o,i=window.yotpo?window.yotpo.refreshWidgets.bind(window.yotpo):function(){};return r=i,e=t,function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var a=this,c=function(){o=null,n||r.apply(a,t)},d=n&&!o;clearTimeout(o),o=setTimeout(c,e),d&&r.apply(a,t)}}),[t]);e((function(){"undefined"!=typeof window&&window.yotpo&&n()}),[n])}var a=function(e){var n=e.productId;i();var a=r((function(){return o(n)}),[n]);return t.createElement("div",{className:"yotpo bottomLine","data-product-id":a})},c=function(e){var n=e.product,a=e.price,c=void 0===a?"":a,d=e.urlPath,u=void 0===d?"":d;i();var p=r((function(){return o(n.id.toString())}),[n.id]);return t.createElement("div",{className:"yotpo yotpo-main-widget","data-product-id":p,"data-price":c,"data-currency":n.price.currencyCode,"data-name":n.name,"data-url":""+window.location.origin+u,"data-image-url":n.images[0].url,"data-description":n.description})},d=[{src:"//staticw2.yotpo.com/"+process.env.YOTPO_API_KEY+"/widget.js",type:"text/javascript",defer:!0}],u=function(){return t.createElement(n,null,d.map((function(r){return t.createElement("script",{key:r.src,src:r.src,async:r.async,defer:r.defer,type:r.type})})))};export{d as YOTPO_SCRIPTS,c as YotpoReviews,u as YotpoScripts,a as YotpoStarRating,i as useYotpoRefresh};
//# sourceMappingURL=index.es.js.map
