<template>
    <v-app>
      <ContentHeader/>
      <div style="height: 1em;"></div>
      <ContentInfo/>
      <div style="height: 1em;"></div>
      <ContentFooter/>
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
    ContentFooter,
  }
};
</script>
