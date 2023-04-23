<template>
  <div class="container flex items-center justify-between gap-x-4 lg:justify-start">
    <button :disabled="page === 1" @click="loadPage(page - 1)" class="flex items-center gap-x-2 rounded-lg bg-slate-100 px-4 py-2 text-slate-700 outline-offset-4 duration-500 tranistion ease-sencodary group/btn hover:bg-slate-300 active:bg-slate-400 disabled:bg-slate-50 disabled:text-slate-300 lg:text-sm">
      <inline-svg :src="leftIcon" class="h-3 w-3 group-hover/btn:animate-bounce group-focus/btn:animate-bounce group-disabled/btn:fill-slate-200 fill-slate-500"></inline-svg>
      Prev
    </button>
    <span>Page {{ page }} of &infin;</span>
    <button  @click="loadPage(page + 1)" class="flex items-center gap-x-2 rounded-lg bg-slate-100 px-4 py-2 text-slate-700 outline-offset-4 duration-500 tranistion ease-sencodary group/btn hover:bg-slate-300 active:bg-slate-400 lg:text-sm">
      Next
      <inline-svg :src="rightIcon" class="h-3 w-3 group-hover/btn:animate-bounce group-focus/btn:animate-bounce fill-slate-500"></inline-svg>
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
