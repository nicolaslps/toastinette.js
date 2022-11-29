import './css/style.scss'
import {Toast} from "./Toast";
import {toastPositions, ToastProps} from "./utils/types";
import {
    defaultToastDefaultOption,
    infoToastDefaultOption,
    successToastDefaultOption,
    warningToastDefaultOption,
    errorToastDefaultOption,
    toastersContainerIds,
    toastTypesValues
} from "./utils/defaultValues";

export class Toaster {
    readonly toasters: {[key: string]: HTMLElement|null} = {
        [toastersContainerIds.toaster_top_left_container]: null,
        [toastersContainerIds.toaster_top_center_container]: null,
        [toastersContainerIds.toaster_top_right_container]: null,
        [toastersContainerIds.toaster_bottom_left_container]: null,
        [toastersContainerIds.toaster_bottom_center_container]: null,
        [toastersContainerIds.toaster_bottom_right_container]: null,
    };

    readonly waitingQueue: Array<Toast>;
    readonly displayedToasts: Array<Toast>;

    constructor() {
        this.waitingQueue = [];
        this.displayedToasts = [];
        this.initDom();

        this.getDomToast();

    }

    initDom() {
        let body: HTMLBodyElement | null = document.querySelector('body');
        if (body == null) throw new Error('body element must be defined')

        //top left
        let topLeftToaster: HTMLElement = document.createElement('div');
        topLeftToaster.id = toastersContainerIds.toaster_top_left_container;
        topLeftToaster.classList.add('toaster-container');
        topLeftToaster.classList.add('toaster-container-left-top');
        body.appendChild(topLeftToaster);
        this.toasters[toastersContainerIds.toaster_top_left_container] = document.getElementById('toaster_top_left_container');

        //top center
        let topCenterToaster: HTMLElement = document.createElement('div');
        topCenterToaster.id = toastersContainerIds.toaster_top_center_container;
        topCenterToaster.classList.add('toaster-container');
        topCenterToaster.classList.add('toaster-container-center-top');
        body.appendChild(topCenterToaster);
        this.toasters[toastersContainerIds.toaster_top_center_container] = document.getElementById('toaster_top_center_container');

        //top right
        let topRightToaster: HTMLElement = document.createElement('div');
        topRightToaster.id = toastersContainerIds.toaster_top_right_container;
        topRightToaster.classList.add('toaster-container');
        topRightToaster.classList.add('toaster-container-right-top');
        body.appendChild(topRightToaster);
        this.toasters[toastersContainerIds.toaster_top_right_container] = document.getElementById('toaster_top_right_container');


        //bottom left
        let bottomLeftToaster: HTMLElement = document.createElement('div');
        bottomLeftToaster.id = toastersContainerIds.toaster_bottom_left_container;
        bottomLeftToaster.classList.add('toaster-container');
        bottomLeftToaster.classList.add('toaster-container-left-bottom');
        body.appendChild(bottomLeftToaster);
        this.toasters[toastersContainerIds.toaster_bottom_left_container] = document.getElementById('toaster_bottom_left_container');


        //bottom center
        let bottomCenterToaster: HTMLElement = document.createElement('div');
        bottomCenterToaster.id = toastersContainerIds.toaster_bottom_center_container;
        bottomCenterToaster.classList.add('toaster-container');
        bottomCenterToaster.classList.add('toaster-container-center-bottom');

        body.appendChild(bottomCenterToaster);
        this.toasters[toastersContainerIds.toaster_bottom_center_container] = document.getElementById('toaster_bottom_center_container');

        //bottom right
        let bottomRightToaster: HTMLElement = document.createElement('div');
        bottomRightToaster.id = toastersContainerIds.toaster_bottom_right_container;
        bottomRightToaster.classList.add('toaster-container');
        bottomRightToaster.classList.add('toaster-container-right-bottom');

        body.appendChild(bottomRightToaster);
        this.toasters[toastersContainerIds.toaster_bottom_right_container] = document.getElementById('toaster_bottom_right_container');


    }

    getDomToast() {
        let domToats = document.querySelectorAll('[data-toaster-toast-package] > [data-toaster-toast]');
            // @ts-ignore
        domToats.forEach((toast: Toast) => {
            if (!(toast instanceof HTMLElement)) {
                return;
            }
            if(toast.dataset == undefined){
                return ;
            }
            // @ts-ignore
            let props = this.getToastDefaultProps(toast.dataset.toasterType);
            // @ts-ignore
            props.type = toast.dataset.toasterType
            // @ts-ignore
            props.title = toast.dataset.toasterTitle
            // @ts-ignore
            props.message = toast.dataset.toasterMessage
            props.position = <toastPositions>toast.dataset.toasterToast
            this.createToast(props);
        })
    }


    createToast(customProps: ToastProps) {
        this.waitingQueue.push(new Toast(customProps, this.toasters))
    }


    getToastDefaultProps(toastType: string): ToastProps {
        switch (toastType){
            case toastTypesValues.DEFAULT:
                return defaultToastDefaultOption;
            case toastTypesValues.INFO:
                return infoToastDefaultOption;
            case toastTypesValues.SUCCESS:
                return successToastDefaultOption;
            case toastTypesValues.WARNING:
                return warningToastDefaultOption;
            case toastTypesValues.ERROR:
                return errorToastDefaultOption;
            default:
                return defaultToastDefaultOption;
        }
    }

    info(title: string, message: string, position: string, displayDuration: number) {
        let props = this.getToastDefaultProps(toastTypesValues.INFO);
        props.title = title;
        props.message = message;
        props.position = <toastPositions>position;
        props.displayDuration = displayDuration;
        this.createToast(props);
    }

    success(title: string, message: string, position: string, displayDuration: number) {
        let props = this.getToastDefaultProps(toastTypesValues.SUCCESS);
        props.title = title;
        props.message = message;
        props.position = <toastPositions>position;
        props.displayDuration = displayDuration;
        this.createToast(props);
    }

    warning(title: string, message: string, position: string, displayDuration: number) {
        let props = this.getToastDefaultProps(toastTypesValues.WARNING);
        props.title = title;
        props.message = message;
        props.position = <toastPositions>position;
        props.displayDuration = displayDuration;
        this.createToast(props);
    }

    error(title: string, message: string, position: string, displayDuration: number) {
        let props = this.getToastDefaultProps(toastTypesValues.ERROR);
        props.title = title;
        props.message = message;
        props.position = <toastPositions>position;
        props.displayDuration = displayDuration;
        this.createToast(props);
    }

    default(title: string, message: string, position: string, displayDuration: number) {
        let props = this.getToastDefaultProps(toastTypesValues.DEFAULT);
        props.title = title;
        props.message = message;
        props.position = <toastPositions>position;
        props.displayDuration = displayDuration;
        this.createToast(props);
    }


    test() {
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-left", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-center", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-right", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "bottom-left", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "bottom-center", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "bottom-right", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-left", 2000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-left", 3000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-left", 5000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-left", 6000)
        // this.createToast('Info', "Test", 'bla bla bla bla bla', "top-left", 2000)
    }
}