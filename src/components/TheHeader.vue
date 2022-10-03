<script setup lang="ts">
// import {computed, h, Ref} from "vue";
// import {RouterLink} from "vue-router";
// import {useAuth} from "@/composables/useAuth";

// const {user, isAuthenticated} = useAuth()

// const menuOptions: Ref<MenuOption[]> = computed(() => {
//   const options = routes.filter(({meta}) => {
//     return !meta?.hidden && (meta?.requiresAuth ? isAuthenticated.value : true)
//   }).map(i => {
//     return {
//       label: () =>
//           h(
//               RouterLink,
//               {
//                 to: {
//                   name: i.name,
//                 },
//               },
//               {default: () => i.name}
//           ),
//       key: `${String(i.name)}_key`,
//     }
//   })
//
//   const logAction = isAuthenticated.value ? 'Logout' : 'Login';
//   options.push({
//     label: () =>
//         h(
//             RouterLink,
//             {
//               to: {
//                 name: logAction,
//               },
//             },
//             {default: () => logAction}
//         ),
//     key: `${logAction}_key`
//   });
//
//   return options;
// });
</script>

<template>
  Header
<!--  <n-layout-header style="height: 64px; padding: 24px" bordered>-->
<!--    <n-menu :key="`${menuOptions.length}_menu`" mode="horizontal" :options="menuOptions"/>-->
<!--    {{ user?.id }}-->
<!--  </n-layout-header>-->
</template>
