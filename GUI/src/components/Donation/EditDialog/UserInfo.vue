<!--  -->
<template>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
            v-model="form.name"
            label="姓名*"
            :rules="[rules.required]"
            required clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn color="primary" dark>
              查詢使用者
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
            v-model="form.type"
            label="屆別"
            clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
            v-model="form.phone"
            label="電話*"
            :rules="[rules.required, rules.phone]"
            type="tel"
            required clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              label="Email"
              :rules="[rules.email]"
              required
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="form.address"
              label="地址*"
              :rules="[rules.required]"
              required
              clearable
            ></v-text-field>
          </v-col>

        </v-row>
        <small>*代表必填欄位</small>
      </v-container>
    </v-form>

</template>

<script src="./UserInfo.js"></script>
