<template>
    <div class="home">
        <h3 class="headline font-weight-bold mb-3">
            Latest Tech News
        </h3>
        <p> This blog is a collection of articles and tutorials about the latest tech news.  </p>

        <v-row justify="center" class="mb-5">
            <div v-for="post in posts" :key="post.id" class="post">
                <router-link :to="'/post/' + post.id" class=" mx-3">
                    {{ post.title }} </router-link>
                <p> {{ post.body }} </p>
            </div>
        </v-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'HomePage',
    props: {
        msg: String
    },
    methods: {
        ...mapActions(['fetchPosts']),
    },
    computed: {
        ...mapGetters(['posts']),
    },
    created() {
        this.fetchPosts();
    },


}
</script>

<style scoped>
.home {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home .post {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    width: 100%;
    height: 150px;
}

</style>