<!-- 待處理 -->
<template>
      <v-data-table
        :headers="headers"
        :items="tableData"
        class="elevation-1"
        fixed-header
        :height="tableHeight"
      >
      <template v-slot:item.payment="{ item }">
        <v-chip
          :color="getColor(item.payment)"
          dark
        >
          {{ item.payment }}
        </v-chip>
      </template>
      <template  v-slot:top>
        <v-dialog v-model="dialogView" max-width="400">
          <v-card class="mx-auto">
            <v-card-title>
              <v-icon large left>
                mdi-account-circle
              </v-icon>
              <span class="title font-weight-light">聯絡資訊</span>
            </v-card-title>
          <user-contact-info ref="contactInfo"></user-contact-info>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary"
              @click="dialogView = false">
              關閉
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          </v-card>
        </v-dialog>
      <!-- </template>
      <template v-slot:item.actions="props"> -->
        <v-dialog v-model="dialogPay" max-width="400">
          <v-card class="mx-auto">
            <v-card-title>
              <v-icon large left>
                mdi-cash
              </v-icon>
              <span class="title font-weight-light">繳費</span>
            </v-card-title>
          <user-payment-info ref="paymentInfo"></user-payment-info>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary"
              @click="dialogPay = false">
              取消
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="primary"
              @click="dialogPay = false">
              送出
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="primary"
              class="mr-2"
              v-bind="attrs"
              v-on="on"
              @click="viewInfo(item)"
            >
              mdi-account-circle
            </v-icon>
          </template>
          <span>檢視聯絡資訊</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="amber darken-4"
              class="mr-2"
              v-bind="attrs"
              v-on="on"
              @click="payment(item)"
            >
              mdi-currency-usd
            </v-icon>
          </template>
          <span>繳費</span>
        </v-tooltip>
    </template>

    </v-data-table>
</template>
<script src="./DonationTable.js"></script>
<style scoped>
.v-list-item__title {
  white-space: normal;
}

</style>