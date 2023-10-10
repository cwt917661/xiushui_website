<template>
  <v-card class="mx-auto" width="95%">
    <v-toolbar color="brown lighten-1" dark>
      <v-toolbar-title>
        <v-icon icon="mdi-lightbulb-on-outline"></v-icon>
        點燈紀錄
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn variant="outlined" class="mx-2" elevation="2" v-bind="props">
            <v-icon>mdi-plus-box</v-icon>
            新增
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menus" :key="index" :value="item" @click="menuSelected(index)">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar>

    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="(tab, index) in tabHeader" :key="index" @click="switchTag(index)">
        <v-icon left>{{ tab.icon }}</v-icon>
        {{ tab.text }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item>
        <!-- 待處理列表 -->
        <v-card class="mx-auto">
          <OverallCategory ref="overallCategory" @tableDataReady="setTable" />
          <OverallDonationTable ref="overallTable" />
        </v-card>
      </v-window-item>
      <v-window-item>
        <!-- 個人點燈紀錄 -->
        <v-card flat>
          <OverallUserTable ref="overallUserTable" />
          <!-- <user-donation-table ref="userDonationTable"></user-donation-table> -->
        </v-card>
      </v-window-item>
      <v-window-item>
        <!-- 點燈記錄查詢 -->
        <v-card class="mx-auto">
          <!-- <donation-table></donation-table> -->
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
  <AddCategoryDialog ref="addCategoryDialog" />
</template>
<script src="./DonationView.js"></script>
  