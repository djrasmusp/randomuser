<template>
  <div class="aspect-square w-full rounded-lg shadow-card h-auto grow-0 overflow-hidden relative group-hover/user:shadow-xl transition ease-secondary duration-700">
    <img :src="picture.large" class="h-full w-full object-cover relative z-0 scale-[1.02] group-hover/user:scale-110 transition ease-secondary duration-1000 overflow-hidden contrast-100	blur-none" alt="">
    <gender-badge :gender="gender" hide-on-mobile="false"></gender-badge>
  </div>
</template>

<script>
export default {
  name: "UsersImage",

  props : {
    picture : {
      type : Object,
      required : true
    },
    gender : {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.users:has(a:hover) a:not(:hover) div img,
.users:has(a:focus) a:not(:focus) div img {
  @apply transition ease-secondary duration-1000 contrast-50 blur-sm;
}
</style>
