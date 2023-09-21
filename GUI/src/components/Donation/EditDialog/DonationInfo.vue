<!-- 編輯點燈資訊 -->
<template>
  <!-- <v-card style="padding: 1em;"> -->
	<v-data-table
		:headers="headers"
    :items="tableData"
    class="elevation-1"
    fixed-header
    hide-default-footer
    style="padding: 1em;"
    >

    <template v-slot:item>
    </template>

     <template v-slot:footer>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab dark small color="indigo"
              v-bind="attrs"
              v-on="on">
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>新增</span>
        </v-tooltip>
        
        
          <!-- <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template> -->
       </v-toolbar>
    </template>
    </v-data-table>
  <!-- </v-card> -->
</template>

<script src="./DonationInfo.js"></script>
