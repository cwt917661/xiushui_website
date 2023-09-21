export default {
  data: () => ({
    headers: [
      {
        text: '類別',
        align: 'start',
        value: 'type',
      },
      { text: '年度', value: 'year' },
      { text: '應繳金額', value: 'total_amount' },
      { text: '到期日', value: 'duedate' },
      { text: '祈福事項', value: 'remark' },
      { text: '', value: 'actions', sortable: false },
    ],
    tableData: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    tableHeight: 0
  }),

  // computed: {
  //   formTitle () {
  //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //   },
  // },

  // watch: {
  //   dialog (val) {
  //     val || this.close()
  //   },
  //   dialogDelete (val) {
  //     val || this.closeDelete()
  //   },
  // },

  // created() {
  //   this.tableHeight = window.innerHeight * 0.4;
  // },

  methods: {
    resetForm() {

    },
    setData(data) {
      // console.log(window.innerHeight);
      // this.tableHeight = window.innerHeight * 0.4;
      // console.log(this.tableHeight);
      this.tableData = data;
    },
    getColor (payment) {
      if (payment > 0) return 'red'
      else return 'green'
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.tableData.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
