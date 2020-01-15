import Vue from 'vue'
import Router from 'vue-router'
import Pokemarket from '@/components/pages/pokemarket'
import Descriptionpoke from '@/components/pages/descriptionpoke'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name: 'Poke',
            component: Pokemarket
        },
        {
            path:'/descriptionpoke/:id',
            name: 'Desc',
            component: Descriptionpoke
        }
    ]
})