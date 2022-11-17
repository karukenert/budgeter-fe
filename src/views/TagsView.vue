<script setup lang="ts">
import {onMounted, ref} from "vue";
import {usePocketBase} from "../composables/usePocketBase";
import {ITag} from "../types/tag.interface";

const {client} = usePocketBase()

const data = ref<ITag[]>([])
onMounted(async () => {
  data.value = await client.records.getFullList('tags') as unknown as ITag[]
})

const formValid = ref(false)
const model = ref<Pick<ITag, 'label' | 'comment'>>({
  label: '',
  comment: null,
})
const rules = {
  label: [
    (v: string) => !!v || 'Label is required',
  ]
}

const postTag = async () => {
  await client.records.create('tags', model.value)
  data.value = await client.records.getFullList('tags') as unknown as ITag[]

}

const removeTag = async (i: ITag) => {
  await client.records.delete('tags', i.id)
  data.value = await client.records.getFullList('tags') as unknown as ITag[]
}
</script>


<template>
  <v-card class="ma-5 pa-5">
    <v-form
        ref="form"
        v-model="formValid"
    >
      <v-text-field
          v-model="model.label"
          :counter="10"
          :rules="rules.label"
          label="Label"
          required
          type="text"
      />

      <v-text-field
          v-model="model.comment"
          label="Comment"
          type="text"
      >
      </v-text-field>

      <!--        :disabled="!formValid"-->
      <v-btn
          color="success"
          class="mr-4"
          @click="postTag"
      >
        Add tag
      </v-btn>
    </v-form>
  </v-card>

  <v-chip v-for="i in data">
    {{ i.label }}
    <template v-slot:append="props">
      <v-icon v-bind="props" @click="removeTag(i)">mdi-close</v-icon>
    </template>
  </v-chip>
</template>
