<template>
  <div class="sign-form p-3 p-md-4 py-5 py-md-5 bg-white rounded-3">
    <div class="p-2">
      <slot>
      </slot>
      <InputField :label="'Email'" :inputName="'email'" :inputType="'email'"/>
      <InputField :label="'Password'" :inputName="'password'" :inputType="'password'"/>
      <div v-if="rememberBox" class="checkbox mb-3 mt-3 d-flex flex-row align-items-center">
        <input class="rounded-1 me-2" type="checkbox" name="remember-me" id="remember-me">
        <label for="remember-me">Remember me</label>
      </div>
      <div v-else class="p-2"></div>
      <button class="btn-submit rounded py-2 w-100" type="submit">Sign {{ rememberBox ? 'Up' : 'In' }}</button>
    </div>  
  </div>
</template>

<script>
  import InputField from './InputField.vue';

  export default {
    name: "SignForm",
      components: {
      InputField
    },
    props: {
      rememberBox: Boolean
    }
  }
</script>