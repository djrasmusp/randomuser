<template>
  <div class="aspect-square w-full shadow-card lg:mt-8 lg:rounded-xl h-auto grow-0 overflow-hidden relative group-hover/user:shadow-xl transition ease-secondary grayscale-0 duration-700">
    <img :src="picture.large" class="h-full w-full object-cover relative z-0 scale-100 brightness-100 group-hover/user:scale-110 transition ease-secondary duration-1000 overflow-hidden" alt="">
    <gender-badge :gender="gender" is-big></gender-badge>
  </div>
</template>

<script lang="ts">
export default {
  name: "UserImage",

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
