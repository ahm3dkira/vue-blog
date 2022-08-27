<template>
    <div class="post-page">
        <h3> You are Now Viewing Post #{{ $route.params.id }} </h3>

        <v-form class="container" @submit.prevent="updatePostHandler">
            <!-- v-text-field = post.title -->
            <!-- v-textarea = post.body -->
            <v-text-field
                v-model="post.title"
                label="Title"
                required
                :counter="100"
                :rules="[v => !!v || 'Title is required']"
                class="text-center m-auto"
            ></v-text-field>
            <v-textarea
                v-model="post.body"
                label="Body"
                required
                :counter="500"
                :rules="[v => !!v || 'Body is required']"
                class="text-center mb-5"
            ></v-textarea>
        </v-form>
        <v-row>
            <v-col cols="12" md="6" class="text-center">
                <v-btn type="submit" @click="updatePostHandler" color="primary">
                    Update Post
                </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
                <v-btn type="submit" @click="deletePostHandler" color="red">
                    Delete Post
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'PostPage',
    props: {
        msg: String
    },
    methods: {
        deletePostHandler(postId) {
            this.deletePost(postId);
        },
        updatePostHandler() {
            this.updatePost(this.post);
        },
        ...mapActions(['fetchPost', 'deletePost', 'updatePost']),
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        ...mapGetters(['post']),
        
        
    },
    created() {
        this.fetchPost(this.$route.params.id);
    },
}
</script>

<style scoped>
.post-page {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.post-page .container {
    width: 80%;
}

</style>