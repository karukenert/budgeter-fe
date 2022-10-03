<script setup lang="ts">
import {useAuth} from "../composables/useAuth";
import {ref} from "vue";

const { user, client } = useAuth();
const budgets = ref<Record<string, unknown>[]>([{a:1}, {a:2}, {a:3}]);
</script>

<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item link v-for="i in budgets" >
        {{ i }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
