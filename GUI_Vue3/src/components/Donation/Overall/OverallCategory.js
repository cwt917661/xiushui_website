import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserDonateStore } from '@/stores/UserDonateStore';
import { useSnackBarStore } from '@/stores/GlobalComponentStore';

const chiplist = [
  { color: 'error', icon: 'mdi-alert-decagram', text: '未繳費' },
  { color: 'warning', icon: 'mdi-calendar-alert', text: '即將到期' },
  { color: 'info', icon: 'mdi-all-inclusive', text: '所有資料' },
];

var selection = ref(0);

export default {
  setup(props, { emit}) {
    const selectChange = () => {
      emit('dataLoading');
      refresh();
    };
    
    const refresh = () => {
      let index = selection.value;
      let serviceURL = import.meta.env.VITE_REST_URL_USERDONATE_GET_ALLINFO;
      if (index == 0) serviceURL = import.meta.env.VITE_REST_URL_USERDONATE_GET_OVERDRAFT;
      else if (index == 1) serviceURL = import.meta.env.VITE_REST_URL_USERDONATE_GET_ONCOMING;

      const { donationList, success, error } = storeToRefs(useUserDonateStore());
      const { fetchOverallData } = useUserDonateStore();
      fetchOverallData(serviceURL).then(() => {
        if (success.value) {
          emit('tableDataReady', donationList.value);
          const snackBarStore = useSnackBarStore();
          snackBarStore.showMessage('取得記錄成功 ', 'success');
        } else {
          // error handling
          console.error('Get user donation list error: ' + error.value);
          const snackBarStore = useSnackBarStore();
          snackBarStore.showMessage('[取得記錄失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
      });
    }

    return { chiplist, selection, refresh, selectChange };
  }
}
