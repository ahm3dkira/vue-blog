<template>
    <div class="new-post">
        <h2 class="headline font-weight-bold mb-3">
          Welcome to the new post page
        </h2>
        <v-form class="container" @submit.prevent="createPost">
            <v-text-field
                v-model="title"
                label="Title"
                required
                :counter="100"
                :rules="[v => !!v || 'Title is required']"
                class="text-center m-auto"
            ></v-text-field>
            <v-textarea
                v-model="body"
                label="Body"
                required
                :counter="500"
                :rules="[v => !!v || 'Body is required']"
                class="text-center mb-5"


            ></v-textarea>
            <v-btn type="submit" >
                Create Post
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'NewPost',
    data() {
        return {
            title: '',
            body: '',
        };
    },
    methods: {
        createPost(){
            this.addPost({
                title: this.title,
                body: this.body,
            });
        },
        ...mapActions(['addPost']),
    },

}
</script>

<style scoped>
.new-post {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.new-post .container {
    width: 80%;
}
</style>