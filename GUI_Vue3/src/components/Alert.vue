<template>
    <v-alert
        :color="type"
        :icon="icon"
        :title="type"
        :text="alertMsg"
  ></v-alert>
</template>
  
<script setup>
  import {ref} from 'vue';

  const type = ref(null);
  const elapse = ref(null);
  const icon = ref(null);
  const alertMsg = ref('');

  function showSuccess(msg) {
    icon = 'mdi-alert-circle-outline';
    type = 'success';
    alertMsg = msg;
    showAlert();
  }

  function showInfo(msg) {
    icon = 'mdi-alert-circle-outline';
    type = 'info';
    alertMsg = msg;
    showAlert();
  }

  function showWarning(msg) {
    icon = 'mdi-alert-outline';
    type = 'warning';
    alertMsg = msg;
    showAlert();
  }

  function showError(msg) {
    icon = 'mdi-alert-octagram-outline';
    type = 'error';
    alertMsg = msg;
    showAlert();
  }

  function showAlert () {
    let timer = showAlert.timer;
    if (timer)clearTimeout(timer);

    showAlert.timer = setTimeout(() => {
      type = null;
    }, 3000);
  
    elapse = 1;
    let t = showAlert.t;
    if (t) clearInterval(t);
    showAlert.t = setInterval(() => {
      if (elapse === 3) {
        elapse = 0;
        clearInterval(showAlert.t);
      }
      else elapse++;
    }, 1000);
  }

  </script>  