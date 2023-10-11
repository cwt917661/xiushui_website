<!-- 個人點燈紀錄 -->
<template>
  <v-data-table 
    fixed-header 
    :headers="constVals.headers"
    :items="reactVals.tableData" 
    item-key="id" 
    class="elevation-1" 
    :height="constVals.tableHeight"
    v-model:expanded="reactVals.expanded"
    hover
    >
    <template v-slot:expanded-row="{ columns }">
      <tr>
        <td :colspan="columns.length" class="expand-background">
          <SingleUserDonationTable :data="reactVals.userDonationData" />
        </td>
      </tr>
    </template>

    <template v-slot:item.actions="{ item, index }">
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            color="#5fb6fd" 
            v-bind="props" 
            size="large" 
            @click="addNewDonation(item)"
          >
            mdi-note-plus
          </v-icon>
        </template>
        <span>新增</span>
      </v-tooltip>
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            class="mx-3"
            color="#ffb44c" 
            v-bind="props"
            size="large" 
            @click="editDonation(item)">
            mdi-clipboard-edit
          </v-icon>
        </template>
        <span>修改</span>
      </v-tooltip>
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-icon 
            color="#9E9E9E" 
            v-bind="props"
            size="large" 
            @click="onExpand(item, index)">
            mdi-arrow-down-drop-circle-outline
          </v-icon>
        </template>
        <span>展開</span>
      </v-tooltip>
      
    </template>
    
  </v-data-table>
</template>
<script src="./OverallUserTable.js"></script>