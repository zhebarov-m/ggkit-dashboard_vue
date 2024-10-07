import { createRouter, createWebHistory } from 'vue-router';
import Courses12 from '../pages/Courses12.vue';
import Courses34 from '../pages/Courses34.vue';
import Students from "../pages/Students.vue";
import Groups from "../pages/Groups.vue";
import Announcement from "../pages/Announcement.vue";

const routes = [
    { path: '/', component: Students, name: 'Students' },
    { path: '/groups', component: Groups, name: 'Groups' },
    { path: '/12', component: Courses12, name: 'Courses12' },
    { path: '/34', component: Courses34, name: 'Courses34' },
    { path: '/anno', component: Announcement, name: 'Announcement' },
    { path: '/:pathMatch(.*)*', redirect: '/' } // Редирект на главную при неправильном URL
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
