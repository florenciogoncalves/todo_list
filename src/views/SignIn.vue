<template>
  <form action="" method="POST" class="sign-in g-5">
    <div class="container col-12 col-sm-7 col-lg-5 col-xl-4 g-5 mx-auto">
      <h1 class="title mb-4">Sign In</h1>
      <SignForm :rememberBox="true">
        
      </SignForm>
      <p class="text-ou text-center text-white my-3">Or</p>
      <WithGoogle :page="'In'" />
    </div>
  </form>
</template>

<script>
import WithGoogle from '..//components/WithGoogle.vue';
import SignForm from '../components/SignForm.vue';

  export default {
    name: "SignIn",
    components: {
      SignForm,
      WithGoogle
    },
    mounted() {
      this.$emit("changeLink", 'signin')
    },
  }
</script>