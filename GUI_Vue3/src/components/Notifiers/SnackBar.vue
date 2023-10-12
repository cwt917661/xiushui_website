<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSnackBarStore } from '@/stores/GlobalComponentStore';

const { message, color, show: snackbar } = storeToRefs(useSnackBarStore());
const store = useSnackBarStore();
const delayTime = ref();
store.$subscribe((mutation, state) => {
    if(state.timeout) delayTime.value = 2000;
    else delayTime.value = -1;
});

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