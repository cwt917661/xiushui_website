<template>
    <v-card class="my-2" variant="outlined">
        <v-table fixed-header>
            <thead>
                <tr>
                    <th v-for="item in headers">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData">
                    <td>{{ item.category }}</td>
                    <td>{{ item.year }}</td>
                    <td>{{ item.dueDt }}</td>
                    <td>{{ item.payment }}</td>
                    <td></td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>
<script src="./SingleUserDonationTable.js"></script>
