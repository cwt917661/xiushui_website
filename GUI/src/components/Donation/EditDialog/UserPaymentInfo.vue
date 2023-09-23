<!-- 繳費 dialog -->
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
          <v-list-item-title>{{paymentData.name}}</v-list-item-title>
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
          <v-list-item-title>{{paymentData.usertype}}</v-list-item-title>
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
          <v-list-item-title>{{paymentData.phone}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-lightbulb-on-outline
          </v-icon>
          種類
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{paymentData.type}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="red">
            mdi-cash
          </v-icon>
          未繳
        </v-list-item-icon>
        <v-list-item-content style="color:red;">
          <v-list-item-title>{{paymentData.payment}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-cash-register
          </v-icon>
          繳費
        </v-list-item-icon>
        <v-list-item-content>
          <v-text-field outlined
            v-model="paymentData.paid"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>

</template>

<script src="./UserPaymentInfo.js"></script>
