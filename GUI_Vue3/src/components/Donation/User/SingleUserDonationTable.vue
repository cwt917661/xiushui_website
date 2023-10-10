<template>
    <v-card variant="flat" v-if="data.length === 0">
        <v-card-text> 找不到資料... </v-card-text>
    </v-card>
    <v-card class="my-2 elevation-3" v-if="data.length > 0">
        <v-table fixed-header>
            <thead>
                <tr>
                    <th v-for="item in headers">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{ item.category }}</td>
                    <td>{{ item.year }}</td>
                    <td>{{ item.dueDt }}</td>
                    <td><v-chip :color="getColor(item.payment)" dark>
                            {{ item.payment }}
                        </v-chip>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>
<script src="./SingleUserDonationTable.js"></script>
