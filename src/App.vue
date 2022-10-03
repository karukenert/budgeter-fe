<template>
  <v-app>
    <the-header/>
    <v-main>
      <v-container fluid>
        <v-content>
          <router-view/>
        </v-content>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
</script>
