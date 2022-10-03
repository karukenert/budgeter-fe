<script setup lang="ts">
const props = defineProps<{
  budgetKey: string
}>();

</script>

<template>
  Budget Detailed: {{ props.budgetKey }}
</template>
