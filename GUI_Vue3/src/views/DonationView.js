import { onMounted, ref } from 'vue';
import OverallDonationTable from '@/components/Donation/Overall/OverallDonationTable.vue'
import OverallCategory from '@/components/Donation/Overall/OverallCategory.vue';
import OverallUserTable from '@/components/Donation/User/OverallUserTable.vue';

const tabHeader = [
  { icon: 'mdi-alert-outline', text: '待處理' },
  { icon: 'mdi-badge-account-horizontal-outline', text: '個人點燈紀錄' },
  { icon: 'mdi-text-box-search-outline', text: '點燈記錄查詢' }
];

const tab = ref(0);

const overallCategory = ref();
const switchTag = (index) => {
  console.log(tabHeader[index].text);
  // 待處理
  if (index == 0) {
    overallCategory.value.changeType(0);
  }
};

const overallTable = ref();
const setTable = (tableData) => {
  // console.log(tableData);
  overallTable.value.setData(tableData);
};

const donationEditDialog = ref();
const openDialog = () => {
  var isEdit = false;
  donationEditDialog.open(isEdit);
};

export default {
  components: {
    OverallDonationTable,
    OverallCategory,
    OverallUserTable
  },
  setup() {
    onMounted(() => {
      // 確認所有東西都load完再切tab(initial select tab 1)
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          console.log('Page completed with image and files!')
          // fetch
          switchTag(0);
        }
      }
    });

    return { tabHeader, tab, overallCategory, switchTag, overallTable, setTable, donationEditDialog, openDialog };
  }
}
