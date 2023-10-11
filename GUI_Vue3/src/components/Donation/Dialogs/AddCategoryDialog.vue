<template>
    <v-dialog :max-width="constVals.dialogWidth" v-model="reactVals.dialog">
        <v-card>
            <v-toolbar color="grey-lighten-3" dark>
                <v-toolbar-title>
                    <v-icon icon="mdi-shape-plus" large left class="mr-3"/>
                    新增種類
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn variant="text" icon="mdi-window-close" @click="reactVals.dialog=false;" />
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-form v-model="reactVals.form" @submit.prevent="onSubmit">
                                <v-text-field
                                    label="名稱"
                                    clearable 
                                    v-model="reactVals.catgName" 
                                    :rules="[constVals.required, constVals.duplicate]"
                                />
                                <v-btn 
                                    :disabled="!reactVals.form" 
                                    :loading="reactVals.loading" 
                                    block 
                                    color="success" 
                                    size="large" 
                                    type="submit"
                                    variant="elevated">
                                    新增</v-btn>
                            </v-form>
                            <Alert ref="alert" class="mt-3" />
                        </v-col>
                        <v-col>
                            <v-table fixed-header :height="constVals.tableHeight">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>名稱</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in reactVals.catgItems">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>
                                            <v-tooltip location="bottom">
                                                <template v-slot:activator="{ props }">
                                                    <v-btn 
                                                        icon="mdi-delete"
                                                        variant="text"
                                                        v-bind="props"
                                                        color="grey-darken-1"
                                                        @click="onDelete(item, index)"
                                                    />
                                                </template>
                                                <span>刪除</span>
                                            </v-tooltip>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-row>
                </v-container>

            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script src="./AddCategoryDialog.js"></script>