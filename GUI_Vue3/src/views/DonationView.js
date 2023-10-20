import { onMounted, ref } from 'vue';
import OverallDonationTable from '@/components/Donation/Overall/OverallDonationTable.vue'
import OverallCategory from '@/components/Donation/Overall/OverallCategory.vue';
import OverallUserTable from '@/components/Donation/User/OverallUserTable.vue';
import OverallSearchTable from '@/components/Donation/Search/OverallSearchTable.vue'
import CategorySettingDialog from '@/components/Donation/Dialogs/CategorySettingDialog.vue';
import ModifyUserInfoDialog from '../components/Donation/Dialogs/ModifyUserInfoDialog.vue';
import { useSnackBarStore } from '@/stores/GlobalComponentStore';

const tabHeader = [
  { icon: 'mdi-alert-outline', text: '待處理' },
  { icon: 'mdi-badge-account-horizontal-outline', text: '個人點燈紀錄' },
  { icon: 'mdi-text-box-search-outline', text: '點燈記錄查詢' }
];

const menus = [
  { name: '編輯類別', icon: 'mdi-shape-plus-outline' },
  { name: '新增祈福人', icon: 'mdi-account' },
  { name: '新增點燈紀錄', icon: 'mdi-text-box-outline' }
];

const tab = ref(0);

const overallCategory = ref();
const overallUserTable = ref();
const refresh = () => {
  // 待處理
  if (tab.value == 0) {
    overallCategory.value.refresh();
  }
  // 個人點燈紀錄
  else if (tab.value == 1) {
    if (overallUserTable.value != undefined) overallUserTable.value.open();
  }
};

const switchTag = (index) => {
  tab.value = index;
  refresh();
}

const overallTable = ref();
const setTable = (tableData) => {
  // console.log(tableData);
  overallTable.value.setData(tableData);
};
const tableLoading = () => overallTable.value.dataLoading();
const tableRefresh = () => overallCategory.value.refresh();

const menuSelected = (index) => {
  // 新增種類
  if (index === 0) addCategory();
  else if (index === 1) addUser();
  else addRecord();
};

const categorySettingDialog = ref();
function addCategory() {
  categorySettingDialog.value.openDialog();
}

const modifyUserInfoDialog = ref();
function addUser() {
  modifyUserInfoDialog.value.openDialog(false, {});
}

const editUserInfo = (item) => {
  modifyUserInfoDialog.value.openDialog(true, item);
}

function addRecord() {
  const snackBarStore = useSnackBarStore();
  snackBarStore.showMessage('這個功能還沒做好喔..', 'warning');
}

export default {
  components: {
    OverallDonationTable,
    OverallCategory,
    OverallUserTable,
    OverallSearchTable,
    CategorySettingDialog,
    ModifyUserInfoDialog,
  },
  setup() {
    onMounted(() => {
      // 確認所有東西都load完再切tab(initial select tab 1)
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          console.log('Page completed with image and files!')
          // fetch
          refresh();
        }
      }
    });

    return {
      tabHeader, tab, menus, overallCategory, overallUserTable, switchTag,
      overallTable, setTable, tableLoading, tableRefresh, refresh, editUserInfo,
      menuSelected, categorySettingDialog, modifyUserInfoDialog
    };
  }
}
