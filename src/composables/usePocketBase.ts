import PocketBase from 'pocketbase'
import {computed} from "vue";

const baseURL = import.meta.env.VITE_VUE_APP_API_BASE_URL;
const client = new PocketBase(baseURL);

// TODO wrap PB with try catch

const login = async (email: string, password: string) => {
    try {
        await client.users.authViaEmail(email, password);
    } catch (e) {
        // TODO: Error toast
        console.error(e)
    }
};
const logout = () => client.authStore.clear();

const isAuthenticated = computed(()=> !!client.authStore.model)
const user = computed(()=> client.authStore.model)

export function usePocketBase() {
    return {
        client,
        user,
        isAuthenticated,
        login,
        logout
    }
}
