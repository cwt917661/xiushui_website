import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/utilities/callService.js';

export const useUserStore = defineStore('userStore', () => {
    const userList = ref([]);
    const typeList = ref([]);
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
            error.value = err.message;
        }
    }

    async function fetchAllTypes() {
        error.value = null;
        typeList.value = [];
        var url = import.meta.env.VITE_REST_URL_USER_GET_ALLTYPES;
        try {
            await apiGetDataService(url)
                .then((response) => {
                    typeList.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function fetchById(sendData) {
        error.value = null;
        user.value = [];
        var url = import.meta.env.VITE_REST_URL_USER_GET_BY_ID;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    user.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function addNewUserService(sendData) {
        error.value = null;
        user.value = null;
        var url = import.meta.env.VITE_REST_URL_USER_ADD_NEW;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    user.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function editUserService(sendData) {
        error.value = null;
        user.value = null;
        var url = import.meta.env.VITE_REST_URL_USER_EDIT;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    user.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function deleteUserService(sendData) {
        error.value = null;
        var url = import.meta.env.VITE_REST_URL_USER_DELETE;
        try {
            success.value = await apiDeleteDataService(url, sendData)
                .then(() => true);
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    return { userList, typeList, user, success, error, fetchAll, fetchById, fetchAllTypes,
        addNewUserService, editUserService, deleteUserService };
});