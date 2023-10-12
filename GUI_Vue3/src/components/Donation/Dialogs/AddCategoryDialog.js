import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useDonateCategoryStore } from '@/stores/DonateCategoryStore';
import Alert from '@/components/Notifiers/Alert.vue';

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
    // get all categories
    const { categories, success, error } = storeToRefs(useDonateCategoryStore());
    const { fetchAll } = useDonateCategoryStore();
    fetchAll().then(() => {
        // console.log(error.value);
        if(success.value) {
            reactVals.catgItems = categories;
            reactVals.dialog = true;
        } else {
            // error handling
            console.error('Get donation category list error: ' + error.value);
        }
    });
};

const alert = ref();
const onSubmit = () => {
    if (!reactVals.form) return;
    reactVals.loading = true;

    var sendData = { name: reactVals.catgName };
    const { category, success, error } = storeToRefs(useDonateCategoryStore());
    const { AddNewCategory } = useDonateCategoryStore();
    
    AddNewCategory(sendData).then(() => {
        if(success.value) {
            reactVals.catgItems.push(category.value);
            reactVals.loading = false;
            alert.value.showSuccess('新增成功', '已新增 「' + reactVals.catgName + '」');
            reactVals.form = false;
        } else {
            // error handling
            console.error('Add category error: ' + error.value);
            alert.value.showError('新增失敗', '名稱：' + reactVals.catgName + '<br>錯誤訊息：' + error.value);
        }
    });
};

const onDelete = (item, index) => {
    var sendData = {data:{ id: item.id }};

    const { success, error } = storeToRefs(useDonateCategoryStore());
    const { DeleteCategory } = useDonateCategoryStore();

    DeleteCategory(sendData).then(() =>{
        if(success.value) {
            reactVals.catgItems.splice(index, 1);
            alert.value.showSuccess('刪除成功', '已刪除 「' + item.name + '」');
        } else {
            // error handling
            console.error('Delete category error: ' + error.value);
            alert.value.showError('刪除失敗', '名稱：' + item.name + ' <br>訊息：' + error.value);
        }
    });
}


export default {
    components: {
        Alert
    },
    setup(props, { expose }) {
        expose({ openDialog });
        return { constVals, reactVals, openDialog, onSubmit, onDelete, alert };
    },

}