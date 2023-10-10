import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/services/api.js';

export const useDonateCategoryStore = defineStore({
    id: 'donateCategoryStore',
    state: () => ({
        categories: [],
        category: null,
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
            this.categories = [];
            this.loading = true;
            var url = import.meta.env.VITE_REST_URL_DONATE_CATEGORY_GET_ALLINFO;
            try {
                await apiGetDataService(url)
                    .then((response) => {
                        this.categories = response.data.respData;
                        this.success = true;
                    });
            } catch (error) {
                this.success = false;
                this.error = error.errMsg;
            } finally {
                this.loading = false;
            }
        },
        async AddNewCategory(sendData) {
            this.error = null;
            this.category = null;
            this.loading = true;
            var url = import.meta.env.VITE_REST_URL_DONATE_CATEGORY_ADD_NEW;
            try {
                await apiPostDataService(url, sendData)
                    .then((response) => {
                        this.category = response.data.respData;
                        this.success = true;
                    });
            } catch (error) {
                this.success = false;
                this.error = error.errMsg;
            } finally {
                this.loading = false;
            }
        },
        async DeleteCategory(sendData) {
            this.error = null;
            this.loading = true;
            var url = import.meta.env.VITE_REST_URL_DONATE_CATEGORY_DELETE;
            try {
                this.success = await apiDeleteDataService(url, sendData)
                    .then(() => true)
            } catch (error) {
                this.success = false;
                this.error = error.errMsg;
            } finally {
                this.loading = false;
            }
        },
    }
})