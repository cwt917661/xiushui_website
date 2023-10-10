import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/services/api.js';

export const useUserDonateStore = defineStore({
    id: 'userDonateStore',
    state: () => ({
        donations: [],
        donation: null,
        loading: false,
        success: false,
        error: null
    }),
    getters: {
        // getAllCategories: (state) => state.categories,
        // getNewCategory: (state) => state.category,
    },
    actions: {
        async fetchOverallData(url) {
            this.error = null;
            this.donations = [];
            this.loading = true;
            try {
                await apiGetDataService(url)
                    .then((response) => {
                        this.donations = response.data.respData;
                        this.success = true;
                    });
            } catch (error) {
                this.success = false;
                this.error = error.errMsg;
            } finally {
                this.loading = false;
            }
        },
        async fetchByUserId(sendData) {
            this.error = null;
            this.donations = [];
            this.loading = true;
            var url = import.meta.env.VITE_REST_URL_USERDONATE_GET_BY_USERID;
            try {
                await apiPostDataService(url, sendData)
                    .then((response) => {
                        this.donations = response.data.respData;
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