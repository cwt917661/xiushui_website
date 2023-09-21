import HorizontalStepper from '@/plugins/vue-stepper';
import UserInfo from './EditDialog/UserInfo.vue'
import DonationInfo from './EditDialog/DonationInfo.vue'

export default {
  components: {
    UserInfo,
    DonationInfo,
    HorizontalStepper
  },
  data () {
    return {
      isEdit: false,
      dialog: false,
      stepNum: 1,
      demoSteps: [
        {
            icon: 'account_box',
            title: '使用者資訊',
            subtitle: '請填入使用者資訊',
            completed: false
        },
        {
            icon: 'star',
            title: '點燈資訊',
            subtitle: '請選擇點燈項目',
            completed: false
        }
      ],
      userInfo: {}
    };
  },
  methods: {
    open(isEdit) {
      this.stepNum = 1;
      this.isEdit = isEdit;
      this.dialog = true;
    },
    nextStep() {
      this.$refs.userInfo.isFormValid();
      if(this.stepNum === 1 && !this.$refs.userInfo.isValid) {
        alert('請輸入正確資料');
      }
      else {
        // store user info data
        this.userInfo = this.$refs.userInfo.form;
        this.$refs.stepper.nextStep();
        this.stepNum ++;        
      }

    },
    previousStep() {
      // console.log('previous');
      this.$refs.stepper.backStep();
      this.stepNum --;
    },
    closeDialog() {
      console.log('close dialog');
      // console.log(this.$refs.stepper.$children.$children);
      if(this.$refs.userInfo && this.$refs.donationInfo) {
        this.$refs.userInfo.resetForm();
        this.$refs.donationInfo.resetForm();        
      }
      this.$refs.stepper.reset();
    },
    submit () {
      console.log('submit');
    }
  }
}
