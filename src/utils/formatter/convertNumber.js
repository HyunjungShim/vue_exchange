function formatPrice(price){
    return Number(price).toLocaleString('en',{maximumSignificantDigits:20})
}
function formatVolume(volume){
    return Intl.NumberFormat('en', {notation: "compact",maximumFractionDigits: 2}).format(volume) //output - "234K"
}

function formatPercent(percent){
    if(percent == 0){
        return 0
    }else{
        return (Number(percent).toFixed(2))
    }
}

function setVolumeColor(allQuote, buyQuote) {
    let sellQuote = (allQuote - buyQuote).toFixed(0);
    return sellQuote > buyQuote ? '#EE7272' : '#5DB9CD';
}

function formatPriceWithDecimal(price){
    return price.toFixed(4);
}

export {
    formatPrice,
    formatVolume,
    formatPercent,
    setVolumeColor,
    formatPriceWithDecimal
}