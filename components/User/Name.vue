<template>
  <h1 class="font-bold uppercase text-4xl relative inline-block mb-12 text-slate-900">{{ name.first }} {{ name.last }}</h1>
</template>

<script lang="ts">
export default {
  name: "Name",

  props : {
    name : {
      type : Object,
      required : true
    }
  }
}
</script>

<style scoped>
h1:after {
  content: "";
  @apply absolute -bottom-2 left-0 h-0 w-full origin-bottom-left scale-x-100 group-hover/user:scale-x-100 group-focus/user:scale-x-100 rounded-sm border-slate-300 transition-transform duration-1000 border ease-secondary;
}
</style>
