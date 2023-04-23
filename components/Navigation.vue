<template>
  <header class="sticky top-0 w-full bg-slate-950 z-50 drop-shadow-lg">
    <div class="container flex justify-between py-4">
      <button @click="loadPage(1)" class="flex gap-x-4 items-center">
        <inline-svg :src="Logo" class="h-8 w-8 fill-slate-100" title="Random Users"></inline-svg>
        <span class="uppercase font-xl font-bold text-slate-100 tracking-widest">Random Users</span>
      </button>
      <button class="px-4 bg-slate-100 rounded-lg flex gap-x-2 items-center group outline-offset-4" @click="goBack"
              :class="[hideBtn ? 'hidden' :  '']">
        <inline-svg :src="Arrow" class="group-hover:animate-bounce group-focus:animate-bounce w-3 h-3"
                    aria-hidden="true"></inline-svg>
        <span class="text-xs uppercase font-bold">Go Back</span>
      </button>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import InlineSvg from 'vue-inline-svg';
import {mapActions, mapState} from 'vuex';

export default Vue.extend({
  name: "Navigation",

  props: {
    hideBtn: {
      type: Boolean
    }
  },

  components: {
    InlineSvg,
    ...mapState(['users', 'page']),
  },

  methods: {
    goBack() {
      this.$router.back();
    },
    ...mapActions(['loadPage']),
  },

  computed: {
    Logo() {
      return require('~/static/icons/logo.svg')
    },
    Arrow() {
      return require('~/static/icons/arrow-left.svg')
    },
  }
})
</script>
