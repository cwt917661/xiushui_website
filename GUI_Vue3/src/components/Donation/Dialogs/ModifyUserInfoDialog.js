import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/UserStore';
import { useLoadingStore, useSnackBarStore } from '@/stores/GlobalComponentStore';
import { formatDate } from '@/utilities/commonFunction.js';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const checkRules = {
    required: (v) => !!v || '此欄位為必填欄位',
    duplicate: (v) => !reactVals.catgItems.some(e => e.name === v) || '輸入的名稱重複!!',
    email: (v) => !v || (/.+@.+\..+/.test(v)) || 'E-mail 格式不正確',
    phone: (v) => /[0-9]+/.test(v) || '電話格式不正確',
};

const reactVals = reactive({
    dialog: false,
    valid: false,
    isEdit: false,
    privilegeList: [{ id: 1, value: '一般' }, { id: 2, value: '管理員' }],
    closeDialog: null,
    formVals: {},
    userTypeList: []
});

const claendarSetting = {
    masks: { input: 'YYYY-MM-DD', },
    popover: { visibility: 'click', },
}

const openDialog = (isEdit, item) => {
    reactVals.isEdit = isEdit;
    const { typeList, success, error } = storeToRefs(useUserStore());
    const { fetchAllTypes } = useUserStore();

    fetchAllTypes().then(() => {
        if (success.value) {
            reactVals.userTypeList = typeList;
            if (reactVals.isEdit) {
                reactVals.formVals = item;
            }
            // reset form values
            else {
                reactVals.formVals = {};
                reactVals.formVals.name = '';
                reactVals.formVals.type = '';
                reactVals.formVals.birthday = new Date();
                reactVals.formVals.email = '';
                reactVals.formVals.phone = '';
                reactVals.formVals.address = '';
                reactVals.formVals.privilege = 1;
            };
        
            reactVals.dialog = true;
        } else {
            // error handling
            console.error('get type list error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[取得身分清單失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
    });
    
};

const form = ref();
const onSubmit = () => {
    form.value.validate();
    if (!reactVals.valid) return;
    const loadingStore = useLoadingStore();
    loadingStore.showLoading();
    if (!reactVals.isEdit) addNewUser();
    else editUser();
}

const addNewUser = () => {
    const { success, error } = storeToRefs(useUserStore());
    const { addNewUserService } = useUserStore();

    let sendData = reactVals.formVals;
    sendData.birthday = formatDate(reactVals.formVals.birthday);
    addNewUserService(sendData).then(() => {
        if (success.value) {
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('新增使用者成功', 'success');
            reactVals.closeDialog();
        } else {
            // error handling
            console.error('Add new user error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[新增使用者失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
    });
};

const editUser = () => {
    const { success, error } = storeToRefs(useUserStore());
    const { editUserService } = useUserStore();

    let sendData = reactVals.formVals;
    sendData.birthday = formatDate(reactVals.formVals.birthday);
    editUserService(sendData).then(() => {
        if (success.value) {
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('編輯使用者成功', 'success');
            reactVals.closeDialog();
        } else {
            // error handling
            console.error('Edit user error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[編輯使用者失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
    });
};

export default {
    components: {
        DatePicker
    },
    setup(props, { expose, emit }) {
        reactVals.closeDialog = () => {
            emit('dialogClosed');
            const loadingStore = useLoadingStore();
            loadingStore.closeLoading();
            reactVals.dialog = false;
        }

        expose({ openDialog });
        return { checkRules, reactVals, claendarSetting, form, onSubmit };
    },

}