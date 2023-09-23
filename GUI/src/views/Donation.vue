<template>
  <v-card class="mx-auto" width="95%">
  <v-toolbar
    color="brown lighten-1"
    dark
  >
    <v-toolbar-title>
      <v-icon>mdi-lightbulb-on-outline</v-icon>
      點燈紀錄
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn outlined class="mx-2" elevation="2" @click="openDialog()">
      <v-icon>mdi-plus-box</v-icon>
      新增
    </v-btn>
  </v-toolbar>

  <v-tabs grow>
    <v-tab v-for="(tab, index) in tabHeader" :key="index" @click="switchTag(index)">
      <v-icon left>{{tab.icon}}</v-icon>
      {{tab.text}}
    </v-tab>

    <v-tab-item>
      <!-- 待處理列表 -->
      <v-card class="mx-auto">
        <donation-category ref="donationCategory"></donation-category>
        <donation-table></donation-table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <!-- 個人點燈紀錄 -->
      <v-card flat>
        <user-donation-table ref="userDonationTable"></user-donation-table>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <!-- 點燈記錄查詢 -->
      <v-card class="mx-auto">
        <!-- <donation-table></donation-table> -->
      </v-card>
    </v-tab-item>
  </v-tabs>
  <donation-edit-dialog ref="donationEditDialog"></donation-edit-dialog>
</v-card>


</template>
<script src="./Donation.js"></script>
