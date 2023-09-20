import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main.vue";
import Blog from "../pages/Blog.vue";
import BlogDetails from "../pages/BlogDetails.vue";
import OurProjects from "../pages/OurProjects.vue";
import ProjectDetails from "../pages/ProjectDetails.vue";
import ErrorPage404 from "../pages/ErrorPage404.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Main",
    component: Main,
  },
  // {
  //   path: "/Main",
  //   // name: "Main",
  //   component: Main,
  // },
  {
    path: "/Blog",
    // name: "Blog",
    component: Blog,
  },
  {
    path: "/Blog/:page",
    // name: "Blog",
    component: Blog,
  },
  {
    path: "/BlogDetails",
    // name: "BlogDetails",
    component: BlogDetails,
  },
  {
    path: "/OurProjects",
    // name: "OurProjects",
    component: OurProjects,
  },
  {
    path: '/OurProjects/:page',
    component: OurProjects,
  },
  {
    path: "/ProjectDetails",
    // name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "*",
    // name: "Component404Page",
    component: ErrorPage404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
