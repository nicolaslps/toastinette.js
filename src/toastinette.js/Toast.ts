import sanitizeHtml from 'sanitize-html';
import {ToastProps} from "./utils/types";
import {toastersContainerIds} from "./utils/defaultValues";

export class Toast{
    private toastType: string;
    private toastTitle: string;
    private toastMessage: string;
    private toastPosition: string;
    private toastDisplayTime: number;
    private toastIcon: string;
    private toastElement: HTMLElement;
    private toasters: {[key: string]: HTMLElement|null};

    constructor(props: ToastProps, toasters: {[key: string]: HTMLElement|null}) {
        this.toastType = props.type;
        this.toastTitle = props.title;
        this.toastMessage = props.message;
        this.toastPosition = props.position;
        this.toastDisplayTime = props.displayDuration;
        this.toastIcon = props.icon;
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
        toast.classList.add("default-theme")
        toast.classList.add(this.toastType)
        toast.dataset.toastType = this.toastType;
        // toast.append(tmpl.content.cloneNode(true));

        let toastBody = document.createElement('div');
        toastBody.classList.add('toast-body');
        let toastIcon = document.createElement('div');
        toastIcon.classList.add('toast-icon');
        if (typeof this.toastIcon === "string") {
            toastIcon.innerHTML = sanitizeHtml(this.toastIcon);
        }
        let toastContent = document.createElement('div');
        toastContent.classList.add('toast-content');
        let toastTitle = document.createElement('div');
        toastTitle.classList.add('toast-title');
        if (typeof this.toastTitle === "string") {
            toastTitle.innerText = sanitizeHtml(this.toastTitle);
        }
        let toastText = document.createElement('div');
        toastText.classList.add('toast-text');
        if (typeof this.toastMessage === "string") {
            toastText.innerText = sanitizeHtml(this.toastMessage);
        }
        toastContent.append(toastTitle);
        toastContent.append(toastText);
        toastBody.append(toastIcon);
        toastBody.append(toastContent);
        toast.append(toastBody);
        let closeButton = document.createElement('div');
        closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>'
        closeButton.classList.add('close-toast-button');

        let progressBar = document.createElement('div');
        progressBar.classList.add('toast-progress-bar');
        progressBar.style.animationDuration = this.toastDisplayTime+"ms";

        toast.append(closeButton);
        toast.append(progressBar);
        toast.onclick = () => this.hide();

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
