import { ref } from "vue";
import store from "@/store/index";
export let socket = null;
export let candleSocket = ref([]);

var channelString;
export const createWebSocket = (symbol,interval) => {
    socket = new WebSocket('wss://stream.binance.com:9443/stream')
    socket.onopen = () => {
        // console.log('Connected to Binance WebSocket');
        channelString = `${symbol}@kline_${interval}`
        let subscribeMsg = {
            "method" : "SUBSCRIBE",
            "params" : [
                channelString
            ],
            "id" : 1
        }
        socket.send(JSON.stringify(subscribeMsg))
        // console.log('subscirbe websocket');
    };

    socket.onclose = () => {
        // console.log('Disconnected from Binance WebSocket');
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if(!message.stream){
            return;
        }
        candleSocket.value =(message.data.k);
    };

    socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
    }
}
export const reconnectWebSocket = (selectedSymbol,selectedInterval) => {
    // console.log('old symbol channelString',channelString);
    if (socket) {
        // console.log('socket has property');
        if (socket.readyState === WebSocket.OPEN) {
            const unsubscribeMsg = {
                method: "UNSUBSCRIBE",
                params: [
                    channelString
                ],
                id: 312
            };
            socket.send(JSON.stringify(unsubscribeMsg));

            socket.close();
            // console.log('unsubscirbe');
        }
    }
    setTimeout(() => {
      createWebSocket(selectedSymbol.toLowerCase(),selectedInterval);
    }, 2000);
};

export const createMarketSocket = (change)=> {
    socket = new WebSocket('wss://stream.binance.com:9443/stream')
    socket.onopen = () => {
        // console.log('Connected to Binance WebSocket');
        channelString = ["!ticker@arr@3000ms", "!ticker_1h@arr@3000ms", "!ticker_4h@arr@3000ms"]
        let subscribeMsg = {
            "method" : "SUBSCRIBE",
            "params" :channelString,
            "id" : 1
        }
        socket.send(JSON.stringify(subscribeMsg))
        // console.log('subscirbe websocket');
    };

    socket.onclose = () => {
        // console.log('Disconnected from Binance WebSocket');
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if(!message.stream){
            return;
        }
        let eventMsg = message.data[0].e
        if(change =='24h' && eventMsg =='24hrTicker'){
            store.commit('exchangeInfo/updateMarket',{data:message.data})
            // console.log('message.data',message.data);
        }else if(change =='1h' && eventMsg =='1hTicker'){
            store.commit('exchangeInfo/updateMarket',{data:message.data})
            // console.log('message.data',message.data);
        }else if(change =='4h' && eventMsg =='4hTicker'){
            store.commit('exchangeInfo/updateMarket',{data:message.data})
            // console.log('message.data',message.data);
        }
    };

    socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
    }
}

export const reconnectMarketSocket = (change) => {
    // console.log('channelString',channelString);
    if (socket) {
        // console.log('socket has property');
        if (socket.readyState === WebSocket.OPEN) {
            const unsubscribeMsg = {
                method: "UNSUBSCRIBE",
                params: [
                    channelString
                ],
                id: 312
            };
            socket.send(JSON.stringify(unsubscribeMsg));

            socket.close();
            // console.log('unsubscirbe');
        }
    }
    setTimeout(() => {
        createMarketSocket(change);
    }, 2000);
};

export const disconnectWebSocket = () => { //
    if (socket && socket.readyState != WebSocket.CONNECTING) {
        const unsubscribeMsg = {
            method: "UNSUBSCRIBE",
            params: [
                channelString
            ],
            id: 312
        };
        socket.send(JSON.stringify(unsubscribeMsg));
        socket.close();
        // console.log('disconnect method execute');
    }
}
