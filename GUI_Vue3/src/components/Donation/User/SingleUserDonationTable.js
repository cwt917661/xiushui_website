import { ref } from 'vue';

const headers = ['類別', '年度', '到期日', '未繳金額'];
const tableData = ref([]);

const getColor = (payment) => {
    if (payment > 0) return 'red';
    else return 'green';
}

export default {
    props: {
        data: Object
    },
    setup() {
        return {
            headers, tableData, setData, getColor
        };
    }
}