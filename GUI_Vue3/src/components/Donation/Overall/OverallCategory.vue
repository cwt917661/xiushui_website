<template>
    <v-card-text>
      <v-chip-group
        mandatory
        v-model="selection"
        @update:modelValue="selectChange"
      >
        <v-chip
          v-for="chip in chiplist"
          class="mr-2"
          selected-class="text-primary"
        >
        <v-icon left :color="chip.color"> {{chip.icon}} </v-icon>
        {{chip.text}}
        </v-chip>
      </v-chip-group>

      </v-card-text>
    </template>

<script src="./OverallCategory.js"></script>
