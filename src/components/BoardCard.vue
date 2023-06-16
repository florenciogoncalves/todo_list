<template>
  <div class="board-card">
    <h3 class="title d-none d-lg-block mt-2">{{ title }}</h3>
    <div class="tasks px-4 py-3 shadow-sm h-100">
      <form action="" method="POST" class="px-2">
      <input type="text" class="insert-task border-0 border-bottom w-100" placeholder="Type here">
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