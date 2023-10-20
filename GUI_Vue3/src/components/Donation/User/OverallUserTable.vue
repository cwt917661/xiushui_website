<!-- 個人點燈紀錄 -->
<template>
    <v-card-title>
      <v-text-field
        v-model="reactVals.search"
        prepend-icon="mdi-magnify"
        label="搜尋"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table 
    fixed-header 
    :headers="constVals.headers"
    :items="reactVals.tableData" 
    item-key="id" 
    class="elevation-1" 
    :height="constVals.tableHeight"
    v-model:expanded="reactVals.expanded"
    hover
    :loading="reactVals.loading"
    :search="reactVals.search">
    <template v-slot:expanded-row="{ columns }">
      <tr>
        <td :colspan="columns.length" class="expand-background">
          <SingleUserDonationTable :data="reactVals.userDonationData" />
        </td>
      </tr>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            color="#5fb6fd" 
            v-bind="props" 
            size="large" 
            @click="addNewDonation(item)"
          >
            mdi-text-box-plus-outline
          </v-icon>
        </template>
        <span>新增點燈紀錄</span>
      </v-tooltip>
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            class="mx-3"
            color="#ffb44c" 
            v-bind="props"
            size="large" 
            @click="$emit('editUserInfo', item)">
            mdi-account-edit
          </v-icon>
        </template>
        <span>修改</span>
      </v-tooltip>
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            class="mr-3"
            color="#E53935" 
            v-bind="props"
            size="large" 
            @click="onDelete(item)">
            mdi-delete-forever
          </v-icon>
        </template>
        <span>刪除</span>
      </v-tooltip>
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            color="#9E9E9E" 
            v-bind="props"
            size="large" 
            @click="onExpand(item)">
            mdi-arrow-down-drop-circle-outline
          </v-icon>
        </template>
        <span>展開</span>
      </v-tooltip>
      
    </template>
    
  </v-data-table>
</template>
<script src="./OverallUserTable.js"></script>