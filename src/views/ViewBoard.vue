<template>
  <div class="view-board m-0">
    <div class="container">
      <h1 class="title mt-3 mt-md-5 ms-2 ms-sm-3">
        {{ boardName ? boardName : "Default" }}
      </h1>
      <nav ref="mobile-nav" class="navbar mobile-nav px-2 border-top d-lg-none" >
        <ul class="navbar-nav d-flex flex-row justify-content-between w-100">
          <li ref="to-do-marker" @click="mobileNav('to-do')" :class="{'selected': showTable == 'to-do'}">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#5e5e5e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M29 16a13 13 0 11-26 0 13 13 0 0126 0h0z"
              />
              <path
                stroke="#bbb"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.5 16l3.5 3.5 6-6"
              />
            </svg>
            <span>To Do</span>
          </li>
          <li ref="in-progress-marker" @click="mobileNav('in-progress')" :class="{'selected': showTable == 'in-progress'}">
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  stroke="#5e5e5e"
                  stroke-width="2"
                />
                <path
                  stroke="#5e5e5e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8v8l4 4"
                />
              </svg>
              In progress
            </span>
          </li>
          <li ref="done-marker" @click="mobileNav('done')" :class="{'selected': showTable == 'done'}">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                  stroke="#5e5e5e"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
                <path
                  d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                  stroke="#5e5e5e"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
              </svg>
              Done
            </span>
          </li>
        </ul>
      </nav>
      <section class="boards-container row row-cols-1 row-cols-lg-3 px-2 px-lg-0 m-0 mt-lg-2">
        <BoardCard :title="'To Do'" :id="'to-do'" v-show="(mobileView && showTable == 'to-do') || !mobileView">
          <TaskItem :taskName="'Do a Firewalking'" />
          <TaskItem :taskName="'Learn How to Skate'" />
        </BoardCard>
        <BoardCard :title="'In progress'" :id="'in-progress'" v-show="(mobileView && showTable == 'in-progress') || !mobileView">
          <TaskItem :taskName="'Climb a Light House'" />
          <TaskItem :taskName="'Obtain a Patent'" />
          <TaskItem :taskName="'Become a United Nations Interpreter'" />
        </BoardCard>
        <BoardCard :title="'Done'" :id="'done'" v-show="(mobileView && showTable == 'done') || !mobileView">
          <TaskItem :taskName="'See Stonehenge'" />
          <TaskItem :taskName="'Party on a Yacht'" />
        </BoardCard>
      </section>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard.vue';
import TaskItem from '@/components/TaskItem.vue';
export default {
  name: "ViewBoard",
  components: {
    BoardCard,
    TaskItem
  },
  data() {
    return {
      showTable: "to-do",
      mobileView: '',
    };
  },
  props: {
    boardName: String,
  },
  methods: {
    mobileNav(refName) {
      this.showTable = refName;
    },
    mobileResize() {
    let element = this.$refs['mobile-nav']
      if(getComputedStyle(element).getPropertyValue('display') == 'none') this.mobileView = false
      else this.mobileView = true
    }
  },
  mounted() {
    this.mobileNav(this.showTable);
    window.addEventListener('resize', this.mobileResize);
    this.mobileResize();
    this.$emit("changeLink", 'logged')
  },
};
</script>
