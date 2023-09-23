<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex text-center"
      flat
      tile
    >
      <v-card-title class="teal">
        <img :src="imgLogo" width="50px" height="50px"/>
        <strong class="subheading">唯心聖教  秀水太極道場</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        <!-- {{ new Date().getFullYear() }} /
        {{ new Date().getMonth() }} /
        {{ new Date().getDate() }} -->

        地址：504彰化縣秀水鄉民生街582巷29號     
      <!-- </v-card-text>
      <v-card-text class="py-2 white--text text-center"> -->
        <!-- {{ new Date().getFullYear() }} /
        {{ new Date().getMonth() }} /
        {{ new Date().getDate() }} -->

        電話：04-768-1379
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    props: {
      imgLogo: {
        type: String,
        default: require("@/assets/logo.png")
      }
    },
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
