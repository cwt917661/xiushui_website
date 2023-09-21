<!-- 聯絡資訊 dialog -->
<template>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-account
          </v-icon>
          姓名
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{contactData.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-book-variant
          </v-icon>
          屆別
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{contactData.type}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
          電話
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{contactData.phone}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
          信箱
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{contactData.email}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
          地址
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{contactData.address}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>

</template>
<script src="./UserContactInfo.js"></script>
<style scoped>
.v-list-item__title {
  white-space: normal;
}

</style>