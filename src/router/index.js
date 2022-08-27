import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name: 'HomePage',
      components: {
        default: () => import('../views/HomePage.vue'),
        }
    },
    {
        path: '/post/:id',
        name: 'PostPage',
        components: {
            default: () => import('../views/PostPage.vue'),
        }
    },
    {
        path: '/new-post',
        name: 'NewPost',
        components: {
            default: () => import('./../views/NewPost.vue'),
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
