import { storeToRefs } from 'pinia';
import { useUserDonateStore } from '@/stores/UserDonateStore';

const chiplist = [
  { color: 'error', icon: 'mdi-alert-decagram', text: '未繳費' },
  { color: 'warning', icon: 'mdi-calendar-alert', text: '即將到期' },
  { color: 'primary', icon: 'mdi-all-inclusive', text: '所有資料' },
];

function changeType(index) {
  // console.log(chiplist[index].text);
  var url = import.meta.env.VITE_REST_URL_USERDONATE_GET_ALLINFO;
  if (index == 0) url = import.meta.env.VITE_REST_URL_USERDONATE_GET_OVERDRAFT;
  else if (index == 1) url = import.meta.env.VITE_REST_URL_USERDONATE_GET_ONCOMING;

  callService(this, url);
}

function callService(instance, url) {
  const { donations, success, error } = storeToRefs(useUserDonateStore());
  const { fetchOverallData } = useUserDonateStore();
  fetchOverallData(url).then(() => {
    if (success.value) {
      instance.$emit('tableDataReady', donations.value);
    } else {
      // error handling
      console.error('Get user donation list error: ' + error);
    }
  });
}

export default {
  setup() {
    return { chiplist, changeType };
  }
}
