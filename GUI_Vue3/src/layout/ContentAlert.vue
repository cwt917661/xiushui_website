<script setup>
import { ref } from 'vue';

const snackbar = ref(false);
const text = ref('');
const color = ref('');

const showMessage = (type, message) =>{
    if(type === 'error') color.value = 'red-darken-4';
    else if(type === 'warning') color.value = 'blue-darken-4';
    else if(type === 'success') color.value = 'green-darken-3';
    else color.value = 'amber-darken-3'
    text.value = message;
    snackbar.value = true;
}

defineExpose({ showMessage });

</script>
<template>
    <v-snackbar v-model="snackbar" multi-line :timeout="timeout" :color="color">
        {{ text }}
        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>