<template>
    <v-app-bar
        color="#272727"
        dark
        app
    >
    <!-- #162130, #272727 -->
    <v-toolbar color="#272727" dark class="white--text elevation-0 sticky">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text to="/" class="elevation-0" >Home</v-btn>
            <v-btn text to="/new-post" class="elevation-0" >New Post</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </v-app-bar>

</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        title: String
    }
}
</script>