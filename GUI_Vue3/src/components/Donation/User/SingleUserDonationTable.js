import { ref } from 'vue';
import { VDataTable } from 'vuetify/labs/VDataTable';

const headers = ['類別', '年度', '到期日', '未繳金額'];
const tableData = ref([]);
const setData = (data) => {
    tableData.value = data.map((obj) => Object.assign({}, obj, {
        payment: obj.totalAmount - obj.currentPaid
    }));
}

const getColor = (payment) => {
    if (payment > 0) return 'red';
    else return 'green';
}

export default {
    components: {
        VDataTable,
        
    },
    props: {
        data: Object
    },
    setup() {
        return {
            headers, tableData, setData, getColor
        };
    }
}