import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/services/api.js';

export const usePaidRecordStore = defineStore('paidRecordStore', () => {

    const recordList = ref([]);
    const record = ref(null);
    const success = ref(false);
    const error = ref(null);

    async function fetchAll(sendData) {
        error.value = null;
        recordList.value = [];
        var url = import.meta.env.VITE_REST_URL_PAIDRECORD_GET_ALLINFO;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    recordList.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.errMsg;
        }
    }

    async function AddNewRecord(sendData) {
        error.value = null;
        record.value = null;
        var url = import.meta.env.VITE_REST_URL_PAIDRECORD_ADD_NEW;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    record.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.errMsg;
        }
    }


    return { recordList, record, success, error, fetchAll, AddNewRecord };
});