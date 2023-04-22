<template>
  <a :href="`tel:${phone}`" class="flex gap-x-4 items-center group/phone outline-offset-4">
    <inline-svg :src="svgPath" class="h-4 w-4 fill-slate-400 group-hover/phone:fill-slate-700 group-focus/phone:fill-slate-700 tranistion ease-secondary duration-500" title="phone"></inline-svg>
    <span class="text-slate-700 leading-relaxed underline underline-offset-2 decoration-transparent duration-300 group-hover/phone:decoration-slate-700 group-hover/phone:text-slate-900 group-focus/phone:decoration-slate-700 group-focus/phone:text-slate-900">{{ formattedNumber }}</span>
  </a>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
export default {
  name: "UserPhone",

  components : {
    InlineSvg,
  },

  props : {
    phone : {
      type: String,
      require: true
    }
  },

  computed: {
    svgPath() {
      return require('~/static/icons/phone.svg')
    },

    formattedNumber() {
      let phoneNumber = '';
      for (let i = 0; i < this.phone.length; i += 2) {
        phoneNumber += this.phone.substring(i, i + 2) + ' ';
      }
      return phoneNumber.trim();
    }
  },
}
</script>

<style scoped>

</style>
