<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSnackBarStore } from '@/stores/SnackBarStore';

const snackbar = ref(false);
// const text = ref();
// const color = ref('');
const { message, color, timeout } = storeToRefs(useSnackBarStore());
const store = useSnackBarStore();
const delayTime = ref();
store.$onAction(() => {
    // console.log('show store');
    if (timeout) delayTime.value = 1000;
    else delayTime.value = -1;
    snackbar.value = true;
}, true);


</script>
<template>
    <v-snackbar 
        v-model="snackbar" 
        :color="color" 
        :timeout="delayTime"
        transition="slide-x-reverse-transition" 
        location="top right">
        <!-- {{ text }} -->
        <span v-html="message"></span>

        <template v-slot:actions>
            <v-btn variant="text" icon="mdi-window-close" @click="snackbar = false" />
        </template>
    </v-snackbar>
</template>