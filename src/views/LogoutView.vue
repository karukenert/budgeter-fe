<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {usePocketBase} from "../composables/usePocketBase";
import {ERoutes} from "../router/router";

const {logout} = usePocketBase()
const router = useRouter()

onMounted(() => {
      logout();
      router.push({name: ERoutes.LOGIN});
    }
);
</script>
