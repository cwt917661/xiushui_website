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

export const useLoadingStore = defineStore('loadingStore', () => {
    const show = ref(false);
    const showLoading = () => show.value = true;
    const closeLoading = () => show.value = false;

    return {show, showLoading, closeLoading};
});

export const useConirmStore = defineStore('confirmStore', () => {
    const confirmTitle = ref('');
    const confirmText = ref('');
    const show = ref(false);
    const action = ref(null);
    const modifiedItem = ref(null);

    function showConfirm(title, text, item, callback) {
        confirmTitle.value = title;
        confirmText.value = text;
        show.value = true;
        modifiedItem.value = item;
        action.value = callback;
    }

    function close() {
        show.value = false;
    }

    return { confirmTitle, confirmText, show, action, modifiedItem, showConfirm, close };
});
