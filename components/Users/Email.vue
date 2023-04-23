<template>
  <div class="hidden lg:flex gap-x-2 items-center">
    <inline-svg :src="emailIcon" class="h-3 w-3 fill-slate-300"></inline-svg>
    <span class="text-xs text-slate-700 overflow-hidden leading-relaxed ">{{ email }}</span>
  </div>
</template>

<script lang="ts">
import InlineSvg from 'vue-inline-svg';

export default {
  name: "UsersEmail",

  components: {
    InlineSvg,
  },

  props: {
    email: {
      type: String,
      required: true
    }
  },

  computed: {
    emailIcon() {
      return require('~/static/icons/email.svg')
    },
  }
}
</script>

<style scoped>
  span {
    mask-image: linear-gradient(90deg, #000 0%, #000 90%, transparent 100%);
  }
</style>
