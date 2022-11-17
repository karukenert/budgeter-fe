<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {ERoutes} from "../router/router";

const route = useRoute();

const budgets = ref<Record<string, unknown>[]>([{budgketKey: 1}, {budgketKey: 2}, {budgketKey: 3}]);
const activeBudgetKey = computed(() => route.params.budgetKey)

// TODO: fetch user budgets
// TODO: show wrench to owners only
</script>

<template>
  <v-navigation-drawer app floating permanent>
    <v-list>
      <template v-for="i in budgets">
        <v-hover v-slot:default="{ isHovering, props }">
          <v-list-item v-bind="props" nav link class="mx-2" rounded="xl"
                       :to="{ name: ERoutes.BUDGET_TRANSACTIONS_DETAILED, params: { budgetKey: i.budgketKey }}">
            {{ i }}
            <template v-slot:append="props">
              <v-btn v-show="isHovering || props.isActive" v-bind="props" size="x-small" icon="mdi-wrench" link
                     :to="{ name: ERoutes.BUDGET_DETAILED, params: { budgetKey: i.budgketKey }}"/>
            </template>
          </v-list-item>
        </v-hover>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
