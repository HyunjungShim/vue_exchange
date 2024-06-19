import { createStore } from 'vuex';
import exchangeInfo from './exchangeInfo';
import createPersistedState from 'vuex-persistedstate';
import newsList from './newsList';

const store = createStore({
  modules: {
    exchangeInfo,
    newsList
  },
  plugins: [
    createPersistedState({
      paths: ['exchangeInfo','newsList']
    })
  ]
});

export default store;
