import NotFound from '@/views/NotFound.vue';
// import MainView from '@/views/MainView.vue';
import ChartView from '@/views/chart/ChartView.vue';
import MarketView from '@/views/market/MarketView.vue';
// import store from '@/store/index'
import MainView from '@/views/MainView.vue';
import NewsView from '@/views/news/NewsView.vue';
import NewsDetailView from '@/views/news/NewsDetailView.vue';
const routes = [
    {
        path:'/',
        component:MainView
    },
    {
        path:"/news/:category",
        component:NewsView,
    },
    {
        path:"/news/post/:id",
        component:NewsDetailView
    },
    {
        path:"/market",
        component:MarketView
    },
    {
        path:"/chart",
        component:ChartView,
        // beforeEnter: (to,from,next) => {
        //     console.log('from',from);
        //     let symbol = to.query.symbol;
        //     console.log('symbol',symbol);
        //     if(store.state.exchangeInfo.symbolList.includes(symbol) ){
        //         next()
        //     }else if(symbol == undefined){
        //         // alert('Symbol not found.')
        //         // next(false)
        //     }
        // }
    },
    {
        path: "/404",
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/404",
    },
]

export default routes;