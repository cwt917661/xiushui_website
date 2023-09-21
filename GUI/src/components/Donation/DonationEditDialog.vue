<template>
  <v-dialog
    v-model="dialog"
    ref="dialog"
    @click:outside="closeDialog">
    <v-card>
      <horizontal-stepper ref="stepper" :steps="demoSteps"></horizontal-stepper>
      <user-info ref="userInfo" v-show="stepNum === 1"></user-info>
      <donation-info ref="donationInfo" v-show="stepNum === 2"></donation-info>
      <v-card-actions>
        <v-btn
          v-if="stepNum > 1"
          color="blue darken-1"
          text
          @click="previousStep">
          上一步
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="stepNum < demoSteps.length"
          color="blue darken-1"
          text
          @click="nextStep">
          下一步
        </v-btn> 
        <v-btn
          v-if="stepNum === demoSteps.length"
          color="blue darken-1"
          text
          @click="submit">
          送出
        </v-btn>         
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script src="./DonationEditDialog.js"></script>
