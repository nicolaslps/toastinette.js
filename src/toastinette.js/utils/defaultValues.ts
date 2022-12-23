import {ToasterProps} from './types';

enum toastTypesValues {
    DEFAULT = 'default',
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error'
}

enum toastPositionsValues {
    top_right = 'top-right',
    top_center = 'top-center',
    top_left = 'top-left',
    bottom_right = 'bottom-right',
    bottom_center = 'bottom-center',
    bottom_left = 'bottom-left'
}

enum toastersContainerIds {
    toaster_top_left_container = 'toaster_top_left_container',
    toaster_top_center_container = 'toaster_top_center_container',
    toaster_top_right_container = 'toaster_top_right_container',
    toaster_bottom_left_container = 'toaster_bottom_left_container',
    toaster_bottom_center_container = 'toaster_bottom_center_container',
    toaster_bottom_right_container = 'toaster_bottom_right_container'
}

const defaultToasterOptions: ToasterProps = {
    autoClose: 5000,
    theme: "base",
    themes: [
        "base",
        "light",
        "dark",
        "colored",
    ],
    toasts: {
        'default': {
            type: toastTypesValues.DEFAULT,
            title: 'This is the info toasts title',
            message: 'And this is the info toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            icon: '🍞'
        },
        'info': {
            type: toastTypesValues.INFO,
            title: 'This is the info toasts title',
            message: 'And this is the info toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            icon: '🟦'
        },
        'success': {
            type: toastTypesValues.SUCCESS,
            title: 'This is the success toasts title',
            message: 'And this is the success toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            icon: '✅'
        },
        'warning': {
            type: toastTypesValues.WARNING,
            title: 'This is the warning toasts title',
            message: 'And this is the warning toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            icon: '⚠️'
        },
        'error': {
            type: toastTypesValues.ERROR,
            title: 'This is the error toasts title',
            message: 'And this is the error toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            icon: '❌'
        },
    }
};

export {
    toastTypesValues,
    toastPositionsValues,
    toastersContainerIds,
    defaultToasterOptions
};
