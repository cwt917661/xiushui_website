<script setup>
import { ref } from 'vue';
var dialog = ref(false);
var item = ref({});
const openDialog = (data) => {
    dialog.value = true;
    item.value = data;
};

defineExpose({ openDialog });
</script>

<template>
    <v-dialog max-width="500" v-model="dialog">
        <v-card>
            <v-card-title>
                <v-icon icon="mdi-cash" large left />
                <span class="title font-weight-light">繳費資訊</span>
            </v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account" color="indigo"></v-icon>
                            姓名
                        </template>
                        <v-list-item-title v-text="item.name" />
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-book-variant" color="indigo" />
                            屆別
                        </template>
                        <v-list-item-title v-text="item.userType"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-phone" color="indigo"></v-icon>
                            電話
                        </template>
                        <v-list-item-title v-text="item.phone"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-lightbulb-on-outline" color="indigo"></v-icon>
                            種類
                        </template>
                        <v-list-item-title v-text="item.type"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cash" color="indigo"></v-icon>
                            未繳
                        </template>
                        <v-list-item-title v-text="item.payment" style="color:red;"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cash-register" color="indigo"></v-icon>
                            繳費
                        </template>
                        <v-text-field outlined v-model="item.paid" />

                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="dialog = false">
                    取消
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="dialog = false">
                    送出
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
