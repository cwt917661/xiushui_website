import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/utilities/callService.js';

export const useDonateCategoryStore = defineStore('donateCategoryStore', () => {

    const catgList = ref([]);
    const category = ref(null);
    const success = ref(false);
    const error = ref(null);

    async function fetchAll() {
        error.value = null;
        catgList.value = [];
        var url = import.meta.env.VITE_REST_URL_DONATECATEGORY_GET_ALLINFO;
        try {
            await apiGetDataService(url)
                .then((response) => {
                    catgList.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function addNewCategory(sendData) {
        error.value = null;
        category.value = null;
        var url = import.meta.env.VITE_REST_URL_DONATECATEGORY_ADD_NEW;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    category.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function deleteCategory(sendData) {
        error.value = null;
        var url = import.meta.env.VITE_REST_URL_DONATECATEGORY_DELETE;
        try {
            success.value = await apiDeleteDataService(url, sendData)
                .then(() => true)
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    return { catgList, category, success, error, fetchAll, addNewCategory, deleteCategory };
});