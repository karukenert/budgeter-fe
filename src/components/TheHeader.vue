<script setup lang="ts">
import {routes,ERoutes} from '../router/router'
import {usePocketBase} from "../composables/usePocketBase";

const { isAuthenticated } = usePocketBase()
// TODO: show privileged tabs
// const authLinks = computed(()=> isAuthenticated.value ? routes.filter(i => i.meta?.requiresAuth).filter(i => !i.meta?.hidden) : [])
</script>

<template>
  <v-app-bar app flat>
    <template v-for="link in routes">
      <v-btn v-if="!link.meta?.hidden" link :to="{name: link.name}" :key="`${String(link.name)}_key`" >
        {{ link.name }}
      </v-btn>
    </template>
    <v-spacer/>
    <v-btn v-if="isAuthenticated" link :to="{name: ERoutes.LOGOUT}" key="logout_key">
      Sign out
    </v-btn>
    <v-btn v-else link :to="{name: ERoutes.LOGIN}" key="login_key">
      Sign in
    </v-btn>
  </v-app-bar>
</template>
