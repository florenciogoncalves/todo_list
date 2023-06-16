
import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ViewBoard from '../views/ViewBoard.vue'
import YourBoards from '../views/YourBoards.vue'

const routes = [
  { path: '/', component: SignIn },
  { path: '/sign-in', component: SignUp },
  { path: '/view-board', component: ViewBoard },
  { path: '/your-boards', component: YourBoards }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
