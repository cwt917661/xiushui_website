
// @ is an alias to /src
import DonationTable from '@/components/Donation/DonationTable.vue'
import DonationCategory from '@/components/Donation/DonationCategory.vue'
import UserDonationTable from '@/components/Donation/UserDonationTable.vue'
import DonationEditDialog from '@/components/Donation/DonationEditDialog.vue'

export default {
  data: () => ({
    tabHeader: [
      {icon: 'mdi-alert-outline', text: '待處理'},
      {icon: 'mdi-badge-account-horizontal-outline', text: '個人點燈紀錄'},
      {icon: 'mdi-text-box-search-outline', text: '點燈記錄查詢'}
    ],
  }),
  components: {
    DonationTable,
    DonationCategory,
    UserDonationTable,
    DonationEditDialog
  },
  mounted(){
    // 確認所有東西都load完再切tab(initial select tab 1)
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log('Page completed with image and files!')
        // fetch
        this.switchTag(0);
      }
    }
  },
  methods: {
    switchTag(index){
      console.log(this.tabHeader[index].text);
      // 待處理
      if(index == 0) {
        // console.log(this.$refs.donationCategory);
        this.$refs.donationCategory.changeType(0);
      }
    },
    openDialog() {
      var isEdit = false;
      this.$refs.donationEditDialog.open(isEdit);
    }
  }
}
