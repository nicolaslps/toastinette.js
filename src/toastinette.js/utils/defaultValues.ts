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

enum iconType {
    svg = "svg",
    img = "img",
}
enum defaultSVG {
    default = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z\" clip-rule=\"evenodd\" /></svg>",
    info = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z\" clip-rule=\"evenodd\" /></svg>",
    success = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z\" clip-rule=\"evenodd\" /></svg>",
    warning = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z\" clip-rule=\"evenodd\" /></svg>",
    error = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z\" clip-rule=\"evenodd\" /></svg>",
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
            delay: 0,
            icon: {
                enabled: true,
                type: iconType.svg,
                data: defaultSVG.default,
                customCss: "",
            }
        },
        'info': {
            type: toastTypesValues.INFO,
            title: 'This is the info toasts title',
            message: 'And this is the info toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            delay: 0,
            icon: {
                enabled: true,
                type: iconType.svg,
                data: defaultSVG.info,
                customCss: "",
            }
        },
        'success': {
            type: toastTypesValues.SUCCESS,
            title: 'This is the success toasts title',
            message: 'And this is the success toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            delay: 0,
            icon: {
                enabled: true,
                type: iconType.svg,
                data: defaultSVG.success,
                customCss: "",
            }
        },
        'warning': {
            type: toastTypesValues.WARNING,
            title: 'This is the warning toasts title',
            message: 'And this is the warning toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            delay: 0,
            icon: {
                enabled: true,
                type: iconType.svg,
                data: defaultSVG.warning,
                customCss: "",
            }
        },
        'error': {
            type: toastTypesValues.ERROR,
            title: 'This is the error toasts title',
            message: 'And this is the error toast message',
            position: toastPositionsValues.top_right,
            displayDuration: 5000,
            delay: 0,
            icon: {
                enabled: true,
                type: iconType.svg,
                data: defaultSVG.error,
                customCss: "",
            }
        },
    }
};

export {
    toastTypesValues,
    toastPositionsValues,
    toastersContainerIds,
    iconType,
    defaultSVG,
    defaultToasterOptions
};
