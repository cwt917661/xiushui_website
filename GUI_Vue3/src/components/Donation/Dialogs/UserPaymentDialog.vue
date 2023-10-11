<script setup>
import { ref } from 'vue';
var dialog = ref(false);
var item = ref({});
const openDialog = (data) => {
    dialog.value = true;
    item.value = data;
};
const numberRule = [ value => !!value && Number.isInteger(value) && value > 0 || '請輸入正確金額' ];

defineExpose({ openDialog });
</script>

<template>
    <v-dialog max-width="500" v-model="dialog">
        <v-card>
            <v-toolbar color="grey-lighten-3" dark>
                <v-toolbar-title>
                    <v-icon icon="mdi-cash" large left class="mr-3"/>
                    繳費資訊
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn variant="text" icon="mdi-window-close" @click="dialog=false;" />
            </v-toolbar>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account" color="#0266c9" class="mr-2" />
                            姓名
                        </template>
                        <v-list-item-title v-text="item.name" />
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-book-variant" color="#0266c9" class="mr-2" />
                            屆別
                        </template>
                        <v-list-item-title v-text="item.userType"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-phone"  color="#0266c9" class="mr-2" />
                            電話
                        </template>
                        <v-list-item-title v-text="item.phone"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-lightbulb-on-outline"  color="#0266c9" class="mr-2" />
                            種類
                        </template>
                        <v-list-item-title v-text="item.type"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cash"  color="#0266c9" class="mr-2" />
                            未繳
                        </template>
                        <v-list-item-title v-text="item.payment" style="color:red;"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cash-register"  color="#0266c9" class="mr-2" />
                            繳費
                        </template>
                        <v-text-field
                            density="compact" 
                            outlined 
                            v-model.number="item.paid" 
                            :rules="numberRule"
                            maxlength="10"
                        />

                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#0047aa" @click="dialog = false">
                    取消
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="#0047aa" @click="dialog = false">
                    送出
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
