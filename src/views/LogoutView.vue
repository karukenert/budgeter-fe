<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {useAuth} from "../composables/useAuth";
import {ERoutes} from "../router/router";

const {logout} = useAuth()
const router = useRouter()

onMounted(() => {
      logout();
      router.push({name: ERoutes.LOGIN});
    }
);
</script>
