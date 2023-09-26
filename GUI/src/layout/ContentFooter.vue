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
