import { storeToRefs } from 'pinia';
import { useUserDonateStore } from '@/stores/UserDonateStore';
import { useSnackBarStore } from '@/stores/SnackBarStore';

const chiplist = [
  { color: 'error', icon: 'mdi-alert-decagram', text: '未繳費' },
  { color: 'warning', icon: 'mdi-calendar-alert', text: '即將到期' },
  { color: 'primary', icon: 'mdi-all-inclusive', text: '所有資料' },
];

export default {
  
  setup(props, { emit}) {
    const changeType = (index) => {
      emit('dataLoading');
      // console.log(chiplist[index].text);
      var url = import.meta.env.VITE_REST_URL_USERDONATE_GET_ALLINFO;
      if (index == 0) url = import.meta.env.VITE_REST_URL_USERDONATE_GET_OVERDRAFT;
      else if (index == 1) url = import.meta.env.VITE_REST_URL_USERDONATE_GET_ONCOMING;
    
      callService(url);
    };
    
    const callService = (url) => {
      const { donations, success, error } = storeToRefs(useUserDonateStore());
      const { fetchOverallData } = useUserDonateStore();
      fetchOverallData(url).then(() => {
        if (success.value) {
          emit('tableDataReady', donations.value);
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

    return { chiplist, changeType };
  }
}
