<script setup>
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/GlobalComponentStore';

const { show: overlay } = storeToRefs(useLoadingStore());
useLoadingStore();

</script>

<template>
    <v-overlay
      :model-value="overlay"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
</template>