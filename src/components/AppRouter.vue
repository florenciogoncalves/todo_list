<template>
  <div class="router d-flex">
    <YourBoards />
  </div>
</template>

<script>
  import YourBoards from '../views/YourBoards.vue';

  export default {
    name: "AppRouter",
    components: {
      YourBoards
    }
  }
</script>