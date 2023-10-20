import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useDonateCategoryStore } from '@/stores/DonateCategoryStore';
import { useConirmStore, useLoadingStore, useSnackBarStore } from '@/stores/GlobalComponentStore';

const constVals = {
    tableHeight: window.innerHeight * 0.6,
    dialogWidth: window.innerWidth * 0.8,
    required: (v) => !!v || '請輸入名稱',
    duplicate: (v) => !reactVals.catgItems.some(e => e.name === v) || '輸入的名稱重複!!'
};

const reactVals = reactive({
    dialog: false,
    catgName: '',
    catgItems: [],
    form: false,
    loading: false,
});

const openDialog = () => {
    const loadingStore = useLoadingStore();
    loadingStore.showLoading();

    // get all categories
    const { catgList, success, error } = storeToRefs(useDonateCategoryStore());
    const { fetchAll } = useDonateCategoryStore();
    fetchAll().then(() => {
        // console.log(error.value);
        if (success.value) {
            reactVals.catgItems = catgList;
            loadingStore.closeLoading();
            reactVals.dialog = true;
        } else {
            // error handling
            console.error('Get donation category list error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[取得類別失敗]<br>[錯誤訊息] ' + error.value, 'error');
        }
    });
};

const onSubmit = () => {
    if (!reactVals.form) return;
    reactVals.loading = true;

    var sendData = { name: reactVals.catgName };
    const { category, success, error } = storeToRefs(useDonateCategoryStore());
    const { addNewCategory } = useDonateCategoryStore();

    addNewCategory(sendData).then(() => {
        if (success.value) {
            reactVals.catgItems.push(category.value);
            reactVals.loading = false;
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('新增 ' + reactVals.catgName + '成功', 'success');
            reactVals.catgName = '';
            reactVals.form = false;
        } else {
            // error handling
            console.error('Add category error: ' + error.value);
            const snackBarStore = useSnackBarStore();
            snackBarStore.showMessage('[新增類別失敗]<br>[名稱] ' + reactVals.catgName + '[錯誤訊息] ' + error.value, 'error');
        }
    });
};

const onDelete = (item, index) => {
    const confirmStore = useConirmStore();
    confirmStore.showConfirm('刪除類別', '確定要刪除 [ ' + item.name + ' ]？', item, (item) => {
        confirmStore.close();
        var sendData = { data: { id: item.id } };
        const { success, error } = storeToRefs(useDonateCategoryStore());
        const { deleteCategory } = useDonateCategoryStore();

        deleteCategory(sendData).then(() => {
            if (success.value) {
                reactVals.catgItems.splice(index, 1);
                const snackBarStore = useSnackBarStore();
                snackBarStore.showMessage('刪除 ' + item.name + ' 成功', 'success');
            } else {
                // error handling
                console.error('Delete category error: ' + error.value);
                const snackBarStore = useSnackBarStore();
                snackBarStore.showMessage('[刪除失敗]<br>名稱： ' + item.name + '<br>錯誤訊息： ' + error.value, 'error');
    
            }
        });
    });
}


export default {
    setup(props, { expose }) {
        expose({ openDialog });
        return { constVals, reactVals, openDialog, onSubmit, onDelete };
    },

}