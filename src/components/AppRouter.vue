<template>
  <div class="router">
    <SignIn />
  </div>
</template>

<script>
  import SignIn from '../views/SignIn.vue';

  export default {
    name: "AppRouter",
    components: {
      SignIn
    }
  }
</script>