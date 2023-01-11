import './toastinette.js/css/main.scss';
import { Toaster } from './toastinette.js';

let toaster = new Toaster({
    autoClose: true,
    theme: 'base',
    toasts: {
        'default': {
            icon: {
                enabled: true,
                type: 'img',
                data: 'https://www.wikicampers.fr/images/illustrations/sequiper.svg?v44',
                customCss: "max-width: 5rem"
            }
        },
    }
});

toaster.info('This is the info toasts title', 'And this is the info toast message', {
    position: 'top-right',
    displayDuration: 1000000
});
toaster.success('This is the info toasts title', 'And this is the info toast message', {
    position: 'top-right',
    displayDuration: 1000000
});
toaster.warning('This is the success toasts title', 'And this is the success toast message', {
    position: 'top-right',
    displayDuration: 1000000
});
toaster.error('This is the warning toasts title', 'And this is the warning toast message', {
    position: 'top-right',
    displayDuration: 1000000
});
toaster.default('This is the error toasts title', 'And this is the error toast message', {
    position: 'top-right',
    displayDuration: 1000000
});
