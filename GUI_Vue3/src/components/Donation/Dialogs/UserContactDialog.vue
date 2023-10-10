<script setup>
import { ref } from 'vue';
const dialog = ref(false);
const item = ref({});
const openDialog = (data) => {
    dialog.value = true;
    item.value = data;
};

defineExpose({ openDialog });
</script>

<template>
    <v-dialog max-width="500" v-model="dialog">
        <v-card class="mx-auto">
            <v-card-title>
                <v-icon large left>
                    mdi-account-circle
                </v-icon>
                <span class="title font-weight-light">聯絡資訊</span>
            </v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account" color="indigo"></v-icon>
                            姓名
                        </template>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-book-variant" color="indigo"></v-icon>
                            屆別
                        </template>
                        <v-list-item-title v-text="item.type"></v-list-item-title>
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
                            <v-icon icon="mdi-email" color="indigo"></v-icon>
                            信箱
                        </template>
                        <v-list-item-title v-text="item.email"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-map-marker" color="indigo"></v-icon>
                            地址
                        </template>
                        <v-list-item-title v-text="item.address"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="dialog = false">
                    關閉
                </v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
