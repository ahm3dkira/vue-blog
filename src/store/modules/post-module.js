const state = { 
    posts: [],
    post: {
        id: '',
        title: '',
        body: '',
        userId: '',
    }
};
const getters = {
    posts: state => state.posts,
    post: state => state.post
};
const actions = {
    async fetchPosts({commit}) {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            commit('setPosts', json);
        })
    },
    async fetchPost({commit}, id) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => { 
            commit('setPost', json);
        })
    },
    async addPost({commit}, post) {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(json => {
            commit('addPost', json)
        })
    },
    async deletePost({commit}, id) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(json => {
            commit('deletePost', json)
        })
    },
    async updatePost({commit}, post) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(json => {
            commit('updatePost', json)
        })
    }
};
const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setPost(state, post) {
        state.post = post
    },
    addPost(state, post) {
        state.posts.push(post)
    },
    deletePost(state, post) {
        state.posts = state.posts.filter(p => p.id !== post.id)
    },
    updatePost(state, post) {
        const index = state.posts.findIndex(p => p.id === post.id)
        state.posts[index] = post
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
