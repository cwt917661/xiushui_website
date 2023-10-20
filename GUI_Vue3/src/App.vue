
<script setup>
import ConfirmBox from './components/Notifiers/ConfirmBox.vue';
import Loading from './components/Notifiers/Loading.vue';
import SnackBar from './components/Notifiers/SnackBar.vue';
</script>
<template>
  <RouterView />
  <SnackBar />
  <ConfirmBox />
  <Loading />
</template>
