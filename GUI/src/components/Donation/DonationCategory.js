import {apiUserDonateList} from '@/services/apis.js'

export default {
  data: () => ({
    chiplist: [
      {color: 'red darken-1', icon: 'mdi-alert-decagram', text: '未繳費'},
      {color: 'amber darken-4', icon: 'mdi-alarm-check', text: '已到期'},
      {color: 'yellow accent-4', icon: 'mdi-calendar-alert', text: '即將到期'}
    ],
  }),
  created() {

  },
  methods: {

    changeType(index) {
      console.log(this.chiplist[index].text);
      // 未繳費
      if(index == 0) {
        this.overDraft();
      }
      // 已到期
      else if(index == 1) {
        this.overDue();
      }
      // 即將到期
      else {
        this.onComing();
      }
    },
    async overDraft() {
      // console.log('未繳費清單');
      var table = this.$parent.$children[1];

      apiUserDonateList()
      .then(response => {
        table.setData(response.data);
        // this.tableData = response.data;
      })
      .catch(error => {
        // console.error('get user list error: ');
        console.error('get user list error: ' + error);
      });
      // var tableData = [
      //   {
      //     type: '元神燈',
      //     year: 109,
      //     username: 'QQQ',
      //     usertype: '二十屆',
      //     payment: 4300,
      //   },
      //   {
      //     type: '光明燈',
      //     year: 110,
      //     username: 'TAT',
      //     usertype: '二十三屆',
      //     payment: 6000,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 110,
      //     username: 'TAT',
      //     usertype: '二十三屆',
      //     payment: 1000,
      //   },
      //   {
      //     type: '光明燈',
      //     year: 109,
      //     username: 'ABC',
      //     usertype: '信眾',
      //     payment: 4.9,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 108,
      //     username: 'ABC',
      //     usertype: '信眾',
      //     payment: 7,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 109,
      //     username: 'QQQ',
      //     usertype: '二十屆',
      //     payment: 4300,
      //   },
      //   {
      //     type: '光明燈',
      //     year: 110,
      //     username: 'TAT',
      //     usertype: '二十三屆',
      //     payment: 6000,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 110,
      //     username: 'TAT',
      //     usertype: '二十三屆',
      //     payment: 1000,
      //   },
      //   {
      //     type: '光明燈',
      //     year: 109,
      //     username: 'ABC',
      //     usertype: '信眾',
      //     payment: 4.9,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 108,
      //     username: 'ABC',
      //     usertype: '信眾',
      //     payment: 7,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 109,
      //     username: 'QQQ',
      //     usertype: '二十屆',
      //     payment: 4300,
      //   },
      //   {
      //     type: '光明燈',
      //     year: 110,
      //     username: 'TAT',
      //     usertype: '二十三屆',
      //     payment: 6000,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 110,
      //     username: 'TAT',
      //     usertype: '二十三屆',
      //     payment: 1000,
      //   },
      //   {
      //     type: '光明燈',
      //     year: 109,
      //     username: 'ABC',
      //     usertype: '信眾',
      //     payment: 4.9,
      //   },
      //   {
      //     type: '元神燈',
      //     year: 108,
      //     username: 'ABC',
      //     usertype: '信眾',
      //     payment: 7,
      //   },
      // ]

      // table.setData(tableData);
    },

    overDue() {
      // console.log('已到期清單');
      var table = this.$parent.$children[1];
      var tableData = [
        {
          type: '元神燈',
          year: 108,
          username: 'QQQ',
          usertype: '二十屆',
          payment: 0,
        },
        {
          type: '元神燈',
          year: 109,
          username: 'QQQ',
          usertype: '二十屆',
          payment: 4300,
        },
        {
          type: '光明燈',
          year: 108,
          username: 'TAT',
          usertype: '二十三屆',
          payment: 0,
        },
        {
          type: '光明燈',
          year: 109,
          username: 'TAT',
          usertype: '二十三屆',
          payment: 0,
        },
        {
          type: '光明燈',
          year: 108,
          username: 'ABC',
          usertype: '信眾',
          payment: 0,
        },
        {
          type: '光明燈',
          year: 109,
          username: 'ABC',
          usertype: '信眾',
          payment: 4.9,
        },
        {
          type: '元神燈',
          year: 108,
          username: 'ABC',
          usertype: '信眾',
          payment: 7,
        },
      ]

      table.setData(tableData);
    },

    onComing() {
      // console.log('即將到期清單');
      var table = this.$parent.$children[1];
      var tableData = [
        {
          type: '光明燈',
          year: 110,
          username: 'TAT',
          usertype: '二十三屆',
          payment: 6000,
        },
        {
          type: '元神燈',
          year: 110,
          username: 'TAT',
          usertype: '二十三屆',
          payment: 1000,
        },
        {
          type: '光明燈',
          year: 110,
          username: 'ABC',
          usertype: '信眾',
          payment: 0,
        }
      ]

      table.setData(tableData);
    }
  }
}
