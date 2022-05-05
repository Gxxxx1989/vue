// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from './router/js/Home'
import Search from './router/js/Search'
import Login from './router/js/Login'
import Register from './router/js/Register'
//配置路由


const routes = [
    Home,
    Search,
    Login,
    Register,
]


const router = new VueRouter({
    routes:routes
})

//全局前置路由守卫，可以配合后端进行鉴权
router.beforeEach((to, from, next) => {
    console.log("routes-->",routes)
    next()
})
export default router