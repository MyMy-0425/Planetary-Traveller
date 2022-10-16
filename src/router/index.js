import VueRouter from 'vue-router'
import home from '../pages/home'
import register from '../pages/register'
import login from '../pages/login'
import search from '../pages/search'
import detail from '../pages/detail'
import shopcar from '../pages/shopcar'
import shopcarSuccess from '../pages/shopcarSuccess'
import conOrder from '../pages/conOrder'
import orderSuccess from '../pages/orderSuccess'
import paysuccess from '../pages/paysuccess'
import order from '../pages/order'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:home,
            meta: { isRegister: false, islogin:false }
        },
        {
            path:'/register',
            name:'register',
            component:register,
            meta: { isRegister: true },
        },
        {
            path:'/login',
            name:'login',
            component:login,
            meta: { islogin: true },
        },
        {
            path:'/search',
            name:'search',
            component:search,
        },
        {
            path:'/detail',
            name:'detail',
            component:detail,
        },
        {
            path:'/shopcar',
            name:'shopcar',
            component:shopcar,
        },
        {
            path:'/shopcarSuccess',
            name:'shopcarSuccess',
            component:shopcarSuccess,
        },
        {
            path:'/conOrder',
            name:'conOrder',
            component:conOrder,
        },
        {
            path:'/orderSuccess',
            name:'orderSuccess',
            component:orderSuccess,
        },{
            path:'/paysuccess',
            name:'paysuccess',
            component:paysuccess,
        },
        {
            path:'/order',
            name:'order',
            component:order,
        }
    ]
})

export default router