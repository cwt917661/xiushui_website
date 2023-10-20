<script setup>
import { ref } from 'vue';
const dialog = ref(false);
const item = ref({});
const openDialog = (data) => {
    dialog.value = true;
    item.value = data;
};

const emit = defineEmits(['editUserInfo'])
const editUserInfo = () => {
    emit('editUserInfo', item.value);
    dialog.value = false;
}

defineExpose({ openDialog });
</script>

<template>
    <v-dialog v-model="dialog">
        <v-card class="mx-auto">
            <v-toolbar color="grey-lighten-3" dark>
                <v-toolbar-title>
                    <v-icon icon="mdi-account-circle" large left class="mr-3"/>
                    聯絡資訊
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn variant="text" icon="mdi-account-edit" color="#ee6802" @click="editUserInfo" />
                <v-btn variant="text" icon="mdi-window-close" @click="dialog=false;" />
            </v-toolbar>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account" color="#0266c9" class="mr-2"></v-icon>
                            姓名
                        </template>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-book-variant" color="#0266c9" class="mr-2"></v-icon>
                            屆別
                        </template>
                        <v-list-item-title v-text="item.type"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cake" color="#0266c9" class="mr-2"></v-icon>
                            生日
                        </template>
                        <v-list-item-title v-text="item.birthday"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-phone" color="#0266c9" class="mr-2"></v-icon>
                            電話
                        </template>
                        <v-list-item-title v-text="item.phone"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-email" color="#0266c9" class="mr-2"></v-icon>
                            信箱
                        </template>
                        <v-list-item-title v-text="item.email"></v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-map-marker" color="#0266c9" class="mr-2"></v-icon>
                            地址
                        </template>
                        <v-list-item-title v-text="item.address"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
