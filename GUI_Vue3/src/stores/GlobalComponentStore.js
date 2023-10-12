import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSnackBarStore = defineStore('snackBarStore', () => {
    const message = ref('');
    const color = ref('');
    const timeout = ref(false);
    const show = ref(false);

    function showMessage(msg, type) {
        message.value = msg;
        color.value = type;
        if (type == 'success' || type == 'info') timeout.value = true;
        else timeout.value = false;
        show.value = true;
    }

    return { message, color, timeout, show, showMessage };

});

export const useConirmStore = defineStore('confirmStore', () => {
        const confirmTitle = ref('');
        const confirmText = ref('');
        const show = ref(false);
        const confirm = ref(false);

        function showConfirm(title, text) {
            confirmTitle.value = title;
            confirmText.value = text;
            show.value = true;
        }

        return { confirmTitle, confirmText, show, confirm, showConfirm };
    });