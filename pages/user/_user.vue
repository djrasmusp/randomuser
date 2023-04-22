<template>
  <div>
    <navigation></navigation>
    <div class="container px-0 sm:px-8 lg:px-16 xl:px-20 2xl:px-24  mb-16" v-if="user" v-model="user">
      <div class="grid grid-row-2 lg:grid-cols-2 items-center gap-8">
        <user-image :gender="user.gender" :picture="user.picture" class="order-first lg:order-last"></user-image>
        <div class="order-last lg:order-first px-6 lg:px-0">
          <user-name :name="user.name"></user-name>
          <div class="grid lg:grid-cols-2 gap-6 lg:gap-4">
            <user-email :email="user.email"></user-email>
            <user-phone :phone="user.phone"></user-phone>
            <user-address :location="user.location" class="lg:col-span-2"></user-address>
            <user-username :username="user.login.username" class="lg:col-span-2"></user-username>
            <user-timezone :timezone="user.location.timezone"></user-timezone>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {mapGetters} from 'vuex'
import {storeUsersData} from "~/functions/fetchData";

export default Vue.extend({
  name: 'UserPage',

   methods : {
    goBack() {
      this.$router.back();
    }
   },

  computed: {
    ...mapGetters(['getUserData']),
    user() {
      return this.getUserData(this.$route.params.user)
    },
  }
})
</script>
