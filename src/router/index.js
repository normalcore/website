import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import WorkExperience from '../views/WorkExperience.vue'
import TechStacks from '../views/TechStacks.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'

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
        path: '/Resume',
        name: 'My Projects',
        component: Resume
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router