// import {apiUserList} from '@/services/apis.js'

export default {
  data: () => ({
    paymentData :{
      name: '',
      usertype: '',
      type: '',
      phone: '',
      payment: 0,
      paid: 0
    }
  }),

  methods: {
    setData(data) {
      this.paymentData = data;
    }
  }
}
