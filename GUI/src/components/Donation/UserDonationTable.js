import {apiUserList} from '@/services/apis.js'

export default {
  data: () => ({
    headers: [
      {
        text: '姓名',
        align: 'start',
        value: 'name',
      },
      { text: '身分', value: 'type' },
      { text: '生日', value: 'birthday' },
      { text: '電話', value: 'phone' },
      { text: '地址', value: 'address'}
    ],
    tableData: [],
    expanded: [],
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

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
      this.initialize()
  },

  methods: {
    initialize() {
      this.tableHeight = window.innerHeight * 0.4;
      // console.log('show user data');
      apiUserList()
      .then(response => {
        // console.log(response);
        this.tableData = response.data.body;
      })
      .catch(error => {
        // console.error('get user list error: ');
        console.error('get user list error: ' + error);
      });
    },
    handleClick(item, data) {
      data.expand();
      // const api = 'localhost:8080/RestService/api/userController.php';
      // apiUserList().then(response => {
      //   console.log(response);
      // });
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
      this.desserts.splice(this.editedIndex, 1)
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
