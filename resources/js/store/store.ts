import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
    },
    actions: {
        fetchPosts({ commit }, page) {
            return new Promise((resolve, reject) => {
                axios.get('/posts', { params: { page } })
                    .then(response => {
                        commit('setPosts', response.data.data);
                        resolve(response.data.last_page);
                    })
                    .catch(error => {
                        console.error('Error getting posts:', error);
                        reject(error);
                    });
            });
        },
    },
    getters: {
    },
    modules: {

    },
});