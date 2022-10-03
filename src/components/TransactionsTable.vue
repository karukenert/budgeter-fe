<script setup lang="ts">
import {ITransaction} from "../types/transaction.interface";

const columns = [
  {
    title: 'UserId',
    key: 'userId'
  },
  {
    title: 'Day',
    key: 'day'
  },
  {
    title: 'Month',
    key: 'month'
  },
  {
    title: 'Year',
    key: 'year'
  },
  {
    title: 'Weekday',
    key: 'weekday'
  },
  {
    title: 'Amount',
    key: 'amount'
  },

  {
    title: 'Category',
    key: 'category'
  },
  {
    title: 'Split',
    key: 'split'
  },
  {
    title: 'Comment',
    key: 'comment'
  },

];

const props = defineProps<{
  data: ITransaction[]
}>();
</script>

<template>
  Data table
</template>
