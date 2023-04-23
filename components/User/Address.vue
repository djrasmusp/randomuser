<template>
  <address class="not-italic flex gap-x-2">
    <inline-svg :src="addressIcon" class="h-4 w-4 fill-slate-400 mt-1" ></inline-svg>
    <div>
      <p class="block lg:text-sm text-slate-700 leading-relaxed lg:leading-relaxed">{{ location.street.name }} {{ location.street.number }}<br>
      {{ location.postcode }} {{ location.city }}, {{ location.country }}</p>
    </div>
  </address>
</template>

<script lang="ts">
import InlineSvg from 'vue-inline-svg';
export default {
  name: "Address",

  components : {
    InlineSvg,
  },

  props : {
    location : {
      type: Object,
      required : true,
    }
  },

  computed: {
    addressIcon() : String {
      return require('~/static/icons/location.svg')
    }
  }
}
</script>

<style scoped>

</style>
