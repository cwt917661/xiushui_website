import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/services/api.js';

export const useUserStore = defineStore('userStore', () => {
    const userList = ref([]);
    const user = ref(null);
    const success = ref(false);
    const error = ref(null);
    async function fetchAll() {
        error.value = null;
        userList.value = [];
        var url = import.meta.env.VITE_REST_URL_USER_GET_ALLINFO;
        try {
            await apiGetDataService(url)
                .then((response) => {
                    userList.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.errMsg;
        }
    }

    return { userList, user, success, error, fetchAll };
});