<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {useAuth} from "@/composables/useAuth";

const {client} = useAuth()
const router = useRouter()

onMounted(async () => {
      await client.authStore.clear();
      await router.push('Login');
    }
);
</script>
