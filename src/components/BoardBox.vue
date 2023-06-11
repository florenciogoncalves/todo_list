<template>
  <div class="col p-2 p-sm-3">
    <a class="board-box col p-2 text-center">
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: "BoardBox",
  props: {
    name: String,
  },
};
</script>