<!-- 待處理 -->
<template>
    <VDataTable
        fixed-header
        :height="constVals.tableHeight"
        :headers="constVals.headers"
        :items="reactVals.tableData"
        item-value="name"
        class="elevation-1"
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
      <UserContactDialog ref="contactInfo" />
      <UserPaymentDialog ref="paymentInfo" />
    </template>
    <template v-slot:item.actions="{ item }">
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon
            class="mr-3"
            color="cyan-darken-3"
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
            color="amber darken-4"
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
