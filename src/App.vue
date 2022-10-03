<template>
  <v-app>
    <v-main>
      <the-header/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
</script>
