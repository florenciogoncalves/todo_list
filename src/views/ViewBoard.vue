<template>
  <div class="your-boards m-0">
    <div class="container">
      <h1 class="title mt-3 mt-md-5 ms-2 ms-sm-3">{{ boardName ? boardName : 'Default' }}</h1>
      <div class="row-cols-3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBoard",
  props: {
    boardName: String,
  },
};
</script>