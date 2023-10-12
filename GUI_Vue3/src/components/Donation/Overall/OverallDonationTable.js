import {ref, reactive} from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import UserContactDialog from '@/components/Donation/Dialogs/UserContactDialog.vue';
import UserPaymentDialog from '@/components/Donation/Dialogs/UserPaymentDialog.vue';

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
    { title: '未繳金額', key: 'payment'},
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
  reactVals.tableData = data.map((obj) => Object.assign({}, obj, {
    payment : obj.totalAmount - obj.currentPaid        
  }));
  reactVals.loading = false;
}

const getColor = (payment) => {
  if (payment > 0) return 'red';
  else return 'green';
}

const contactInfo=ref();
const viewContact = (item) => {
  var contactData = {
    name: item.userName,
    type: item.userType,
    phone: item.userPhone,
    email: item.userEmail,
    address: item.userAddress,
    id: item.id,
  };
  contactInfo.value.openDialog(contactData);
}

const paymentInfo=ref();
const payment = (item) => {
  var paymentData = {
    name: item.userName,
    userType: item.userType,
    type: item.category,
    phone: item.phone,
    payment: item.payment,
    id: item.id,
  };
  paymentInfo.value.openDialog(paymentData);
}

const paymentClosed = (data) => {
  var idx = reactVals.tableData.findIndex((element) => element.id == data.id);
  // console.log(idx);
  reactVals.tableData[idx].payment = data.payment;
};

export default {
  components: {
    VDataTable,
    UserContactDialog,
    UserPaymentDialog,
  },
  setup(prop, {expose}) {

    expose({ setData, dataLoading });
    return{
      constVals, reactVals, contactInfo, paymentInfo,
      dataLoading, setData, getColor, viewContact, payment, paymentClosed,
    };
  }
}