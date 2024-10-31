export function createSymbolWidget(src,symbol,interval,isDark=true){
    // console.log('container',src);
    const widgetPlaceholder = document.querySelector(`.${src}`);
    widgetPlaceholder.replaceChildren(); // empty placeholder
    let script = document.createElement('script');
    script.src = `https://s3.tradingview.com/external-embedding/embed-widget-${src}.js`
    script.async = true;

    let transformSymbol = symbol.slice(0,-1);
    // let userLang = navigator.language.toLowerCase().slice(3); // widget별로 지원하는 언어 달라서 영어로 통일
    
    if(src == 'timeline' || src == 'symbol-profile'){
        symbol = transformSymbol
    }
    if(interval =='3m' || interval =='6h' || interval =='8h' || interval =='12h' || interval =='3d' ){
        interval = '1h'
    }
    script.innerHTML = JSON.stringify({
    "interval": interval,
    "width": "100%",
    "isTransparent": 'rgb(24, 26, 32)',
    "height": '100%',
    "symbol": `BINANCE:${symbol}`,
    "showIntervalTabs": true,
    "locale": 'en',
    "colorTheme": isDark ? 'dark' : 'light',
    });
    widgetPlaceholder.appendChild(script);
}