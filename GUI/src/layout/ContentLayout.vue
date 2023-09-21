<template>
    <v-app>
      <content-header></content-header>
      <div style="height: 1em;"></div>
      <content-info></content-info>
      <div style="height: 1em;"></div>
      <content-footer></content-footer>
    </v-app>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import ContentFooter from "./ContentFooter.vue";
import ContentInfo from "./ContentInfo.vue";


export default {
  components: {
    ContentHeader,
    ContentInfo,
    ContentFooter
  }
};
</script>
