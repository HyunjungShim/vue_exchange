import NotFound from '@/views/NotFound.vue';
// import MainView from '@/views/MainView.vue';
import ChartView from '@/views/ChartView.vue';
import MarketView from '@/views/MarketView.vue';
// import store from '@/store/index'
import MainView from '@/views/MainView.vue';
import NewsView from '@/views/NewsView.vue';
import NewsDetailView from '@/views/NewsDetailView.vue';
import test from '@/components/test.vue'
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
        path: "/test",
        component: test
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