<template>
  <div class="flex gap-x-4 items-center">
    <inline-svg :src="timezoneIcon" class="h-4 w-4 fill-slate-400"></inline-svg>
    <div>
      <p class="block lg:text-sm text-slate-700">{{ timezone.description }} <span class="text-xs text-slate-400">({{ timezone.offset }})</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import InlineSvg from "vue-inline-svg";

export default {
  name: "Timezone",
  components: {
    InlineSvg
  },

  props: {
    timezone: {
      type: Object,
      required: true,
    }
  },

  computed: {
    timezoneIcon() : String {
      return require('~/static/icons/time.svg')
    }
  }
}
</script>
