import { ref, reactive } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import UserContactDialog from '@/components/Donation/Dialogs/UserContactDialog.vue';
import UserPaymentDialog from '@/components/Donation/Dialogs/UserPaymentDialog.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/UserStore';
import { useSnackBarStore, useLoadingStore } from '@/stores/GlobalComponentStore';

const constVals = reactive({
  tableHeight: window.innerHeight * 0.4,
  headers: [
    {
      title: '類別',
      align: 'start',
      key: 'category',
    },
    { title: '年度', key: 'year' },
    { title: '祈福人', key: 'userName' },
    { title: '身分', key: 'userType' },
    { title: '到期日', key: 'dueDt' },
    { title: '未繳金額', key: 'unpaid' },
    { title: '', key: 'actions', sortable: false },
  ]
});

const reactVals = reactive({
  tableData: [],
  editedIndex: -1,
  editedItem: {},
  loading: false,
});

const dataLoading = () => reactVals.loading = 'primary';

const setData = (data) => {
  reactVals.tableData = data;
  reactVals.loading = false;
}

const getColor = (payment) => {
  if (payment > 0) return 'red';
  else return 'green';
}

const contactInfo = ref();
const viewContact = (item) => {
  const loadingStore = useLoadingStore();
  loadingStore.showLoading();
  let sendData = { id: item.userId };
  const { user, success, error } = storeToRefs(useUserStore());
  const { fetchById } = useUserStore();
  fetchById(sendData).then(() => {
    if (success.value) {
      loadingStore.closeLoading();
      contactInfo.value.openDialog(user.value);
    } else {
      // error handling
      console.error('Get user error: ' + error.value);
      const snackBarStore = useSnackBarStore();
      snackBarStore.showMessage('[取得使用者失敗]<br>[錯誤訊息] ' + error.value, 'error');
    }
  });
}

const paymentInfo = ref();
const payment = (item) => {
  paymentInfo.value.openDialog(item.id);
}

export default {
  components: {
    VDataTable,
    UserContactDialog,
    UserPaymentDialog,
  },
  setup(prop, { expose, emit }) {

    const paymentClosed = () => {
      emit('dataRefresh');
    };

    const editUserInfo = (item) => {
      emit('editUserInfo', item);
    }

    expose({ setData, dataLoading });
    return {
      constVals, reactVals, contactInfo, paymentInfo,
      dataLoading, setData, getColor, viewContact, payment, paymentClosed, editUserInfo,
    };
  }
}