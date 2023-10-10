import { VDataTable } from 'vuetify/labs/VDataTable';
import { reactive } from 'vue';
import SingleUserDonationTable from './SingleUserDonationTable.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/UserStore';
import { useUserDonateStore } from '@/stores/UserDonateStore';

const constVals = reactive({
  tableHeight: window.innerHeight * 0.5,
  headers: [
    {
      title: '姓名',
      align: 'start',
      key: 'name',
    },
    { title: '身分', key: 'type' },
    { title: '生日', key: 'birthday' },
    { title: '電話', key: 'phone' },
    { title: '地址', key: 'address' },
    { title: '', key: 'actions', sortable: false },
  ]
});

const reactVals = reactive({
  tableData: [],
  expanded: [],
  editedIndex: -1,
  editedItem: {},
  userDonationData: []
});

const onExpand = (item, index) => {
  // if already expanded , close it
  if(reactVals.expanded.some(e => e == (index+1))) reactVals.expanded.shift();
  else{
    // expand one at one time
    reactVals.expanded.shift();
    reactVals.expanded.push(index+1);
  }

  // start expand
  if(reactVals.expanded.length == 1) {
    var sendData = { id: item.id };

    const { donations, success, error } = storeToRefs(useUserDonateStore());
    const { fetchByUserId } = useUserDonateStore();
    fetchByUserId(sendData).then(() => {
      if (success.value) {
        reactVals.userDonationData = donations.value.map((obj) => Object.assign({}, obj, {
          payment: obj.totalAmount - obj.currentPaid
        }));
      } else {
        // error handling
        console.error('Get donation data by user id: ' + error);
      }
    });
  }
};

const addNewDonation = (item) => {
  console.log('add new donation for' + item.name);
};

const editDonation = (item) => {
  console.log('edit donation for' + item.name);
};

export default {
  components: {
    VDataTable,
    SingleUserDonationTable
  },
  setup() {
    // initiallize table data

    const { users, success, error } = storeToRefs(useUserStore());
    const { fetchAll } = useUserStore();
    fetchAll().then(() => {
      if (success.value) {
        reactVals.tableData = users;
      } else {
        // error handling
        console.error('Get user list error: ' + error);
      }
    });

    return { constVals, reactVals, onExpand, addNewDonation, editDonation };
  },

}
