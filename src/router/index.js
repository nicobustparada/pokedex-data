import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"pokemonTable",
      component: () => import('../views/PokemonsTable.vue'),
      meta: { title: 'Página de Inicio' },
    },
    {
      path:"/:id",
      name:"pokemonInfo",
      component: () => import('../views/PokemonInfo.vue'),
      meta: { title: 'Información:' },
    }
  ],
})

//Change page title for each route  
router.beforeEach((to, from) => {
  document.title = to.meta.title 
})
export default router
