<script setup lang="ts">
import {useRouteParams} from "@vueuse/router";
import { ref} from "vue";
// import DeleteBudgetDialog from "./dialog/DeleteBudgetDialog.vue";

const activeBudgetKey = useRouteParams('budgetKey')


const dialogActive = ref(false)
const openDeleteModal = () => {
  dialogActive.value = true;
  // h(DeleteBudgetDialog, {dialog: true, budgetKey: props.budgetKey})
}
// TODO: dialog logic
</script>

<template>
  <div class="d-flex">
    <p> Budget Detailed: {{ activeBudgetKey }}</p>
    <v-spacer/>
<!--    <delete-budget-dialog :dialog="dialogActive" :budget-key="props.budgetKey"/>-->
    <v-btn color="red" @click="openDeleteModal">Delete budget</v-btn>
  </div>
</template>
