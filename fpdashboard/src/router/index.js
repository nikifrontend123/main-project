import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SideNavbar from "../components/SideNavbar.vue";
import Home1 from "../components/home1.vue";
import Dashboard from "../components/Dashboard.vue";
import CheckBox from "../components/CustomCheckBox/CheckBox12.vue";
import Test from "../components/test.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path:"/sidenavbar",
      name: "sidenavbar",
      component: SideNavbar
    },
    {
      path:"/home1",
      name: "home1",
      component: Home1
    },
    {
      path:"/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path:"/checkbox",
      name: "checkbox",
      component: CheckBox
    },
    {
      path:"/test",
      name: "test",
      component: Test
    },
    
  ],
});

export default router;
