<script setup lang="ts">
import {useRouteParams} from "@vueuse/router";
import {ref} from "vue";
// TODO: add shorthand paths
import {ITransaction} from "../../../types/transaction.interface";
import TransactionsTable from "../../../components/TransactionsTable.vue"

// const {client} = useAuth()
//

const activeBudgetKey = useRouteParams('budgetKey')

// const error = ref('')
//
const data = ref<ITransaction[]>([]);
// const fetchAll = async () => {
//   try {
//     const response = await client.records.getFullList('transactions', 200, {
//       filter: `budgetId = ${props.budgetKey}`,
//       sort: 'day'
//     });
//     data.value = response as unknown as ITransaction[];
//   } catch (e) {
//     error.value = e
//   }
// };

// watchEffect(fetchAll)
</script>

<template>
  Budget Transactions Detailed: {{ activeBudgetKey }}
  <!--  <n-tabs key="tabs" type="card" v-model:value="chosenMonth" >-->
  <!--    <n-tab v-for="month in months" :key="`tab_${month}`" :name="EMonth[month]"  />-->
  <!--  </n-tabs>-->
  <transactions-table v-if="data" :data="data"/>
</template>
