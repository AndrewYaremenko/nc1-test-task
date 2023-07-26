<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div v-for="post in posts" :key="post.id" class="card mt-4">
                    <div class="card-header">{{ post.title }}</div>

                    <div class="card-body">
                        {{ post.description }}
                    </div>
                </div>

                <div class="pagination mt-4">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: page <= 1 }">
                            <button class="page-link" @click="prevPage" :disabled="page <= 1">prev</button>
                        </li>
                        <li class="page-item" :class="{ disabled: page >= totalPages }">
                            <button class="page-link" @click="nextPage" :disabled="page >= totalPages">next</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            posts: [],
            page: 1,
            totalPages: 1,
        };
    },
    methods: {
        fetchPosts() {
            axios.get('/posts', { params: { page: this.page } })
                .then(response => {
                    this.posts = response.data.data;
                    this.totalPages = response.data.last_page;
                })
                .catch(error => {
                    console.error('Error getting posts:', error);
                });
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchPosts();
            }
        },
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
                this.fetchPosts();
            }
        },
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>
  
<style></style>
  