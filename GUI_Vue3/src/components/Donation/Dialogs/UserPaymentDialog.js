import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { usePaidRecordStore } from '@/stores/PaidRecordStore';
import { useSnackBarStore, useLoadingStore, useConirmStore } from '@/stores/GlobalComponentStore';
import { formatDate } from '@/utilities/commonFunction.js';

const constVals = {
    tableHeight: window.innerHeight * 0.6,
    dialogWidth: window.innerWidth * 0.8,
    required: (v) => !!v || '請輸入金額',
    isPositiveNumber: (v) => Number.isInteger(v) && v > 0 || '請輸入正確金額!!',
    overPaid: (v) => v < reactVals.donation.unpaid || '輸入金額超過未繳金額',
};

const reactVals = reactive({
    dialog: false,
    donation: '',
    paidRecords: [],
    form: false
});

const openDialog = (id) => {
    const loadingStore = useLoadingStore();
    loadingStore.showLoading();
    var sendData = { userDonateId: id };
    const { donateInfo, recordList, success, error } = storeToRefs(usePaidRecordStore());
    const { fetchAll } = usePaidRecordStore();
    fetchAll(sendData).then(() => {
        if (success.value) {
            recordList.value.forEach((obj) => {
                obj.time = formatDate(obj.createDt);
            });
            reactVals.donation = donateInfo.value;
            reactVals.paidRecords = recordList.value;
            loadingStore.closeLoading();
            reactVals.dialog = true;
        } else {
            // error handling
            console.error('Get paid record list error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[取得記錄失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
    });
};

const addPayment = () => {
    var sendData = {
        userDonateId: reactVals.donation.id,
        paid: reactVals.donation.paid
    };
    const { record, remaining, success, error } = storeToRefs(usePaidRecordStore());
    const { addNewRecord } = usePaidRecordStore();
    addNewRecord(sendData).then(() => {
        // console.log(error.value);
        if (success.value) {
            // format time
            record.value.time = formatDate(record.value.createDt);
            
            // add new record to table
            reactVals.paidRecords.unshift(record.value);

            // reset form
            reactVals.donation.unpaid = remaining.value;
            reactVals.donation.paid = '';
            reactVals.form = false;
        } else {
            // error handling
            console.error('Get paid record list error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[取得記錄失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
    });
};

const onDelete = (item, index) => {
    const confirmStore = useConirmStore();
    confirmStore.showConfirm('刪除繳款紀錄', '確定要刪除 [ ' + item.paid + ' ] 這筆紀錄？', item, (item) => {
        confirmStore.close();

        var sendData = { data: { id: item.id } };
        const { remaining, success, error } = storeToRefs(usePaidRecordStore());
        const { deleteRecord } = usePaidRecordStore();
        deleteRecord(sendData).then(() => {
            // console.log(error.value);
            if (success.value) {
                // remove record by index
                reactVals.paidRecords.splice(index, 1);
                reactVals.donation.unpaid = remaining.value;
                const snackBarStore = useSnackBarStore();
                snackBarStore.showMessage('刪除記錄成功!!', 'success');

            } else {
                // error handling
                console.error('Delete paid record error: ' + error.value);
                const snackBarStore = useSnackBarStore();
                snackBarStore.showMessage('[刪除記錄失敗]<br>[錯誤訊息] ' + error.value, 'error');
            }
        });

    });
}


export default {
    setup(props, { expose, emit }) {
        const closeDialog = () => {
            emit('dialogClosed');
            reactVals.dialog = false;
        }

        expose({ openDialog });
        return { constVals, reactVals, openDialog, addPayment, onDelete, closeDialog };
    },

}