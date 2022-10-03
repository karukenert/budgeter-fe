<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from 'vue'
import {useAuth} from "../composables/useAuth";
import type {VForm} from 'vuetify/lib/components'
import {ERoutes} from "../router/router";

const router = useRouter();
const {isAuthenticated, login} = useAuth()

const form = ref<InstanceType<typeof VForm> | null>(null)
const formValid = ref(false)
const model = ref<{
  email: string | null
  password: string | null
}>({
  email: null,
  password: null,
})

const handleLogin = async () => {
  const {email, password} = model.value;
  if (email && password) await login(email, password)
  if (isAuthenticated.value) await router.push({ name: ERoutes.BUDGETS })
}

// TODO: typing
const rules = {
  email: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  password: [v => !!v || 'Password is required']
}

</script>

<template>
  <v-form
      ref="form"
      v-model="formValid"
      lazy-validation
  >
    <v-text-field
        v-model="model.email"
        :counter="10"
        :rules="rules.email"
        label="E-mail"
        required
    />

    <v-text-field
        v-model="model.password"
        :rules="rules.password"
        label="Password"
        required
    />

    <v-btn
        :disabled="!formValid"
        color="success"
        class="mr-4"
        @click="handleLogin"
    >
      Login
    </v-btn>
  </v-form>
</template>
