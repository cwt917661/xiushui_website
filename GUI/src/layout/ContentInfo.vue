<template>
  <v-main>
    <alert ref="alert"></alert>
    <router-view></router-view>
  </v-main>
</template>
<script>
import Alert from '../utilities/Alert.vue';
export default {
  components:{
    Alert
  },
  mounted() {
    this.$root.alert = this.$refs.alert;
  }
};
</script>
