<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-for="post in getPosts" :key="post.id" class="card mt-4">
                    <div class="card-header">{{ post.title }}</div>

                    <div class="card-body">
                        {{ post.description }}
                    </div>
                </div>

                <div class="pagination mt-4">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: getPage <= 1 }">
                            <button class="page-link" @click="prevPage" :disabled="getPage <= 1">prev</button>
                        </li>
                        <li class="page-item" :class="{ disabled: getPage >= getTotalPages }">
                            <button class="page-link" @click="nextPage" :disabled="getPage >= getTotalPages">next</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
    computed: {
        ...mapGetters(['getPosts', 'getPage', 'getTotalPages']),
    },
    methods: {
        ...mapActions(['fetchPosts', 'prevPage', 'nextPage']),
    },
    mounted() {
        this.fetchPosts();
    },
});
</script>

<style>
@media (max-width: 750px) {
    .container {
        font-size: 8px;
    }

    .page-link {
        font-size: 10px;
    }
}

@media (min-width: 751px) {
    .container {
        font-size: 10px;
    }

    .page-link {
        font-size: 12px;
    }
}
</style>