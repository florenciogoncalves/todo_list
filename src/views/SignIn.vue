<template>
  <div class="sign-in g-5">
    <div class="container col-12 col-sm-6 col-lg-5 col-xl-4 g-5 mx-auto">
      <h1 class="title mb-4">Sign In</h1>
      <SignForm>
        
      </SignForm>
      <p class="text-center text-white my-3">Ou</p>
      <WithGoogle :page="'In'" />
    </div>
  </div>
</template>

<script>
import WithGoogle from '..//components/WithGoogle.vue';
import SignForm from '../components/SignForm.vue';

  export default {
    name: "SignIn",
    components: {
      SignForm,
      WithGoogle
    }
  }
</script>