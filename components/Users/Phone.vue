<template>
  <div class="hidden lg:flex gap-x-2 items-center">
    <inline-svg :src="phoneIcon" class="h-3 w-3 fill-slate-300"></inline-svg>
  <span class="text-xs text-slate-700 leading-relaxed">{{ formattedNumber }}</span>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
export default {
  name: "UsersPhone",

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
    phoneIcon() {
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
