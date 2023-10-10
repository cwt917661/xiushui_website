import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/services/api.js';

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        users: [],
        user: null,
        loading: false,
        success: false,
        error: null
    }),
    getters: {
        // getAllCategories: (state) => state.categories,
        // getNewCategory: (state) => state.category,
    },
    actions: {
        async fetchAll() {
            this.error = null;
            this.users = [];
            this.loading = true;
            var url = import.meta.env.VITE_REST_URL_USER_GET_ALLINFO;
            try {
                await apiGetDataService(url)
                    .then((response) => {
                        this.users = response.data.respData;
                        this.success = true;
                    });
            } catch (error) {
                this.success = false;
                this.error = error.errMsg;
            } finally {
                this.loading = false;
            }
        },
    }
})