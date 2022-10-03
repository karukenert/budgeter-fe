<script setup lang="ts">
import {h, Component, onMounted, ref, computed, Ref} from "vue";
import { RouterLink, useRoute } from 'vue-router'


const route = useRoute();
const activeKey = computed(()=> route.params.budgetKey)
import {useAuth} from "@/composables/useAuth";

const {user, client} = useAuth()
const budgets = ref<Record<string, unknown>[]>([]);


</script>
<template >
  Menu

</template>
