import { ref, reactive } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';
import UserContactInfo from '@/components/Donation/Dialogs/UserContactInfo.vue';
import UserPaymentInfo from '@/components/Donation/Dialogs/UserPaymentInfo.vue';
import { apiPostDataService } from '@/services/api.js';

const headers = ['類別', '年度', '到期日', '未繳金額', ''];
const userInfo = {};
const tableData = ref([]);
const vueTable = ref();
const setData = (data) => {
    tableData.value = data.map((obj) => Object.assign({}, obj, {
        payment : obj.totalAmount - obj.currentPaid        
      }));
}

const getColor = (payment) => {
    if (payment > 0) return 'red';
    else return 'green';
}

const contactInfo = ref();
const viewContact = (item) => {
    var contactData = {
        name: item.userName,
        type: item.userType,
        phone: item.userPhone,
        email: item.userEmail,
        address: item.userAddress
    };
    contactInfo.value.openDialog(contactData);
}

const paymentInfo = ref();
const payment = (item) => {
    var paymentData = {
        name: item.userName,
        userType: item.userType,
        type: item.category,
        phone: item.phone,
        payment: item.payment
    };
    paymentInfo.value.openDialog(paymentData);
}


export default {
    components: {
        VDataTable,
        UserContactInfo,
        UserPaymentInfo,
    },
    setup() {
        return {
            headers, tableData, contactInfo, paymentInfo, userInfo, vueTable,
            setData, getColor, viewContact, payment
        };
    }
}