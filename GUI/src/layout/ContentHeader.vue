<template>
  <v-app-bar
    app
     absolute
     color="teal lighten-2"
     dark
   >
    <img :src="imgLogo" width="50px" height="50px"/>
    <strong class="subheading">唯心聖教  秀水太極道場</strong>
  </v-app-bar>

</template>

// <style lang="scss" scoped>
//   .md-title {
//     color: white;
//   }
// </style>

<script>
export default {
  props: {
    imgLogo: {
      type: String,
      default: require("@/assets/logo.png")
    }
  }
};
</script>
