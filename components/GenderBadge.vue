<template>
    <div
      :class="[isBig ? 'bottom-4 right-4 gap-x-2 px-2 py-1 rounded-lg' : 'bottom-2 right-2 gap-x-1.5 px-1.5 py-1 rounded-lg', hideOnMobile ? 'hidden lg:flex' : 'flex', gender]"
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
  @apply bg-gradient-to-t from-blue-100 to-blue-50 text-blue-800 fill-blue-800;
}

.female {
  @apply bg-gradient-to-t from-rose-100 to-rose-50 text-rose-800 fill-rose-800;
}
</style>
