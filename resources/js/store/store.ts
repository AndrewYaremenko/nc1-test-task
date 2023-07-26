import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

interface Post {
  id: number;
  title: string;
  description: string;
}

interface State {
  posts: Post[];
  page: number;
  totalPages: number;
}

export const store = new Vuex.Store<State>({
  state: {
    posts: [],
    page: 1,
    totalPages: 1,
  },
  mutations: {
    setPosts(state, posts: Post[]) {
      state.posts = posts;
    },
    setPage(state, page: number) {
      state.page = page;
    },
    setTotalPages(state, totalPages: number) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    fetchPosts({ commit, state }) {
      axios.get('/posts', { params: { page: state.page } })
        .then(response => {
          commit('setPosts', response.data.data);
          commit('setTotalPages', response.data.last_page);
        })
        .catch(error => {
          console.error('Error getting posts:', error);
        });
    },
    prevPage({ commit, dispatch, state }) {
      if (state.page > 1) {
        commit('setPage', state.page - 1);
        dispatch('fetchPosts');
      }
    },
    nextPage({ commit, dispatch, state }) {
      if (state.page < state.totalPages) {
        commit('setPage', state.page + 1);
        dispatch('fetchPosts');
      }
    },
  },
  getters: {
    getPosts: (state) => state.posts,
    getPage: (state) => state.page,
    getTotalPages: (state) => state.totalPages,
  },
});
