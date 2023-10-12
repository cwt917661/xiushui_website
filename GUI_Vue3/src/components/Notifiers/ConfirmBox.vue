<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useConirmStore } from '@/stores/GlobalComponentStore';

// const dialog = ref(false);

const { confirmTitle, confirmText, show } = storeToRefs(useConirmStore());
const store = useConirmStore();
store.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
});

</script>
<template>
    <v-row justify="center">
      <v-dialog
        v-model="show"
        persistent
        width="auto"
      >
        <v-card>
          <v-card-title class="text-h5">
            {{ confirmTitle }}
          </v-card-title>
          <v-card-text>{{ confirmText }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="0047aa"
              variant="text"
              @click="show = false"
            >
              取消
            </v-btn>
            <v-btn
              color="0047aa"
              variant="text"
              @click="show = false"
            >
              確認
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>