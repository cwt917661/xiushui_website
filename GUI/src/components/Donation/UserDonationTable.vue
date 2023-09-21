<!-- 個人點燈紀錄 -->
<template>
  <v-data-table
    :headers="headers"
    :items="tableData"
    single-expand
    :expanded.sync="expanded"
    item-key="id"
    class="elevation-1"
    fixed-header
    :height="tableHeight"
    @click:row="handleClick"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <!-- <v-toolbar-title>Expandable Table</v-toolbar-title> -->
        <v-spacer></v-spacer>

      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        More info about {{ item.name }}
      </td>
    </template>
  </v-data-table>
</template>
<script src="./UserDonationTable.js"></script>
