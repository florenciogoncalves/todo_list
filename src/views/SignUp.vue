<template>
  <form action="" method="POST" class="sign-in g-5">
    <div class="container col-12 col-sm-7 col-lg-5 col-xl-4 g-5 mx-auto">
      <h1 class="title mb-4">Sign Up</h1>
      <SignForm :rememberBox="false">
        <div class="row row-cols-md-2 mx-0">
          <InputField :label="'Nome'" :inputType="'text'" :inputName="'name'" :class="'p-0 pe-md-2'"/>
          <InputField :label="'Sobrenome'" :inputType="'text'" :inputName="'surname'" :class="'p-0 ps-md-2'"/>
        </div>
      </SignForm>
      <p class="text-ou text-center text-white my-3">Or</p>
      <WithGoogle :page="'Up'" />
    </div>
  </form>
</template>

<script>
import WithGoogle from '..//components/WithGoogle.vue';
import SignForm from '../components/SignForm.vue';
import InputField from '../components/InputField.vue';

  export default {
    name: "SignIn",
    components: {
      SignForm,
      WithGoogle,
      InputField
    },
    mounted() {
      this.$emit("changeLink", 'signup') 
    },
  }
</script>