<!-- Please remove this file from your project -->
<template>
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 lg:gap-8 users">
          <NuxtLink :to="`user/${ user.login.username }`" v-for="user of users" v-bind:key="user.login.username" class="flex flex-col gap-y-4 opacity-100 transition-opacity ease-secondary duration-1000 group/user outline-offset-8" :aria-labelledby="user.login.username">
            <users-image :picture="user.picture" :gender="user.gender"></users-image>
            <div class="px-2 overflow-hidden">
              <users-name :name="user.name" :id="user.login.username"></users-name>
              <users-phone :phone="user.phone" class="mt-2"></users-phone>
              <users-email :email="user.email"></users-email>
            </div>
          </NuxtLink>
        </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'UsersComponent',

  props : {
    users : Array
  }

})
</script>
