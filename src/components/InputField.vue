<template>
  <div class="input-field mb-2">
    <label v-if="label"> {{ label }} </label>
    <input :type="inputType" class="rounded-1 px-2 py-1">
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