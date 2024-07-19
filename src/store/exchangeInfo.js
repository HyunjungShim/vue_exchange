import axios from 'axios';
let baseUrl = 'https://api.binance.com/api/v3';
export default {
    namespaced:true,
    state(){
        return{
            symbolList:[],
            marketList:[],
            selectedSymbol:'BTCUSDT',
            selectedInterval:'1h',
        }
    },
    mutations:{
        setSymbolList(state,payload){
            state.symbolList =payload
            // console.log(state.symbolList);
        },
        setMarketList(state,payload){
            state.marketList = payload
        },
        updateMarket(state,payload){
            // console.log('payload',payload.data);
            let marketData = payload.data
            marketData.filter(socketData=> {
                state.marketList.forEach(element => {
                    if(element.symbol == socketData.s){
                        element.lastPrice = socketData.c
                        element.priceChangePercent = socketData.P
                        element.quoteVolume = socketData.q
                        element.highPrice = socketData.h
                        element.lowPrice = socketData.l
                    }
                });
            })
        },
        setSelectedSymbol(state, payload) {
            // console.log('symbol',payload.symbol,payload.interval);
            if(payload.symbol){
                state.selectedSymbol = payload.symbol;
            }
            if(payload.interval){
                state.selectedInterval = payload.interval;
            }
        },
    },
    actions:{
        async getExchangeInfo(context){
            try{
                let res = await axios.get(`${baseUrl}/exchangeInfo`)
                // console.log('res',res.data);
                let result = res.data.symbols;
                let filterQuote = result.filter((el) => el.quoteAsset == "USDT");
                let symbolList = filterQuote.map(el => el.symbol);
                context.commit("setSymbolList",symbolList)
                return symbolList
            }catch(error){
                console.error('error in exchangeInfo',error);
            }
        },
        async getMarketInfo({dispatch,commit}){
            try {
                let symbolList = await dispatch('getExchangeInfo');
                // console.log('symbolList.length',symbolList.length);
                // let sliceSymbolList = symbolList.slice(0,100)
                const symbolsQueryParam = JSON.stringify(symbolList);
                let res24 = await axios.get(`${baseUrl}/ticker/24hr?symbols=${decodeURI(symbolsQueryParam)}`)
                let result = res24.data
                let marketList = result.filter((el)=> el.lastPrice != 0)
                commit('setMarketList',marketList)
            }catch(error){
                console.error(error);
            }
        },
    },
    getters:{
    }
}