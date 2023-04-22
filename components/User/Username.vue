<template>
  <div class="flex gap-x-4 items-center">
    <inline-svg :src="svgPath" class="h-4 w-4 fill-slate-400 "></inline-svg>
    <span class="text-slate-700 lg:text-sm leading-relaxed">{{ username }}</span>
  </div>
</template>

<script lang="ts">
import InlineSvg from 'vue-inline-svg';

export default {
  name: "Username",

  components: {
    InlineSvg,
  },

  props: {
    username: {
      type: String,
      required: true
    }
  },

  computed: {
    svgPath(): String {
      return require('~/static/icons/user.svg')
    },
  }
}
</script>
