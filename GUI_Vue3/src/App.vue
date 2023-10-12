
<script setup>
import ConfirmBox from './components/Notifiers/ConfirmBox.vue';
import SnackBar from './components/Notifiers/SnackBar.vue';
</script>
<template>
  <RouterView />
  <SnackBar />
  <ConfirmBox />
</template>
