<template>
  <div class="board-card p-0 col px-lg-3 pt-lg-2 mt-0" :class="{'typing': typing == true}">
    <h3 class="title d-none d-lg-block mb-0">{{ title }}</h3>
    <div class="tasks px-4 py-3 h-100 mt-3 mt-lg-0">
      <form action="" method="POST" class="add-new-task px-2 border-bottom mt-1 mt-lg-0">
        <input
          type="text"
          class="insert-task border-0 w-100"
          placeholder="Type here"
          @input="typingFunc"
        />
        <button v-show="typing" type="submit" class="submit">+</button>
      </form>
      <div class="tasks-list w-100 pt-2 d-flex flex-column gap-2 gap-lg-3">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardCard",
  data() {
    return {
      typing: true
    }
  },
  props: {
    title: String,
  },
  methods: {
    typingFunc: function (evt) {
      if(evt.target.value == "") this.typing = false
      else this.typing = true
    }
  },
};
</script>
