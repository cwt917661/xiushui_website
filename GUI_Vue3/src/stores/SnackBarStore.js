import { defineStore } from 'pinia';

export const useSnackBarStore = defineStore({
    id: 'snackBarStore',
    state: () => ({
        message: '',
        color: '',
        timeout: false,
    }),
    actions: {
        showMessage(message, type) {
            this.message = message;
            this.color = type;
            if(type == 'success' || type == 'info') this.timeout = true;
            else this.timeout = false;
        },
    }
})