import { createStore } from 'vuex';
import exchangeInfo from './exchangeInfo';
import createPersistedState from 'vuex-persistedstate';
import newsList from './newsList';
import colorMode from './colorMode';
const store = createStore({
  modules: {
    exchangeInfo,
    newsList,
    colorMode
  },
  plugins: [
    createPersistedState({
      paths: ['exchangeInfo','newsList']
    })
  ]
});

export default store;
