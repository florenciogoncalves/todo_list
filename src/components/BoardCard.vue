<template>
  <div class="board-card p-0 col">
    <h3 class="title d-none d-lg-block mt-2 mb-0">{{ title }}</h3>
    <div class="tasks px-4 py-3 h-100 mt-3">
      <form action="" method="POST" class="add-new-task px-2 border-bottom mt-1 mt-lg-0">
        <input
          type="text"
          class="insert-task border-0 w-100"
          placeholder="Type here"
        />
        <button type="submit" class="submit">+</button>
      </form>
      <div class="tasks-list w-100 pt-2">
        <TaskItem :taskName="'Do a Firewalking'" />
      </div>
    </div>
    <slot> </slot>
  </div>
</template>

<script>
import TaskItem from './TaskItem'
export default {
  name: "BoardCard",
  components: {
    TaskItem
  },
  props: {
    title: String,
  },
};
</script>
