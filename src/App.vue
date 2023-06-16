<template>
  <AppHeader :link="this.link" :username="'Username'"/>
  <AppRouter>
    <RouterView @changeLink="changeLink"></RouterView>
  </AppRouter>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppRouter from "./components/AppRouter.vue";

export default {
  name: "App",
  data() {
    return {
      link: ''
    }
  },
  components: {
    AppHeader,
    AppRouter,
  },
  methods: {
    changeLink(link) {
      this.link = link;
    },
  },
  beforeRouteEnter() {
    this.changeLink()
  }
};
</script>

<style lang="scss" src="./assets/style/global.scss">
</style>
