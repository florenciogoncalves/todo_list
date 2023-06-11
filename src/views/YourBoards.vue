<template>
  <div class="your-boards m-0">
    <div class="container">
      <h1 class="title mt-3 mt-md-5">Your boards</h1>
      <form action="" method="POST" class="search-field col col-sm-10  col-lg-5 col-xl-4 mt-3">
      <input type="text" name="search" class="search px-2 py-1" id="search">
      <button type="submit" class="btn-submit"></button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "YourBoards",
};
</script>