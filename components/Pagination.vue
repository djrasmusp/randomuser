<template>
  <div class="container flex gap-x-4 justify-between lg:justify-start">
    <button :disabled="page === 1" @click="loadPage(page - 1)">Prev</button>
    <span>Page {{ page }}</span>
    <button  @click="loadPage(page + 1)">Next</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['users', 'page']),
  },
  methods: {
    ...mapActions(['loadPage']),
  },
}
</script>
