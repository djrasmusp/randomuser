<template>
  <div class="container flex gap-x-4 justify-between lg:justify-start items-center">
    <button :disabled="page === 1" @click="loadPage(page - 1)" class="disabled:invisible flex gap-x-2 items-center rounded-lg bg-slate-200 px-4 py-2 hover:bg-slate-300 active:bg-slate-400 tranistion ease-sencodary duration-500 outline-offset-4 group/btn">
      <inline-svg :src="leftIcon" class="h-3 w-3 group-hover/btn:animate-bounce group-focus/btn:animate-bounce"></inline-svg>
      Prev
    </button>
    <span>Page {{ page }} of &infin;</span>
    <button  @click="loadPage(page + 1)" class="flex gap-x-2 items-center rounded-lg bg-slate-200 px-4 py-2 hover:bg-slate-300 active:bg-slate-400 tranistion ease-sencodary duration-500 outline-offset-4 group/btn">
      Next
      <inline-svg :src="rightIcon" class="h-3 w-3 group-hover/btn:animate-bounce group-focus/btn:animate-bounce"></inline-svg>
    </button>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    InlineSvg
  },
  computed: {
    ...mapState(['users', 'page']),
    leftIcon() {
      return require('~/static/icons/arrow-left.svg')
    },
    rightIcon()  {
      return require('~/static/icons/arrow-right.svg')
    }
  },
  methods: {
    ...mapActions(['loadPage']),
  },
}
</script>
