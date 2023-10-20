<template>
    <v-dialog v-model="reactVals.dialog" persistent>
        <v-card>
            <v-toolbar color="grey-lighten-3" dark>
                <v-toolbar-title>
                    <v-icon icon="mdi-account-circle" large left class="mr-3" />
                    <span v-if="!reactVals.isEdit">新增使用者</span>
                    <span v-else>編輯使用者</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn variant="text" icon="mdi-window-close" @click="reactVals.closeDialog" />
            </v-toolbar>
            <v-card-text>
                <v-form v-model="reactVals.valid" ref="form">
                    <v-container>
                        <v-row>
                            <v-col md="4">
                                <v-text-field 
                                    v-model="reactVals.formVals.name" 
                                    :rules="[checkRules.required]" 
                                    :counter="10" label="姓名*"
                                    clearable 
                                    variant="outlined" />
                            </v-col>

                            <v-col md="4">
                                <DatePicker 
                                    v-model="reactVals.formVals.birthday" 
                                    :popover="claendarSetting.popover" 
                                    :masks="claendarSetting.masks">
                                    <template #default="{ inputValue, inputEvents }">
                                        <v-text-field 
                                        label="生日*"
                                        :model-value="inputValue"
                                        v-on="inputEvents"
                                        :rules="[checkRules.required]" 
                                        maxlength="10"
                                        append-inner-icon="mdi-calendar-cursor"
                                        variant="outlined"
                                        hint="農曆生日"
                                        persistent-hint
                                         />
                                    </template>
                                </DatePicker>
                            </v-col>

                            <v-col md="4">
                                <v-select
                                    v-model="reactVals.formVals.privilege"
                                    :items="reactVals.privilegeList"
                                    item-title="value"
                                    item-value="id"
                                    label="權限*"
                                    variant="outlined"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="6">
                                <v-text-field 
                                    v-model="reactVals.formVals.phone" 
                                    :rules="[checkRules.required, checkRules.phone]" 
                                    :counter="10"
                                    label="電話*" 
                                    clearable 
                                    variant="outlined" />
                            </v-col>
                            <v-col md="6">
                                <v-combobox
                                    v-model="reactVals.formVals.type"
                                    :rules="[checkRules.required]"
                                    label="身分"
                                    :items="reactVals.userTypeList"
                                    :counter="10"
                                    hint="信眾/班別/屆別"
                                    persistent-hint
                                    clearable variant="outlined" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                    v-model="reactVals.formVals.email" 
                                    :rules="[checkRules.email]" 
                                    label="E-mail" 
                                    clearable
                                    variant="outlined" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field 
                                    v-model="reactVals.formVals.address" 
                                    :rules="[checkRules.required]" 
                                    label="地址*" 
                                    clearable
                                    variant="outlined" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="primary"
                    variant="text"
                    @click="reactVals.closeDialog"
                >
                    取消
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    variant="text"
                    @click="onSubmit"
                >
                    送出
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./ModifyUserInfoDialog.js" />