<!-- 個人點燈紀錄 -->
<template>
    <v-data-table
      v-model:items-per-page="reactVals.itemsPerPage"
      fixed-header
      :headers="constVals.headers"
      :items="reactVals.tableData"
      item-key="id"
      class="elevation-1"
      :height="constVals.tableHeight"
      v-model:expanded="reactVals.expanded"
      expand-on-click
      @click:row="handleClick"
    >
      <template v-slot:expanded-row="{ columns, item }">
        <tr>
          <td :colspan="columns.length">
            <SingleUserDonationTable ref="singleUserDonation" />
          </td>
        </tr>
      </template>
    </v-data-table>
  </template>
  <script src="./OverallUserTable.js"></script>
  