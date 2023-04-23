<template>
  <a :href="`mailto:${email}`" class="flex w-auto items-center gap-x-4 outline-offset-4 group/email">
    <inline-svg :src="emailIcon" class="h-4 w-4 fill-slate-400 group-hover/email:fill-slate-700 group-focus/email:fill-slate-700 duration-500 tranistion ease-secondary" title="email"></inline-svg>
    <span class="leading-relaxed text-slate-700 group-hover/email:text-slate-900 group-focus/email:text-slate-900 underline decoration-transparent group-hover/email:decoration-slate-700 group-focus/email:decoration-slate-700 underline-offset-2 duration-300">{{ email }}</span>
  </a>
</template>

<script lang="ts">
import InlineSvg from 'vue-inline-svg';

export default {
  name: "UserEmail",

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
    emailIcon(): String {
      return require('~/static/icons/email.svg')
    },
  }
}
</script>
