// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Layout from "../layout/Layout";
import Menu1 from "../layout/menu/Menu1";


const routes = [
    {
        path: '/',
        component: Layout,
        meta:{
            title:'主页'
        }
    },
    {
        path: '/memu1',
        component: Menu1,
        meta:{
            title:'菜单1'
        }
    }
]


const router = new VueRouter({
    routes: routes
})

//全局前置路由守卫，可以配合后端进行鉴权
router.beforeEach((to, from, next) => {
    console.log("routes-->", routes)
    next()
})
export default router
