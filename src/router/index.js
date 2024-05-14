import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import QuestionView from '../views/QuestionView.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartView
  },
  {
    path: '/:id',
    name: 'Question',
    component: QuestionView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
