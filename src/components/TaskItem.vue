<template>
  <div class="task-item">
    <div class="task-name p-2">{{ taskName }}</div>
    <button class="delete-task">x</button>
  </div>
</template>

<script>
  export default {
    name: 'TaskItem',
    props: {
      taskName: String
    }
  }
</script>