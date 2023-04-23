<template>
    <div
      :class="[isBig ? 'bottom-6 right-6 gap-x-2 px-2 py-1 rounded-lg' : 'bottom-2 right-2 gap-x-1.5 px-1.5 py-1 rounded-lg', hideOnMobile ? 'hidden lg:flex' : 'flex', gender]"
      class="absolute items-center drop-shadow-sm">
      <inline-svg :class="[isBig ? 'h-4 w-4' : 'h-3 w-3']" :src="genderIcon" :title="gender" aria-hidden="true"
                  class="h-3 w-3"></inline-svg>
      <span :class="[isBig ? '' : 'text-xs']" class="font-medium capitalize">{{ gender }}</span>
    </div>
</template>

<script>

import InlineSvg from 'vue-inline-svg';

export default {

  name: "GenderBadge",

  components: {
    InlineSvg,
  },

  computed: {
    genderIcon() {
      return require(`~/static/icons/${this.gender}.svg`)
    }
  },

  props: {
    gender: {
      type: String,
      required: true,
    },
    isBig: {
      type: Boolean
    },
    hideOnMobile: {
      type: String
    }
  }

}
</script>

<style scoped>
.male {
  @apply bg-blue-800 text-blue-50 fill-blue-50;
}

.female {
  @apply bg-rose-800 text-rose-50 fill-rose-50;
}
</style>
