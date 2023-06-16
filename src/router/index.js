
import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ViewBoard from '../views/ViewBoard.vue'
import YourBoards from '../views/YourBoards.vue'

const routes = [
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  { path: '/your-boards', component: YourBoards },
  { path: '/view-board', component: ViewBoard },
  { path: '/:pathMatch(.*)', redirect: '/sign-in' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
