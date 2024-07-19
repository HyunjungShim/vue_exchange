export function createSymbolWidget(src,symbol,interval){
    console.log('container',src);
    const widgetPlaceholder = document.querySelector(`.${src}`);
    widgetPlaceholder.replaceChildren(); // empty placeholder
    let script = document.createElement('script');
    script.src = `https://s3.tradingview.com/external-embedding/embed-widget-${src}.js`
    script.async = true;

    let transformSymbol = symbol.slice(0,-1);
    let userLang = navigator.language.toLowerCase().slice(3);

    if(src == 'timeline' || src == 'symbol-profile'){
        symbol = transformSymbol
    }
    script.innerHTML = JSON.stringify({
    "interval": interval,
    "width": "100%",
    "isTransparent": 'rgb(24, 26, 32)',
    "height": '100%',
    "symbol": `BINANCE:${symbol}`,
    "showIntervalTabs": true,
    "locale": userLang,
    "colorTheme": "dark",
    });
    widgetPlaceholder.appendChild(script);
}