<script setup lang="ts">
import {ref} from "vue";
import {ERoutes} from "../router/router";
// TODO: fetch user budgets in onMounted callback

const budgets = ref<Record<string, unknown>[]>([{a:1}, {a:2}, {a:3}]);
</script>

<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item link v-for="i in budgets" :to="{ name: ERoutes.BUDGET_TRANSACTIONS_DETAILED, params: { budgetKey: i.a }}" >
        {{ i }}
      <!-- TODO: settings btn to go to ERoutes.BUDGET_DETAILED -->
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
