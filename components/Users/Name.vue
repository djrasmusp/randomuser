<template>
  <h2 class="relative inline-block w-auto font-medium text-slate-900 group-hover" :id="id">{{ name.first }} {{ name.last}}</h2>
</template>

<script>
export default {
  name: "UsersName",

  props : {
    name : Object,
    id : String
  }
}
</script>

<style scoped>
  h2:after {
    content : "";
    @apply absolute -bottom-0 left-0 h-0 w-full origin-bottom-left scale-x-0 group-hover/user:scale-x-100 group-focus/user:scale-x-100 rounded-sm border-slate-300 transition-transform duration-1000 border-[0.5px] ease-secondary;
  }

  h2:hover:after {
    @apply origin-bottom-left scale-x-100;
  }
</style>
