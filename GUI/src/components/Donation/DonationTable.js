import UserContactInfo from './EditDialog/UserContactInfo.vue'
import UserPaymentInfo from './EditDialog/UserPaymentInfo.vue'

export default {
  components: {
    UserContactInfo,
    UserPaymentInfo
  },
  data: () => ({
    dialogView: false,
    dialogPay: false,
    headers: [
      {
        text: '類別',
        align: 'start',
        value: 'type',
      },
      { text: '年度', value: 'year' },
      { text: '祈福人', value: 'username' },
      { text: '身分', value: 'usertype' },
      { text: '到期日', value: 'duedate' },
      { text: '未繳金額', value: 'payment'},
      { text: '', value: 'actions', sortable: false },
    ],
    tableData: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    tableHeight: 0
  }),
  created() {
    this.tableHeight = window.innerHeight * 0.4;
  },
  methods: {
    setData(data) {
      this.tableData = data;
    },
    getColor (payment) {
      if (payment > 0) return 'red'
      else return 'green'
    },
    viewInfo (item) {
      // console.log(item);
      // console.log('open contact info');
      var contactData = {
        name: item.username,
        type: item.usertype,
        phone: item.phone,
        email: item.email,
        address: item.address
      };
      this.dialogView = true;
      this.$nextTick(() => {
        this.$refs.contactInfo.setData(contactData);
      });
    },
    payment (item) {
      // console.log(item);
      // console.log('open payment info');
      var paymentData = {
        name: item.username,
        usertype: item.usertype,
        type: item.type,
        phone: item.phone,
        payment: item.payment
      };
      this.dialogPay = true;
      this.$nextTick(() => {
        this.$refs.paymentInfo.setData(paymentData);
      });
    }
  }
}
