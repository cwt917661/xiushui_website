<template>
    <v-card-text>
      <v-chip-group
        active-class="primary--text"
        mandatory
      >
        <v-chip
          v-for="(chip,index) in chiplist"
          :key="index"
          class="mr-2"
          @click="changeType(index)"
          disable
        >
        <v-icon left :color="chip.color"> {{chip.icon}} </v-icon>
        {{chip.text}}
        </v-chip>
      </v-chip-group>

      </v-card-text>
    </template>

<script src="./OverallCategory.js"></script>
