<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from 'vue'
import {usePocketBase} from "../composables/usePocketBase";
import type {VForm} from 'vuetify/lib/components'
import {ERoutes} from "../router/router";

const router = useRouter();
const {isAuthenticated, login} = usePocketBase()

const form = ref<InstanceType<typeof VForm> | null>(null)
const formValid = ref(false)
const model = ref<{
  email: string | null
  password: string | null
}>({
  email: 'fake@email.com',
  password: '123123123',
})

const handleLogin = async () => {
  const {email, password} = model.value;
  if (email && password) {
    await login(email, password)
    if (isAuthenticated.value) await router.push({name: ERoutes.BUDGETS})
  }
}

// form
const rules = {
  email: [
    (v: string) => !!v || 'E-mail is required',
    (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  password: [(v: string) => !!v || 'Password is required']
}
const displayPassword = ref(false);
</script>

<template>
  <v-card class="ma-5 pa-5">
    <v-form
        ref="form"
    >
<!--        v-model="formValid"-->
      <v-text-field
          v-model="model.email"
          :counter="10"
          :rules="rules.email"
          label="E-mail"
          required
          type="email"
      />

      <v-text-field
          v-model="model.password"
          :rules="rules.password"
          label="Password"
          required
          :type="displayPassword ? 'text' : 'password'"
      >
        <template #append>
          <v-icon @click="displayPassword = !displayPassword"
          >{{displayPassword ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
        </template>
      </v-text-field>

<!--          :disabled="!formValid"-->
      <v-btn
          color="success"
          class="mr-4"
          @click="handleLogin"
      >
        Login
      </v-btn>
    </v-form>
  </v-card>
</template>
