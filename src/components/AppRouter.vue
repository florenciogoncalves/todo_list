<template>
  <div class="router">
    <SignUp />
  </div>
</template>

<script>
  import SignUp from '../views/SignUp.vue';

  export default {
    name: "AppRouter",
    components: {
      SignUp
    }
  }
</script>