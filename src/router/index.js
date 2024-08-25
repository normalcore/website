import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import WorkExperience from '../views/WorkExperience.vue'
import TechStacks from '../views/TechStacks.vue'
import Contact from '../views/Contact.vue'
import MyProjects from '../views/MyProjects.vue'
import Game from "@/views/Game.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/workexperience',
        name: 'Work Experience',
        component: WorkExperience
    },
    {
        path: '/techstacks',
        name: 'Tech Stacks',
        component: TechStacks
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/myprojects',
        name: 'My Projects',
        component: MyProjects
    },
    {
        path: '/myprojects/game',
        name: 'Game',
        component: Game
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router