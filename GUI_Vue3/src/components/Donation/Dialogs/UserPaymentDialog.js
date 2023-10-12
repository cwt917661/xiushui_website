import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { usePaidRecordStore } from '@/stores/PaidRecordStore';
import Alert from '@/components/Notifiers/Alert.vue';

const constVals = {
    tableHeight: window.innerHeight * 0.6,
    dialogWidth: window.innerWidth * 0.8,
    required: (v) => !!v || '請輸入金額',
    isPositiveNumber: (v) => Number.isInteger(v) && v > 0 || '請輸入正確金額!!',
    overPaid: (v) => v < reactVals.donation.payment || '輸入金額超過未繳金額',
};

const reactVals = reactive({
    dialog: false,
    donation: '',
    paidRecords: [],
    form: false
});

const openDialog = (data) => {
    reactVals.donation = data;
    reactVals.dialog = true;
    var sendData = { userDonateId: reactVals.donation.id };
    const { recordList, success, error } = storeToRefs(usePaidRecordStore());
    const { fetchAll } = usePaidRecordStore();
    fetchAll(sendData).then(() => {
        // console.log(error.value);
        if (success.value) {
            recordList.value.forEach((obj) => {
                var objectDate = new Date(obj.createDt);
                let day = objectDate.getDate();
                let month = objectDate.getMonth();
                let year = objectDate.getFullYear();
                obj.time = (year + '-' + month + '-' + day);
            }
            );
            reactVals.paidRecords = recordList.value;
            reactVals.dialog = true;
        } else {
            // error handling
            console.error('Get paid record list error: ' + error.value);
        }
    });
};

const addPayment = () => {
    var sendData = {
        userDonateId: reactVals.donation.id,
        paid: reactVals.donation.paid
    };
    const { record, success, error } = storeToRefs(usePaidRecordStore());
    const { AddNewRecord } = usePaidRecordStore();
    AddNewRecord(sendData).then(() => {
        // console.log(error.value);
        if (success.value) {
            // format time
            var objectDate = new Date(record.value.createDt);
            let day = objectDate.getDate();
            let month = objectDate.getMonth();
            let year = objectDate.getFullYear();
            record.value.time = (year + '-' + month + '-' + day);
            // add new record to table
            reactVals.paidRecords.push(record.value);

            // reset form
            reactVals.donation.payment -= reactVals.donation.paid;
            reactVals.donation.paid = '';
            reactVals.form = false;
        } else {
            // error handling
            console.error('Get paid record list error: ' + error.value);
        }
    });
};

const onDelete = (item, index) => {
    

};


export default {
    components: {
        Alert
    },
    setup(props, { expose, emit }) {
        const closeDialog = () => {
            // 1. update table information
            emit('dialogClosed', reactVals.donation);
            reactVals.dialog = false;
        }
        
        expose({ openDialog });
        return { constVals, reactVals, openDialog, addPayment, onDelete, closeDialog };
    },

}