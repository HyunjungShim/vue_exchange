import { createWebHashHistory, createRouter } from "vue-router";
import routes from './routes';

const router = createRouter({
    // history:createWebHistory(process.env.BASE_URL),
    history:createWebHashHistory(),
    routes
})

export default router;