<template>
    <v-dialog :max-width="constVals.dialogWidth" v-model="reactVals.dialog">
        <v-card>
            <v-toolbar color="grey-lighten-3" dark>
                <v-toolbar-title>
                    <v-icon icon="mdi-cash" large left class="mr-3" />
                    繳費資訊
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn variant="text" icon="mdi-window-close" @click="closeDialog" />
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-list>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-account" color="#0266c9" class="mr-2" />
                                        姓名
                                    </template>
                                    <v-list-item-title v-text="reactVals.donation.name" />
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-book-variant" color="#0266c9" class="mr-2" />
                                        屆別
                                    </template>
                                    <v-list-item-title v-text="reactVals.donation.userType"></v-list-item-title>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-phone" color="#0266c9" class="mr-2" />
                                        電話
                                    </template>
                                    <v-list-item-title v-text="reactVals.donation.phone"></v-list-item-title>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-lightbulb-on-outline" color="#0266c9" class="mr-2" />
                                        種類
                                    </template>
                                    <v-list-item-title v-text="reactVals.donation.type"></v-list-item-title>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-cash" color="#0266c9" class="mr-2" />
                                        未繳
                                    </template>
                                    <v-list-item-title v-text="reactVals.donation.payment"
                                        style="color:red;"></v-list-item-title>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-icon icon="mdi-cash-register" color="#0266c9" class="mr-2" />
                                        繳費
                                    </template>
                                    <v-form v-model="reactVals.form">

                                    <v-text-field 
                                        density="compact" 
                                        outlined 
                                        v-model.number="reactVals.donation.paid"
                                        :rules="[constVals.required, constVals.isPositiveNumber, constVals.overPaid]" 
                                        maxlength="10"
                                        append-inner-icon="mdi-send"
                                        @click:append-inner="addPayment" />
                                    </v-form>

                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-card>
                            <v-table fixed-header :height="constVals.tableHeight">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>金額</th>
                                        <th>時間</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in reactVals.paidRecords">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ item.paid }}</td>
                                        <td>
                                            <v-tooltip location="bottom">
                                                <template v-slot:activator="{ props }">
                                                    <span v-bind="props">{{ item.time }}</span>
                                                </template>
                                                <span>{{ item.createDt }}</span>

                                            </v-tooltip>
                                        </td>
                                        <td>
                                            <v-tooltip location="bottom">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn 
                                                        icon="mdi-delete" 
                                                        variant="text" v-bind="props"
                                                        color="grey-darken-1" 
                                                        @click="onDelete(item, index)" />
                                                </template>
                                                <span>刪除</span>
                                            </v-tooltip>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card>

                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script src="./UserPaymentDialog.js" />