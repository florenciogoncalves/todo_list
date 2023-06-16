<template>
  <div class="board-card">
    <h3 class="title d-none d-md-block mt-1">{{ title }}</h3>
    <div class="tasks px-4 py-3 shadow-sm h-100">
      <form action="" method="POST">
      <input type="text" class="insert-task border-0 border-bottom w-100 px-2" placeholder="Type here">
    </form>
    </div>
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'BoardCard',
    props: {
      title: String
    }
  }
</script>