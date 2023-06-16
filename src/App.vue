<template>
  <AppHeader />
  <AppRouter>
    <RouterView></RouterView>
  </AppRouter>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppRouter from './components/AppRouter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppRouter,
}
}
</script>

<style lang="scss" src="./assets/style/global.scss">
</style>
