import {ToastProps} from "./utils/types";
import {toastersContainerIds} from "./utils/defaultValues";

export class Toast{
    private toastType: string | undefined;
    private toastTitle: string | undefined;
    private toastMessage: string | undefined;
    private toastPosition: string | undefined;
    private toastDisplayTime: number | undefined;
    private toastElement: HTMLElement;
    private toasters: {[key: string]: HTMLElement|null};

    constructor(props: ToastProps, toasters: {[key: string]: HTMLElement|null}) {
        this.toastType = props.type;
        this.toastTitle = props.title;
        this.toastMessage = props.message;
        this.toastPosition = props.position;
        this.toastDisplayTime = props.displayDuration;
        this.toasters = toasters;

        let toast = this.createHtml();
        this.toastElement = toast;
        this.render(this.toasters);
    }

    getToaster(toasterContainer: {[key: string]: HTMLElement|null} ): HTMLElement
    {
        let defaultElement = document.createElement('div');
        switch (this.toastPosition) {
            case "top-left":
                return toasterContainer[toastersContainerIds.toaster_top_left_container] ?? defaultElement;
                break;
            case "top-center":
                return toasterContainer[toastersContainerIds.toaster_top_center_container] ?? defaultElement;
                break;
            case "top-right":
                return toasterContainer[toastersContainerIds.toaster_top_right_container] ?? defaultElement;
                break;
            case "bottom-left":
                return toasterContainer[toastersContainerIds.toaster_bottom_left_container] ?? defaultElement;
                break;
            case "bottom-center":
                return toasterContainer[toastersContainerIds.toaster_bottom_center_container] ?? defaultElement;
                break;
            case "bottom-right":
                return toasterContainer[toastersContainerIds.toaster_bottom_right_container] ?? defaultElement;
                break;
            default:
                return toasterContainer[toastersContainerIds.toaster_top_right_container] ?? defaultElement;
                break;
        }
    }

    render(toasterContainers: {[key: string]: HTMLElement|null}) {
        let toaster = this.getToaster(toasterContainers)
        toaster.append(this.toastElement);
        this.display();
    }

    createHtml(){
        let toast = document.createElement('div');
        toast.classList.add('toast')
        toast.dataset.toastType = this.toastType;
        // toast.append(tmpl.content.cloneNode(true));

        let toastBody = document.createElement('div');
        toastBody.classList.add('toast-body');
        // let toastIcon = document.createElement('div');
        // toastIcon.classList.add('toast-icon');
        // toastIcon.innerText = "🦄";
        let toastContent = document.createElement('div');
        toastContent.classList.add('toast-content');
        let toastTitle = document.createElement('div');
        toastTitle.classList.add('toast-title');
        if (typeof this.toastTitle === "string") {
            toastTitle.innerText = this.toastTitle;
        }
        let toastText = document.createElement('div');
        toastText.classList.add('toast-text');
        if (typeof this.toastMessage === "string") {
            toastText.innerText = this.toastMessage;
        }
        toastContent.append(toastTitle);
        toastContent.append(toastText);
        // toastBody.append(toastIcon);
        toastBody.append(toastContent);
        let closeButton = document.createElement('div');
        toast.append(toastBody);
        toast.append(closeButton);

        return toast;
    }


    display(){
        setTimeout(() => {
            this.toastElement.classList.add('toast-visible')
        }, 500)

        setTimeout(() => {
            this.hide()
        }, this.toastDisplayTime)
    }

    hide(){
        this.toastElement.classList.remove('toast-visible')
        setTimeout(() => {
            this.toastElement.parentNode?.removeChild(this.toastElement);
        }, 500)
    }
}
