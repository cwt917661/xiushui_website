import { ref } from 'vue';
import { defineStore } from 'pinia';
import { apiGetDataService, apiPostDataService, apiDeleteDataService } from '@/utilities/callService.js';

export const useUserDonateStore = defineStore('userDonateStore', () => {
    const donationList = ref([]);
    const donation = ref(null);
    const success = ref(false);
    const error = ref(null);

    async function fetchOverallData(url) {
        error.value = null;
        donationList.value = [];
        try {
            await apiGetDataService(url)
                .then((response) => {
                    donationList.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    async function fetchByUserId(sendData) {
        error.value = null;
        donationList.value = [];
        var url = import.meta.env.VITE_REST_URL_USERDONATE_GET_BY_USERID;
        try {
            await apiPostDataService(url, sendData)
                .then((response) => {
                    donationList.value = response.data.respData;
                    success.value = true;
                });
        } catch (err) {
            success.value = false;
            error.value = err.message;
        }
    }

    return { donationList, donation, success, error, fetchOverallData, fetchByUserId };

});