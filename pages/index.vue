<template>
  <div>
    <navigation :hide-btn="true"></navigation>
    <div class="container mt-8 mb-8">
      <h1 class="font-bold uppercase text-4xl relative inline-block mb-8 text-slate-900">Random Users</h1>
      <pagination class="mb-6 px-0 lg:justify-end"></pagination>
      <Users :users="this.users"/>
    </div>
    <pagination></pagination>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import {storeUsersData} from "~/functions/fetchData";

export default Vue.extend({
  name: 'IndexPage',


  async asyncData({store}) {
    const page = store.state.page,
      storeData = storeUsersData(store, page)
    await storeData()
  },

  computed: {
    users() {
      return this.$store.state.users
    },
    page() {
      return this.$store.state.page
    }
  }

})
</script>
