<!-- 待處理 -->
<template>
    <VDataTable
        fixed-header
        :height="constVals.tableHeight"
        :headers="constVals.headers"
        :items="reactVals.tableData"
        :loading="reactVals.loading"
        item-value="name"
        class="elevation-1"
        hover
    >
    <template v-slot:item.unpaid="{ item }">
      <v-chip
        :color="getColor(item.unpaid)"
        dark
      >
        {{ item.unpaid }}
      </v-chip>
    </template>
    <template  v-slot:top>
      <UserContactDialog ref="contactInfo" @editUserInfo="editUserInfo"/>
      <UserPaymentDialog ref="paymentInfo" @dialogClosed="paymentClosed"/>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon
            class="mr-3"
            color="#5fb6fd"
            size="large"
            v-bind="props"
            @click="viewContact(item)"
          >
            mdi-account-circle
          </v-icon>
        </template>
        <span>檢視聯絡資訊</span>
      </v-tooltip>

      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon
            color="#ffa425"
            v-bind="props"
            size="large"
            @click="payment(item)"
          >
            mdi-currency-usd
          </v-icon>
        </template>
        <span>繳費</span>
      </v-tooltip>
    </template>
  </VDataTable>
</template>
<script src="./OverallDonationTable.js"></script>
