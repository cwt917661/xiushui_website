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
            <v-icon>mdi-cog-outline</v-icon>
            設定
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menus" :key="index" :value="item" @click="menuSelected(index)">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
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
          <OverallCategory ref="overallCategory" @dataLoading="dataLoading" @tableDataReady="setTable" />
          <OverallDonationTable ref="overallTable" />
        </v-card>
      </v-window-item>
      <v-window-item>
        <!-- 個人點燈紀錄 -->
        <v-card flat>
          <OverallUserTable ref="overallUserTable" />
        </v-card>
      </v-window-item>
      <v-window-item>
        <!-- 點燈記錄查詢 -->
        <v-card class="mx-auto">
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
  <AddCategoryDialog ref="addCategoryDialog" />
</template>
<script src="./DonationView.js"></script>
  