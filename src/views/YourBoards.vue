<template>
  <div class="your-boards m-0">
    <div class="container">
      <h1 class="title mt-3 mt-md-5 ms-2 ms-sm-3">Your boards</h1>
      <form
        action=""
        method="POST"
        class="search-field col col-sm-10 col-lg-5 col-xl-4 mt-3 ms-2 ms-sm-3"
      >
        <input type="text" name="search" class="search px-2 py-1" id="search" />
        <button type="submit" class="btn-submit"></button>
      </form>

      <section class="boards-container row row-cols-2 row-cols-sm-3 row-cols-lg-4 mt-4 mx-0">
        <div class="col p-2 p-sm-3">
          <button id="new-board" class="board-box flex-column">
            <img class="col-5 col-sm-4 col-lg-3" src="../assets/images/icons8-docs.svg" alt="Todo_list">
            New
          </button>
        </div>
        <BoardBox :name="'Daily'"/>
        <BoardBox :name="'Weekend'"/>
        <BoardBox :name="'Top secret'"/>
        <BoardBox :name="'Random'"/>
      </section>
    </div>
  </div>
</template>

<script>
import BoardBox from '@/components/BoardBox.vue';

export default {
  name: "YourBoards",
  components: {
    BoardBox
  },
  mounted() {
    this.$emit("changeLink", 'logged')
  },
};
</script>