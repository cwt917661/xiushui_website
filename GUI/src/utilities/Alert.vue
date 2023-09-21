<template>
  <v-alert :color="type" :icon="icon" v-if="type">
    {{alertMsg}}
  </v-alert>
</template>

<script>
export default {
  data () {
    return {
      type: null,
      elapse: null,
      alertMsg: '',
      icon: ''
    }
  },
  methods: {
    showSuccess(msg) {
      this.icon = 'mdi-alert-circle-outline';
      this.type = 'info';
      this.alertMsg = msg;
      this.showAlert();
    },
    showInfo(msg) {
      this.icon = 'mdi-alert-circle-outline';
      this.type = 'info';
      this.alertMsg = msg;
      this.showAlert();
    },
    showWarning(msg) {
      this.icon = 'mdi-alert-outline';
      this.type = 'warning';
      this.alertMsg = msg;
      this.showAlert();
    },
    showError(msg) {
      this.icon = 'mdi-alert-octagram-outline';
      this.type = 'error';
      this.alertMsg = msg;
      this.showAlert();
    },
    showAlert () {
      // this.type = type;
      // this.alertMsg = msg;

      let timer = this.showAlert.timer;
      if (timer) {
        clearTimeout(timer);
      }
      this.showAlert.timer = setTimeout(() => {
          this.type = null;
      }, 3000);

      this.elapse = 1;
      let t = this.showAlert.t;
      if (t) {
        clearInterval(t);
      }

      this.showAlert.t = setInterval(() => {
        if (this.elapse === 3) {
          this.elapse = 0;
          clearInterval(this.showAlert.t);
        }
        else {
          this.elapse++;
        }
      }, 1000);
    }
  }
}
</script>
