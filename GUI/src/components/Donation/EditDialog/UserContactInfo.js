export default {
  data: () => ({
    contactData:{
        name: '',
        type: '',
        phone: '',
        email: '',
        address: ''

    }
  }),

  methods: {
    setData(data) {
      this.contactData = data;
    }
  }
}
