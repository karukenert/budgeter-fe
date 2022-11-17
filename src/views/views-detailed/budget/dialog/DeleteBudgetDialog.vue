<!--<script setup lang="ts">-->
<!--import {ref, toRefs} from "vue";-->

<!--const props = defineProps<{ budgetKey: string, dialog:boolean }>()-->
<!--const   dialogRef  = ref(props.dialog);-->

<!--const deleteBudget = async () => {-->
<!--  dialogRef.value = true-->
<!--  // TODO: api call-->
<!--  // dialogRef.value = false-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <div class="text-center">&ndash;&gt;-->
<!--    <v-dialog-->
<!--        v-model="dialogRef"-->
<!--    >-->

<!--      <v-card>-->
<!--        <v-card-text>-->
<!--          Are you sure you want to delete budget {{ props.budgetKey }}-->
<!--        </v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-btn @click="dialogRef = false">Cancel</v-btn>-->
<!--          <v-btn color="red" @click="deleteBudget">Yes, delete!</v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-dialog>-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--</template>-->
