<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from 'vue'
import {useAuth} from "@/composables/useAuth";

const router = useRouter();
const {isAuthenticated, login} = useAuth()

const model = ref<{
  email: string | null
  password: string | null
}>({
  email: null,
  password: null,
})

const loginLocal = async () => {
  const {email, password} = model.value;
  if (email && password) await login(email, password)
  if (isAuthenticated.value) await router.push({name:'Budgets'})
}

</script>

<template>
  Login
<!--  <n-space justify="center">-->
<!--    <n-form :model="model"  @keydown.enter.prevent="login">-->
<!--      <n-form-item path="email" label="Email" required>-->
<!--        <n-input v-model:value="model.email" type="text"/>-->
<!--      </n-form-item>-->
<!--      <n-form-item path="password" label="Password" required >-->
<!--        <n-input-->
<!--            v-model:value="model.password"-->
<!--            auto-complete="on"-->
<!--            type="password"-->
<!--        />-->
<!--      </n-form-item>-->
<!--      <n-button-->
<!--          :disabled="!model.password || !model.email"-->
<!--          auto-complete="on"-->
<!--          round-->
<!--          type="primary"-->
<!--          @click="loginLocal"-->
<!--      >-->
<!--        Login-->
<!--      </n-button>-->
<!--    </n-form>-->
<!--  </n-space>-->
</template>
