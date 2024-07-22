(function(){"use strict";var A={8506:function(A,e,t){var a=t(5130),l=t(6768),n=t(4232),o=(t(4114),t(144)),r=t(1387);const s={class:"header-wrapper"},i={class:"header-menu flex-center"};var c={__name:"Header",setup(A){const e=(0,r.rd)(),t=(0,r.lq)(),a=(0,o.KR)(!1),c=(0,l.EW)((()=>t.path.split("/")[1]));function u(A){e.push(`/${A}`)}function g(){let A=window.scrollY;a.value=A>=100}return(0,l.sV)((()=>{window.addEventListener("scroll",g)})),(A,e)=>((0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",{class:(0,n.C4)(["header-container",{active:!0===a.value}])},[(0,l.Lk)("div",i,[(0,l.Lk)("p",{onClick:e[0]||(e[0]=A=>u("")),class:(0,n.C4)({"color-main":""===c.value})},"Main",2),(0,l.Lk)("p",{onClick:e[1]||(e[1]=A=>u("market")),class:(0,n.C4)({"color-main":"market"===c.value})},"Market",2),(0,l.Lk)("p",{onClick:e[2]||(e[2]=A=>u("chart")),class:(0,n.C4)({"color-main":"chart"===c.value})},"Chart",2),(0,l.Lk)("p",{onClick:e[3]||(e[3]=A=>u("news/all")),class:(0,n.C4)({"color-main":"news"===c.value})},"News",2)])],2)]))}};const u=c;var g=u,v={__name:"App",setup(A){const e=(0,r.lq)(),t=(0,o.KR)(e.fullPath.split("/")[1]);return(0,l.wB)((()=>e.fullPath),(A=>{t.value=A.split("/")[1]})),(A,e)=>{const a=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",{class:(0,n.C4)(["wrapper",{"all-news":"news"===t.value}])},[(0,l.bF)(g),(0,l.bF)(a)],2)}}};const E=v;var d=E,p="data:image/png;base64,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8ulPIcAYODzs/nFsNBrHvk53UvS6nn6srq52/SYvAGCymYIFAADECBAAACDGFCwAACDGX0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAzP8AVYql9uCoByQAAAAASUVORK5CYII=";const C=A=>((0,l.Qi)("data-v-9d60647a"),A=A(),(0,l.jt)(),A),I=C((()=>(0,l.Lk)("img",{src:p},null,-1)));function B(A,e){return(0,l.uX)(),(0,l.CE)("div",null,[I,(0,l.Lk)("button",{class:"not-found-btn",onClick:e[0]||(e[0]=e=>A.$router.push("/"))},"Go to HomePage")])}var m=t(1241);const f={},w=(0,m.A)(f,[["render",B],["__scopeId","data-v-9d60647a"]]);var b=w,h=t(782);function Q(A,e,t){const a=document.querySelector(`.${A}`);a.replaceChildren();let l=document.createElement("script");l.src=`https://s3.tradingview.com/external-embedding/embed-widget-${A}.js`,l.async=!0;let n=e.slice(0,-1),o=navigator.language.toLowerCase().slice(3);"timeline"!=A&&"symbol-profile"!=A||(e=n),"3m"!=t&&"6h"!=t&&"8h"!=t&&"12h"!=t&&"3d"!=t||(t="1h"),l.innerHTML=JSON.stringify({interval:t,width:"100%",isTransparent:"rgb(24, 26, 32)",height:"100%",symbol:`BINANCE:${e}`,showIntervalTabs:!0,locale:o,colorTheme:"dark"}),a.appendChild(l)}const k=(0,l.Lk)("div",{class:"tradingview-widget-container__widget"},null,-1),L=(0,l.Lk)("div",{class:"tradingview-widget-copyright"},[(0,l.Lk)("a",{href:"https://www.tradingview.com/",rel:"noopener nofollow",target:"_blank"},[(0,l.Lk)("span",{class:"blue-text"},"Track all markets on TradingView")])],-1),y=[k,L];var M={__name:"TVWidget",props:{type:{type:String}},setup(A){const e=(0,h.Pj)();let t=(0,l.EW)((()=>e.state.exchangeInfo.selectedSymbol)),a=(0,l.EW)((()=>e.state.exchangeInfo.selectedInterval)),r=A;return(0,l.wB)(t,(()=>{Q(r.type,t.value,a.value)})),(0,l.wB)(a,(()=>{Q(r.type,t.value,a.value)})),(0,l.sV)((()=>{Q(r.type,t.value,a.value)})),(A,e)=>((0,l.uX)(),(0,l.CE)("div",{class:(0,n.C4)([`${(0,o.R1)(r).type}-wrapper`,"widget-wrapper"])},[(0,l.Lk)("div",{class:(0,n.C4)(["tradingview-widget-container",(0,o.R1)(r).type])},y,2)],2))}};const N=M;var S=N,x=t(9698),R=t(8355),D=t(8074);let j="https://api.binance.com/api/v3";var G={namespaced:!0,state(){return{symbolList:[],marketList:[],selectedSymbol:"BTCUSDT",selectedInterval:"1h"}},mutations:{setSymbolList(A,e){A.symbolList=e},setMarketList(A,e){A.marketList=e},updateMarket(A,e){let t=e.data;t.filter((e=>{A.marketList.forEach((A=>{A.symbol==e.s&&(A.lastPrice=e.c,A.priceChangePercent=e.P,A.quoteVolume=e.q,A.highPrice=e.h,A.lowPrice=e.l)}))}))},setSelectedSymbol(A,e){e.symbol&&(A.selectedSymbol=e.symbol),e.interval&&(A.selectedInterval=e.interval)}},actions:{async getExchangeInfo(A){try{let e=await R.A.get(`${j}/exchangeInfo`),t=e.data.symbols,a=t.filter((A=>"USDT"==A.quoteAsset&&"TRADING"==A.status)),l=a.map((A=>A.symbol));return A.commit("setSymbolList",l),l}catch(e){console.error("error in exchangeInfo",e)}},async getMarketInfo({dispatch:A,commit:e}){try{let t=await A("getExchangeInfo");const a=JSON.stringify(t);let l=await R.A.get(`${j}/ticker/24hr?symbols=${decodeURI(a)}`),n=l.data,o=n.filter((A=>0!=A.lastPrice));e("setMarketList",o)}catch(t){console.error(t)}}},getters:{}},X=t(5131);const P="https://min-api.cryptocompare.com/data";var Y={namespaced:!0,state(){return{allMajorNews:null,majorNewsMain:null,allLatestNews:null,LatestNewsMain:null,categories:null,initLoad:!1}},mutations:{setAllMajorNews(A,e){A.allMajorNews=e,A.majorNewsMain=e.slice(0,4)},setAllLatesetNews(A,e){A.allLatestNews=e,A.LatestNewsMain=e.slice(0,2)},setCategory(A,e){A.categories=e,A.initLoad=!0}},actions:{async getCategory({commit:A}){try{let e=await R.A.get(`${P}/news/categories?extraParams=test&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`),t=e.data,a=["BTC","ETH","XRP","BNB"],l=[];return a.forEach((A=>{let e=t.find((e=>e&&e.wordsAssociatedWithCategory&&e.wordsAssociatedWithCategory.includes(A)));e&&l.push(...e.wordsAssociatedWithCategory)})),A("setCategory",l.join(",")),l.join(",")}catch(e){console.error("get news api error",e)}},async getAllNews({commit:A,dispatch:e,state:t}){try{let a=t.initLoad?t.categories:await e("getCategory"),l=await R.A.get(`${P}/v2/news/?lang=EN&categories=${a}&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`),n=l.data.Data;A("setAllMajorNews",n);let o=await R.A.get(`${P}/v2/news/?lang=EN&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`),r=o.data.Data;A("setAllLatesetNews",r)}catch(a){console.error("get news api error",a)}}}};const V=(0,h.y$)({modules:{exchangeInfo:G,newsList:Y},plugins:[(0,X.A)({paths:["exchangeInfo","newsList"]})]});var T=V;let z=null,U=(0,o.KR)([]);var W;const q=(A,e)=>{z=new WebSocket("wss://stream.binance.com:9443/stream"),z.onopen=()=>{W=`${A}@kline_${e}`;let t={method:"SUBSCRIBE",params:[W],id:1};z.send(JSON.stringify(t))},z.onclose=()=>{},z.onmessage=A=>{const e=JSON.parse(A.data);e.stream&&(U.value=e.data.k)},z.onerror=A=>{console.error("WebSocket Error:",A)}},H=(A,e)=>{if(z&&z.readyState===WebSocket.OPEN){const A={method:"UNSUBSCRIBE",params:[W],id:312};z.send(JSON.stringify(A)),z.close()}setTimeout((()=>{q(A.toLowerCase(),e)}),2e3)},F=A=>{z=new WebSocket("wss://stream.binance.com:9443/stream"),z.onopen=()=>{W=["!ticker@arr@3000ms","!ticker_1h@arr@3000ms","!ticker_4h@arr@3000ms"];let A={method:"SUBSCRIBE",params:W,id:1};z.send(JSON.stringify(A))},z.onclose=()=>{},z.onmessage=e=>{const t=JSON.parse(e.data);if(!t.stream)return;let a=t.data[0].e;("24h"==A&&"24hrTicker"==a||"1h"==A&&"1hTicker"==a||"4h"==A&&"4hTicker"==a)&&T.commit("exchangeInfo/updateMarket",{data:t.data})},z.onerror=A=>{console.error("WebSocket Error:",A)}},O=A=>{if(z&&z.readyState===WebSocket.OPEN){const A={method:"UNSUBSCRIBE",params:[W],id:312};z.send(JSON.stringify(A)),z.close()}setTimeout((()=>{F(A)}),2e3)},_=()=>{if(z){const A={method:"UNSUBSCRIBE",params:[W],id:312};z.send(JSON.stringify(A)),z.close()}},K={class:"select-wrapper"};var Z={__name:"Chart",setup(A){const e=(0,h.Pj)();let t;const a=(0,o.KR)();let n=Intl.DateTimeFormat().resolvedOptions().timeZone,r=(0,o.KR)(e.state.exchangeInfo.symbolList);const s=(0,o.KR)(e.state.exchangeInfo.selectedSymbol),i=(0,o.KR)(["1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w","1M"]),c=(0,o.KR)("1h");let u=(0,o.KR)(!1),g=(0,o.KR)({trackingMode:{exitMode:1},kineticScroll:{mouse:!1},autoSize:!0,leftPriceScale:{borderVisible:!1,visible:!1},overlayPriceScale:{position:"left",borderVisible:!1,visible:!1},rightPriceScale:{visible:!0,borderColor:"#505050",ticksVisible:!0},layout:{background:{color:"#1D1D2B"},textColor:"#fff"},grid:{vertLines:{color:"#505050"},horzLines:{color:"#505050"}},timeScale:{barSpacing:11,timeVisible:!0,tickMarkFormatter(A){var e=new Date(1e3*A);let t={month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:n},a=e.toLocaleString("en-US",t).replace(",","");return a=a.replace(/\//g,"-"),a}},crosshair:{mode:0},localization:{timeFormatter(A,e){const t=new Date(new Date(1e3*A).toLocaleString("en-US",{timeZone:e})),a=t.getFullYear(),l=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0"),o=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");let s=`${a}-${l}-${n} ${o}:${r}`;return s}}});async function v(A,e){try{return await R.A.get(`https://api.binance.com/api/v3/klines?symbol=${s.value}&interval=${c.value}`).then((t=>{u.value=!0;let a=t.data,l=[],n=[];for(let A=0;A<a.length;A++)l.push({time:a[A][0]/1e3,open:Number(a[A][1]),high:Number(a[A][2]),low:Number(a[A][3]),close:Number(a[A][4])}),n.push({time:a[A][0]/1e3,value:Number(a[A][5]),color:E(a[A][7],a[A][10])});A.setData(l),e.setData(n)}))}catch(t){console.log("error",t)}}function E(A,e){let t=(A-e).toFixed(0);return t>e?"#EE7272":"#5DB9CD"}function d(A){return A.toFixed(4)}return(0,l.sV)((()=>{t=(0,x.R9)(a.value,g.value);const A=t.addCandlestickSeries({title:"Candle",priceScaleId:"right",upColor:"#5DB9CD",downColor:"#EE7272",color:"#fff",priceFormat:{type:"price",precision:5,minMove:1e-5}}),n=t.addHistogramSeries({upColor:"#5DB9CD",downColor:"#EE7272",color:"#26a69a",priceFormat:{type:"volume"},priceScaleId:""});A.priceScale().applyOptions({autoScale:!0,scaleMargins:{top:.1,bottom:.3}}),n.priceScale().applyOptions({scaleMargins:{top:.7,bottom:0}}),(0,l.wB)(s,((t,a)=>{v(A,n),e.commit("exchangeInfo/setSelectedSymbol",{symbol:s.value,interval:c.value}),z&&H(s.value,c.value,a),C(void 0)})),(0,l.wB)(c,((t,a)=>{console.log("newValue,oldValue",t,a),v(A,n),e.commit("exchangeInfo/setSelectedSymbol",{symbol:s.value,interval:c.value}),z&&H(s.value,c.value),C(void 0)})),(0,l.wB)(U,((e,t)=>{t.t<=e.t&&(A.update({time:Number(U.value.t)/1e3,open:Number(U.value.o),high:Number(U.value.h),low:Number(U.value.l),close:Number(U.value.c)}),n.update({time:Number(U.value.t)/1e3,value:Number(U.value.v),color:E(U.value.q,U.value.Q)}))}));const o=a.value,r=document.createElement("div");r.style="position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;",r.style.color="black",o.appendChild(r);const i=A=>{let e=A.data()[A.data().length-1];return e};var p=(A,e,t,a,l,n)=>{t>n?r.style.color="rgb(246, 70, 93)":t<n&&(r.style.color="rgb(14, 203, 129)"),r.innerHTML=`<div>${A}<br/> <strong>${e}</strong><br/> Open: ${t}<br/> High: ${a}<br/> Low: ${l}<br/> Close: ${n}`};const C=async e=>{u.value||await v(A,n);let t=!(void 0===e||void 0===e.time||e.point.x<0||e.point.y<0),a=t?e.seriesData.get(A):i(A),l=a.open,o=a.high,r=a.low,c=a.close,g=d(l),E=d(o),C=d(r),I=d(c),B=1e3*a.time,m=new Date(B),f={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",hour12:!1,timeZone:"Asia/Seoul"},w=m.toLocaleString("ko-KR",f);p(s.value,w,g,E,C,I)};t.subscribeCrosshairMove(C),C(void 0),t.timeScale().fitContent(),q(s.value.toLowerCase(),c.value)})),(0,l.hi)((()=>{t&&(t.remove(),t=null,_())})),(A,e)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",K,[(0,l.bF)((0,o.R1)(D.Ay),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=A=>s.value=A),options:(0,o.R1)(r),searchable:!0,"close-on-select":!0,"show-labels":!1,placeholder:"Search Symbol"},null,8,["modelValue","options"]),(0,l.bF)((0,o.R1)(D.Ay),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=A=>c.value=A),options:i.value,searchable:!1,"close-on-select":!0,"show-labels":!1,placeholder:"Search Symbol"},null,8,["modelValue","options"])]),(0,l.Lk)("div",{class:"lw-chart",ref_key:"chartContainer",ref:a,style:{position:"relative"}},null,512)],64))}};const J=Z;var $=J,AA={__name:"ChartView",setup(A){return(A,e)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(S,{type:"symbol-info"}),(0,l.bF)($),(0,l.bF)(S,{type:"symbol-profile"}),(0,l.bF)(S,{type:"technical-analysis"}),(0,l.bF)(S,{type:"timeline"})],64))}};const eA=AA;var tA=eA,aA=t.p+"img/search-icon.5985014c.svg";const lA={class:"market-wrapper"},nA={class:"market-title grid-between"},oA=(0,l.Lk)("h1",null,[(0,l.eW)("Markets Overview "),(0,l.Lk)("span",null,">")],-1),rA=(0,l.Lk)("h2",null,"Spot / Margin Market",-1),sA=(0,l.Lk)("div",null,null,-1),iA=(0,l.Lk)("div",null,null,-1),cA=(0,l.Lk)("div",null,null,-1),uA={class:"search-container"},gA=(0,l.Lk)("img",{src:aA},null,-1),vA={class:"market-container"},EA={class:"market-top grid-between"},dA={class:"flex-center"},pA=(0,l.Lk)("p",null,"Name",-1),CA=["src"],IA={class:"flex-center"},BA=(0,l.Lk)("p",null,"Price",-1),mA=["src"],fA={class:"flex-center"},wA={class:"flex-center change"},bA=(0,l.Lk)("p",null,"Change",-1),hA=["src"],QA=(0,l.Lk)("p",null,"24h High / 24h Low",-1),kA={class:"flex-center"},LA=(0,l.Lk)("p",null,"24h Volume",-1),yA=["src"],MA=(0,l.Lk)("p",null,"Chart",-1),NA={key:0,class:"color-green"},SA={key:1,class:"color-red"},xA={key:2},RA=["onClick"];var DA={__name:"Market",setup(A){const e=(0,o.KR)(["1h","4h","24h"]),s=(0,o.KR)("24h"),i=(0,h.Pj)(),c=(0,r.rd)(),u=(0,l.EW)((()=>i.state.exchangeInfo.marketList||[])),g=(0,o.KR)(30),v=(0,o.KR)();(0,l.sV)((()=>{i.dispatch("exchangeInfo/getMarketInfo"),F(s.value),v.value&&v.value.addEventListener("scroll",b)}));const E=(0,o.KR)("default");let d=(0,o.KR)({symbol:0,lastPrice:0,priceChangePercent:0,quoteVolume:0});const p=(0,o.KR)(t(4789)),C=(0,o.KR)({symbol:p.value,lastPrice:p.value,priceChangePercent:p.value,quoteVolume:p.value}),I=(0,o.KR)(""),B=(0,l.EW)((()=>{let A=E.value.split("-")[0],e=E.value.split("-")[1],t=I.value.toLowerCase(),a=[...u.value].filter((A=>A.symbol.toLowerCase().includes(t)));return"symbol"===A?a.sort(((A,t)=>"asc"===e?A.symbol>t.symbol?1:-1:A.symbol<t.symbol?1:-1)):"default"===A?a:a.sort(((t,a)=>"asc"===e?t[A]-a[A]:a[A]-t[A]))}));function m(A){return Number(A).toLocaleString("en",{maximumSignificantDigits:20})}function f(A){return Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:2}).format(A)}function w(A){return 0==A?0:Number(A).toFixed(2)}function b(){const A=v.value.scrollTop,e=v.value.scrollHeight,t=v.value.clientHeight;e-(A+t)<500&&(g.value+=50)}function Q(A){d.value[A]++;for(const e in C.value)e!==A&&(C.value[e]=p.value,d.value[e]=0);d.value[A]%3==0?(E.value="default",C.value[A]=t(4789)):d.value[A]%3==1?(C.value[A]=t(5007),E.value=A+"-asc"):d.value[A]%3==2&&(C.value[A]=t(3602),E.value=A+"-desc")}function k(A){i.commit("exchangeInfo/setSelectedSymbol",{symbol:A}),c.push("/chart")}return(0,l.wB)(s,(A=>{z&&O(A)})),(0,l.hi)((()=>{})),(0,l.hi)((()=>{window.removeEventListener("scroll",b),_()})),(A,t)=>((0,l.uX)(),(0,l.CE)("div",lA,[(0,l.Lk)("div",nA,[oA,rA,sA,iA,cA,(0,l.Lk)("div",uA,[(0,l.bo)((0,l.Lk)("input",{class:"symbol-search",placeholder:"Search Coin Name","onUpdate:modelValue":t[0]||(t[0]=A=>I.value=A)},null,512),[[a.Jo,I.value]]),gA])]),(0,l.Lk)("div",vA,[(0,l.Lk)("div",EA,[(0,l.Lk)("div",dA,[pA,(0,l.Lk)("p",{class:"sort flex-center symbol-sort",onClick:t[1]||(t[1]=A=>Q("symbol"))},[(0,l.Lk)("img",{src:C.value.symbol},null,8,CA)])]),(0,l.Lk)("div",IA,[BA,(0,l.Lk)("p",{class:"sort flex-center symbol-sort",onClick:t[2]||(t[2]=A=>Q("lastPrice"))},[(0,l.Lk)("img",{src:C.value.lastPrice},null,8,mA)])]),(0,l.Lk)("div",fA,[(0,l.Lk)("div",wA,[(0,l.bF)((0,o.R1)(D.Ay),{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=A=>s.value=A),options:e.value,"close-on-select":!0,"show-labels":!1,searchable:!1},null,8,["modelValue","options"]),bA]),(0,l.Lk)("p",{class:"sort flex-center symbol-sort",onClick:t[4]||(t[4]=A=>Q("priceChangePercent"))},[(0,l.Lk)("img",{src:C.value.priceChangePercent},null,8,hA)])]),QA,(0,l.Lk)("div",kA,[LA,(0,l.Lk)("p",{class:"sort flex-center symbol-sort",onClick:t[5]||(t[5]=A=>Q("quoteVolume"))},[(0,l.Lk)("img",{src:C.value.quoteVolume},null,8,yA)])]),MA]),(0,l.Lk)("div",{class:"market-content",ref_key:"scrollcheck",ref:v},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(B.value.slice(0,g.value),((A,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"grid-between",key:e},[(0,l.Lk)("p",null,(0,n.v_)(A.symbol),1),(0,l.Lk)("p",null,(0,n.v_)(m(A.lastPrice)),1),A.priceChangePercent>0?((0,l.uX)(),(0,l.CE)("p",NA,"+"+(0,n.v_)(w(A.priceChangePercent))+"%",1)):A.priceChangePercent<0?((0,l.uX)(),(0,l.CE)("p",SA,(0,n.v_)(w(A.priceChangePercent))+"%",1)):0==A.priceChangePercent?((0,l.uX)(),(0,l.CE)("p",xA,(0,n.v_)(w(A.priceChangePercent))+"%",1)):(0,l.Q3)("",!0),(0,l.Lk)("p",null,(0,n.v_)(m(A.highPrice))+" / "+(0,n.v_)(m(A.lowPrice)),1),(0,l.Lk)("p",null,(0,n.v_)(f(A.quoteVolume)),1),(0,l.Lk)("p",{class:"chart-icon-box",onClick:e=>k(A.symbol)},null,8,RA)])))),128))],512)])]))}};const jA=DA;var GA=jA,XA={__name:"MarketView",setup(A){return(A,e)=>((0,l.uX)(),(0,l.Wv)(GA))}};const PA=XA;var YA=PA;function VA(A){return A=new Date(A),A.getFullYear()+"-"+(A.getMonth()+1<10?"0"+(A.getMonth()+1):A.getMonth()+1)+"-"+(A.getDate()<10?"0"+A.getDate():A.getDate())+" "+(A.getHours()<10?"0"+A.getHours():A.getHours())+":"+(A.getMinutes()<10?"0"+A.getMinutes():A.getMinutes())}function TA(A){A*=1e3;let e=(new Date).getTime();return Math.round((e-A)/6e4.toFixed(0))}const zA={class:"news-wrapper"},UA={class:"news-container main"},WA=(0,l.Lk)("h1",null,"Main News",-1),qA={class:"news-list-wrapper"},HA=["onClick"],FA=["src"],OA={class:"news-title"},_A={class:"news-container major"},KA=(0,l.Fv)('<div class="coin-label"><h1>Major Coin News</h1><div><p class="btc">BTC</p><p class="eth">ETH</p><p class="bnb">BNB</p><p class="xrp">XRP</p></div></div>',1),ZA=["onClick"],JA={class:"news-title"};var $A={__name:"MainNews",setup(A){const e=(0,h.Pj)(),t=(0,l.EW)((()=>e.state.newsList.majorNewsMain)),a=(0,l.EW)((()=>e.state.newsList.LatestNewsMain));function r(A){window.open(A,"_blank")}return e.dispatch("newsList/getAllNews"),e.dispatch("newsList/getCategory"),(A,e)=>{const s=(0,l.g2)("RouterLink");return(0,l.uX)(),(0,l.CE)("div",zA,[(0,l.Lk)("div",UA,[WA,(0,l.Lk)("div",qA,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.value,((A,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"news-list",key:e,onClick:e=>r(A.url)},[(0,l.Lk)("img",{src:A.imageurl},null,8,FA),(0,l.Lk)("h1",OA,(0,n.v_)(A.title),1),(0,l.Lk)("div",null,[(0,l.Lk)("p",null,"By "+(0,n.v_)(A.source_info.name),1),(0,l.Lk)("p",null,(0,n.v_)((0,o.R1)(VA)(1e3*A.published_on)),1)])],8,HA)))),128))]),(0,l.Lk)("div",null,[(0,l.Lk)("p",null,[(0,l.bF)(s,{to:"/news/all"},{default:(0,l.k6)((()=>[(0,l.eW)("See more News >")])),_:1})])])]),(0,l.Lk)("div",_A,[KA,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t.value,((A,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"news-list",key:e,onClick:e=>r(A.url)},[(0,l.Lk)("p",JA,(0,n.v_)(A.title),1),(0,l.Lk)("div",null,[(0,l.Lk)("p",null,"By "+(0,n.v_)(A.source_info.name),1),(0,l.Lk)("p",null,(0,n.v_)((0,o.R1)(VA)(1e3*A.published_on)),1)])],8,ZA)))),128))])])}}};const Ae=$A;var ee=Ae,te={__name:"MainView",setup(A){return(A,e)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(YA),(0,l.bF)(ee)],64))}};const ae=te;var le=ae;const ne={class:"news-menu"},oe=(0,l.Lk)("h1",null,"News",-1),re={for:"all",class:"color-active"},se={for:"major"},ie={for:"btc"},ce={for:"eth"},ue={for:"bnb"},ge={for:"xrp"};var ve={__name:"NewsMenu",setup(A){const e=(0,r.rd)(),t=(0,o.KR)("latest");function n(A){document.querySelectorAll('input[type="radio"]').forEach((A=>{A.parentNode.classList.remove("color-active")})),document.querySelector(`#${A.target.value}`).parentNode.classList.add("color-active");let t=A.target.value;e.push(`/news/${t}`)}return(A,e)=>((0,l.uX)(),(0,l.CE)("div",ne,[oe,(0,l.Lk)("p",null,[(0,l.Lk)("label",re,[(0,l.bo)((0,l.Lk)("input",{type:"radio",id:"all","onUpdate:modelValue":e[0]||(e[0]=A=>t.value=A),value:"all",onChange:n},null,544),[[a.XL,t.value]]),(0,l.eW)("Latest ")])]),(0,l.Lk)("p",null,[(0,l.Lk)("label",se,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=A=>t.value=A),value:"major",id:"major",onChange:n},null,544),[[a.XL,t.value]]),(0,l.eW)("Major ")])]),(0,l.Lk)("p",null,[(0,l.Lk)("label",ie,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[2]||(e[2]=A=>t.value=A),value:"btc",id:"btc",onChange:n},null,544),[[a.XL,t.value]]),(0,l.eW)("Bitcoin News ")])]),(0,l.Lk)("p",null,[(0,l.Lk)("label",ce,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[3]||(e[3]=A=>t.value=A),value:"eth",id:"eth",onChange:n},null,544),[[a.XL,t.value]]),(0,l.eW)("Ethereum News ")])]),(0,l.Lk)("p",null,[(0,l.Lk)("label",ue,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[4]||(e[4]=A=>t.value=A),value:"bnb",id:"bnb",onChange:n},null,544),[[a.XL,t.value]]),(0,l.eW)("BNB News ")])]),(0,l.Lk)("p",null,[(0,l.Lk)("label",ge,[(0,l.bo)((0,l.Lk)("input",{type:"radio","onUpdate:modelValue":e[5]||(e[5]=A=>t.value=A),value:"xrp",id:"xrp",onChange:n},null,544),[[a.XL,t.value]]),(0,l.eW)("XRP News ")])])]))}};const Ee=ve;var de=Ee;const pe={class:"news-wrapper"},Ce=["onClick"],Ie={class:"color-text news-body"},Be={class:"color-text"},me=(0,l.Lk)("p",null,"There is no news about BNB.",-1),fe=[me];var we={__name:"AllNews",setup(A){const e=(0,h.Pj)(),t=(0,r.rd)(),a=(0,r.lq)(),s=(0,l.EW)((()=>e.state.newsList.allLatestNews)),i=(0,l.EW)((()=>e.state.newsList.allMajorNews)),c=(0,o.KR)("all");(0,l.wB)((()=>a.params.category),(A=>{c.value=A}));const u=(0,l.EW)((()=>"all"==c.value?s.value:"major"==c.value?i.value:"btc"==c.value?s.value.filter((A=>A.categories.includes("BTC"))):"eth"==c.value?s.value.filter((A=>A.categories.includes("ETH"))):"bnb"==c.value?s.value.filter((A=>A.categories.includes("BNB"))):"xrp"==c.value?s.value.filter((A=>A.categories.includes("XRP"))):s.value)),g=(0,o.KR)(),v=(0,o.KR)(5);function E(){const A=g.value.scrollTop,e=g.value.scrollHeight,t=g.value.clientHeight;e-(A+t)<500&&(v.value+=10)}function d(A){console.log(A),t.push(`/news/post/${A}`)}return(0,l.sV)((()=>{g.value.addEventListener("scroll",E),setInterval((()=>{e.dispatch("newsList/getAllNews")}),12e4)})),(0,l.hi)((()=>{window.removeEventListener("scroll",E)})),(A,e)=>((0,l.uX)(),(0,l.CE)("div",pe,[(0,l.bF)(de),u.value.length>0?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"news-container all",ref_key:"scrollCheck",ref:g},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.value.slice(0,v.value),((A,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"news-list",key:e,onClick:e=>d(A.id)},[(0,l.Lk)("p",null,(0,n.v_)((0,o.R1)(TA)(A.published_on))+"m",1),(0,l.Lk)("h1",null,(0,n.v_)(A.title),1),(0,l.Lk)("h2",Ie,(0,n.v_)(A.body),1),(0,l.Lk)("div",Be,[(0,l.Lk)("p",null,"By "+(0,n.v_)(A.source_info.name),1),(0,l.Lk)("p",null,(0,n.v_)((0,o.R1)(VA)(1e3*A.published_on)),1)])],8,Ce)))),128))],512)):u.value.length<=0?((0,l.uX)(),(0,l.CE)("div",{key:1,class:"news-container all",ref_key:"scrollCheck",ref:g},fe,512)):(0,l.Q3)("",!0)]))}};const be=we;var he=be,Qe={__name:"NewsView",setup(A){return(A,e)=>((0,l.uX)(),(0,l.Wv)(he))}};const ke=Qe;var Le=ke,ye=t.p+"img/left-arrow.af90a617.svg";const Me={class:"news-wrapper"},Ne={class:"news-container detail"},Se={class:"news-list"},xe={class:"news-title"},Re={class:"news-detail-content"},De={class:"align-center news-info"},je=["src"],Ge={class:"coin-label margin"},Xe=(0,l.Lk)("p",null,"Tags",-1);var Pe={__name:"NewsDetail",setup(A){const e=(0,r.lq)(),t=(0,o.KR)(e.params.id),a=(0,h.Pj)(),s=(0,l.EW)((()=>a.state.newsList.allLatestNews.find((A=>A.id==t.value)))),i=(0,l.EW)((()=>s.value.tags.split("|")));function c(A){window.open(A,"_blank")}return(A,e)=>((0,l.uX)(),(0,l.CE)("div",Me,[(0,l.bF)(de),(0,l.Lk)("div",Ne,[(0,l.Lk)("div",Se,[(0,l.Lk)("img",{src:ye,onClick:e[0]||(e[0]=e=>A.$router.go(-1))}),(0,l.Lk)("h1",xe,(0,n.v_)(s.value.title),1),(0,l.Lk)("p",null,(0,n.v_)((0,o.R1)(VA)(1e3*s.value.published_on)),1),(0,l.Lk)("p",Re,(0,n.v_)(s.value.body),1),(0,l.Lk)("div",De,[(0,l.Lk)("img",{src:s.value.source_info.img},null,8,je),(0,l.Lk)("div",null,[(0,l.Lk)("p",null,(0,n.v_)(s.value.source_info.name),1),(0,l.Lk)("button",{onClick:e[1]||(e[1]=A=>c(s.value.url))},"See Original News")])]),(0,l.Lk)("div",Ge,[Xe,(0,l.Lk)("div",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.value,((A,e)=>((0,l.uX)(),(0,l.CE)("p",{key:e},(0,n.v_)(A),1)))),128))])])])])]))}};const Ye=Pe;var Ve=Ye,Te={__name:"NewsDetailView",setup(A){return(A,e)=>((0,l.uX)(),(0,l.Wv)(Ve))}};const ze=Te;var Ue=ze,We={__name:"test",setup(A){const e=(0,h.Pj)();let t=(0,l.EW)((()=>e.state.exchangeInfo.marketList));return(0,l.sV)((()=>{e.dispatch("exchangeInfo/getMarketInfo")})),(A,e)=>((0,l.uX)(),(0,l.CE)("div",null," jjjjjjjjj "+(0,n.v_)((0,o.R1)(t)),1))}};const qe=We;var He=qe;const Fe=[{path:"/",component:le},{path:"/news/:category",component:Le},{path:"/news/post/:id",component:Ue},{path:"/market",component:YA},{path:"/chart",component:tA},{path:"/test",component:He},{path:"/404",component:b},{path:"/:pathMatch(.*)*",redirect:"/404"}];var Oe=Fe;const _e=(0,r.aE)({history:(0,r.Bt)(),routes:Oe});var Ke=_e;(0,a.Ef)(d).use(Ke).use(T).mount("#app")},3602:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgBzZFfTgIxEMa/oWIMUdM+GOuTuzfgBnATvQFHQG/ADeQm6gk4QuGp65+k+2IiGh2ni6yw7AqPfEnTzPSXbzozQI2eX8MddpGAV3I43tU3Wg2cc7pzoieSTCTM3xTS1Jh8+d5ahY9P9eAXjNKdbwxqnb33iWofuUrlvK3QNcbM1pwFHGJT+vML4zXnEEJPkg9oECn0z4x5PIiBgAkRbhphqYD9UdEgP9khGNf/UGM6z24XcEg0PuYOzJuNEOU4RJeMnxVzJjOVlfKo3pZHESy/UbrP3yf4W3fUlGyWLoNyg4W7qvy71Tz7RYXM3svheGOb+MX2CjhcXGIXsbf9uvwP+ndcZBNVwpUAAAAASUVORK5CYII="},4789:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBzVLBjcJADJwkRILo7rQWurvnJR3QwdEJdEAJQAd0AJ0AFVBC4BWJgHY/iAciYEckSiARPBlptbI9GtuzC1Rgu9NTvAIm9vhc5L6vWcUgDEPlfaoVJ30OzcFBEBCZrG4XyR9fanAjCpSXYFCpHEWR77jN8K6zcR10iGhTUmbiEI9QpzNmJWWt9T8nF6iB5aD7TbRsSMBE37IwqiVzB7wP0gXjvR5egH4diWuz3zaNMzfEIvH4YRFe3DS8ZodarU3qM5tuODmpUk2AiRDzMXL1BCvu6ReGXP+0KcjC/AVF3bXLc9t2vfcp4p2e377oHM8gTy9kfTz+4RXEse5W5a+5616ZaP7z3AAAAABJRU5ErkJggg=="},5007:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgBzVHBbQIxEBw7RLnjZQsl8S9cB3QAnSQdpASSDuggdEJSASUQXhCOyP6dEDoW28Ahc3fAk5Ese3fH49k1UAH6U1+4BrRQrzRX5PbTGguIEyEQR2N7bNvIIFslLDHmUOfB1Wb0viN6HbGPy8o0U20bTRCaMnjgHSZn01CZo48SrPqKhoEypaqLHN+owx167HH+09i9Bmfho5ack8DtwDeY/us+AW91JFsbPrfkpydrrcU69zMuNcIYTKMZdWQcT/2cpZTGJgdVqhtg4IiFjUJ9g7Ef49Hk71NLJoew+EGnfs9D35yfmb1vdqlHi6Umu0a4BGun68g6y15wDdJU96ryW8JvXWzYZQT/AAAAAElFTkSuQmCC"}},e={};function t(a){var l=e[a];if(void 0!==l)return l.exports;var n=e[a]={exports:{}};return A[a].call(n.exports,n,n.exports,t),n.exports}t.m=A,function(){var A=[];t.O=function(e,a,l,n){if(!a){var o=1/0;for(c=0;c<A.length;c++){a=A[c][0],l=A[c][1],n=A[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&n||o>=n)&&Object.keys(t.O).every((function(A){return t.O[A](a[s])}))?a.splice(s--,1):(r=!1,n<o&&(o=n));if(r){A.splice(c--,1);var i=l();void 0!==i&&(e=i)}}return e}n=n||0;for(var c=A.length;c>0&&A[c-1][2]>n;c--)A[c]=A[c-1];A[c]=[a,l,n]}}(),function(){t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,{a:e}),e}}(),function(){t.d=function(A,e){for(var a in e)t.o(e,a)&&!t.o(A,a)&&Object.defineProperty(A,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){t.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})}}(),function(){t.p="/vue_exchange/"}(),function(){var A={524:0};t.O.j=function(e){return 0===A[e]};var e=function(e,a){var l,n,o=a[0],r=a[1],s=a[2],i=0;if(o.some((function(e){return 0!==A[e]}))){for(l in r)t.o(r,l)&&(t.m[l]=r[l]);if(s)var c=s(t)}for(e&&e(a);i<o.length;i++)n=o[i],t.o(A,n)&&A[n]&&A[n][0](),A[n]=0;return t.O(c)},a=self["webpackChunkcomposition"]=self["webpackChunkcomposition"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(8506)}));a=t.O(a)})();
//# sourceMappingURL=app.35546706.js.map