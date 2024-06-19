import NotFound from '@/views/NotFound.vue';
// import MainView from '@/views/MainView.vue';
import ChartView from '@/views/ChartView.vue';
import MarketView from '@/views/MarketView.vue';
import store from '@/store/index'
import MainView from '@/views/MainView.vue';
import NewsView from '@/views/NewsView.vue'
import NewsDetailView from '@/views/NewsDetailView.vue'
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
        beforeEnter: (to,from,next) => {
            let symbol = to.query.symbol;
            if(store.state.exchangeInfo.symbolList.includes(symbol)){
                next()
            }else{
                alert('Symbol not found.')
                next(false)
            }
        }
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