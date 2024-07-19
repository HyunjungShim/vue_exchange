import axios from 'axios';
const baseUrl = 'https://min-api.cryptocompare.com/data'

export default {
    namespaced:true,
    state(){
        return {
            allMajorNews:null,
            majorNewsMain:null,
            allLatestNews:null,
            LatestNewsMain:null,
            categories:null,
            initLoad:false
        }
    },
    mutations:{
        setAllMajorNews(state,payload){
            state.allMajorNews = payload
            state.majorNewsMain = payload.slice(0,4)
        },
        setAllLatesetNews(state,payload){
            state.allLatestNews = payload
            state.LatestNewsMain = payload.slice(0,2)
        },
        setCategory(state,payload) {
            state.categories = payload
            // console.log(state.categories);
            state.initLoad = true
        }
    },
    actions:{
        async getCategory({commit}){
            try {
                let res = await axios.get(`${baseUrl}/news/categories?extraParams=test&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`)
                let result =  res.data;
                // console.log('category', result);
                let majorCoin = ['BTC', "ETH", 'XRP','BNB']
                let categories = [];
                majorCoin.forEach((coin) => {
                    // console.log('coin', coin);
                    let majorCategory = result.find((el) => el && el.wordsAssociatedWithCategory && el.wordsAssociatedWithCategory.includes(coin));
                    if (majorCategory) {
                        categories.push(...(majorCategory.wordsAssociatedWithCategory))
                        // console.log('categories', categories);
                    }
                })
                // console.log('categories', categories);
                commit('setCategory',categories.join(','))
                return categories.join(',')
            } catch (error) {
                console.error('get news api error', error);
            }
        },
        async getAllNews({commit,dispatch,state}){
            try {
                let categories = state.initLoad ? state.categories : await dispatch('getCategory');
                let res = await axios.get(`${baseUrl}/v2/news/?lang=EN&categories=${categories}&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`)
                let result =  res.data.Data;
                commit('setAllMajorNews',result)
                let latestRes = await axios.get(`${baseUrl}/v2/news/?lang=EN&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`)
                let latestResult = latestRes.data.Data;
                commit('setAllLatesetNews',latestResult)
            }catch(error){
                console.error('get news api error',error);
            }
        }
    },
    // getters:{
    //     sliceNews(state){
    //         return state.mainNews.slice(0,5)
    //     }
    // }
}