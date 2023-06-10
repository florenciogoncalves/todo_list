<template>
  <div class="input-field mb-2 mb-md-3">
    <label v-if="label"> {{ label }} </label>
    <input :type="inputType" class="rounded-1 px-2 py-1" required>
  </div>
</template>

<script>
  export default {
    name: "InputForm",
    props: {
      label: String,
      inputType: String,
      inputName: String
    }
  }
</script>