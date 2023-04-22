import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/',
            redirect: '/home',
            component: () => import('@/views/home'),
        }
    ]
})
export default router