import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiPostDataService, apiDeleteDataService } from '@/utilities/callService.js';

export const usePaidRecordStore = defineStore('paidRecordStore', () => {

    const donateInfo = ref(null);
    const recordList = ref([]);
    const record = ref(null);
    const remaining = ref(null);
    const success = ref(false);
    const error = ref(null);

    async function fetchAll(sendData) {
        error.value = null;
        recordList.value = [];
        donateInfo.value = null;
        var url = import.meta.env.VITE_REST_URL_PAIDRECORD_GET_ALLINFO;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    donateInfo.value = response.data.respData.donateInfo;
                    donateInfo.value.payment = donateInfo.value.totalAmount - donateInfo.value.currentPaid;
                    recordList.value = response.data.respData.records;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function addNewRecord(sendData) {
        error.value = null;
        remaining.value = null;
        var url = import.meta.env.VITE_REST_URL_PAIDRECORD_ADD_NEW;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    remaining.value = response.data.respData.remaining;
                    record.value = response.data.respData.record;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function deleteRecord(sendData) {
        error.value = null;
        remaining.value = null;
        var url = import.meta.env.VITE_REST_URL_PAIDRECORD_DELETE;
        try {
            await apiDeleteDataService(url, sendData)
                .then((response) => {
                    remaining.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    return { donateInfo, recordList, record, remaining, success, error, fetchAll, addNewRecord, deleteRecord };
});