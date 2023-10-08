import { apiGetDataService, apiPostDataService } from '@/services/api.js';
import { VDataTable } from 'vuetify/labs/VDataTable';
import { ref, reactive } from 'vue';
import SingleUserDonationTable from './SingleUserDonationTable.vue';

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
    { title: '地址', key: 'address' }
  ]
});

const reactVals = reactive({
  itemsPerPage: 5,
  tableData: [],
  expanded: [],
  editedIndex: -1,
  editedItem: {}
});

const singleUserDonation = ref();
const handleClick = async (item) => {
  if (reactVals.expanded.length > 1) reactVals.expanded.splice(0, 1);
  let userData = reactVals.tableData[reactVals.expanded[0] - 1];
  await waitForElementToExist(singleUserDonation).then(element => {
    if (reactVals.expanded.length == 1) {
      var sendData = { id: userData.id };
      var url = import.meta.env.VITE_REST_URL_USERDONATE_GET_BY_USERID;

      apiPostDataService(url, sendData)
        .then(response => {
          singleUserDonation.value.setData(response.data);
        })
        .catch(error => {
          console.error('get donation data by user id: ' + error);
        });
      
    }
  });
};

function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (selector) {
      return resolve(selector);
    }

    const observer = new MutationObserver(() => {
      if (selector) {
        resolve(selector);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

export default {
  components: {
    VDataTable,
    SingleUserDonationTable
  },
  setup() {
    // initiallize table data
    var url = import.meta.env.VITE_REST_URL_USER_GET_ALLINFO;
    apiGetDataService(url)
      .then(response => {
        reactVals.tableData = response.data;
      })
      .catch(error => {
        console.error('get user list error: ' + error);
      });

    return { constVals, reactVals, singleUserDonation, handleClick };
  },

}
