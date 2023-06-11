<template>
  <main class="router d-flex">
    <ViewBoard :boardName="'Daily'" />
  </main>
</template>

<script>
  import ViewBoard from '../views/ViewBoard.vue';

  export default {
    name: "AppRouter",
    components: {
      ViewBoard
    }
  }
</script>