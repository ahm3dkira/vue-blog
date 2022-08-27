<template>
  <v-app>
    <HeaderComponent :title="title" />
    <v-spacer></v-spacer>

    <v-main>
      <router-view/>
    </v-main>

    <FooterComponent/>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data: () => ({
    title: 'Vue.js Blog',
  }),
};
</script>


<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>