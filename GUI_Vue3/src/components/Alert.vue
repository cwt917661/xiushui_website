<template>
  <v-alert
    v-model="alert" 
    :color="alertColor" 
    :icon="alertIcon"
    :title="alertTitle" 
    closable
    variant="tonal"
  >
  <span v-html="alertMsg"></span>
  </v-alert>
</template>

<script setup>
import { ref } from 'vue';

const alertColor = ref('');
const alertIcon = ref('');
const alertMsg = ref('');
const alertTitle = ref('');
const alert = ref(false);

const showSuccess = (title, message) => {
  alertColor.value = "success";
  alertIcon.value = "$success";
  alertTitle.value = title;
  alertMsg.value = message;
  alert.value = true;
  setTimeout(() => { alert.value = false }, 1000);
};

const showInfo = (title, message) => {
  alertColor.value = "info";
  alertIcon.value = "$info";
  alertTitle.value = title;
  alertMsg.value = message;
  alert.value = true;
  setTimeout(() => { alert.value = false }, 1000);
};

const showError = (title, message) => {
  alertColor.value = "error";
  alertIcon.value = "$error";
  alertTitle.value = title;
  alertMsg.value = message;
  alert.value = true;
};

const showWarning = (title, message) => {
  alertColor.value = "warning";
  alertIcon.value = "$warning";
  alertTitle.value = title;
  alertMsg.value = message;
  alert.value = true;
};

defineExpose({ showSuccess, showInfo, showError, showWarning });
</script>  