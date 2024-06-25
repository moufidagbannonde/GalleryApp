import { createRouter, createWebHistory } from 'vue-router'
import TodoCp from '@/views/TodoView.vue';
import GalleryCp from '@/views/GallerieView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todopage',
      component: TodoCp
    },
    {
      path: '/galerie',
      component: () => import('@/views/GallerieView.vue'),
      children: [
        {
          path: '',
          redirect: {name: 'voiture'}
        },
        {
          path: '/voitures',
          component: () => import('@/components/CarsComponents/CarsComponent.vue'),
          name: 'voiture',
        },
        {
          path: '/pays',
          component: () => import('@/components/CountryComponents/CountryComponent.vue'),
          name: 'pays',
        },
        {
          path: '/motos',
          component: () => import('@/components/MotorsComponents/MotosComponent.vue'),
          name: 'motos',
        }
      ]
    },
    {
      path: '/formpage',
      name: 'formpage',
      component: ( ) => import('@/views/FormView.vue')
      
    }
  ]
})

export default router
