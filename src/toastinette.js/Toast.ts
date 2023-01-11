import {mergedToastProps} from './utils/types';
import {iconType, toastersContainerIds} from './utils/defaultValues';

export class Toast {
  private props: mergedToastProps;
  private toastElement: HTMLElement;
  private toasters: { [key: string]: HTMLElement | null };

  constructor(props: mergedToastProps, toasters: { [key: string]: HTMLElement | null }) {
    this.props = props;
    this.toasters = toasters;
    this.toastElement = this.createHtml();

    this.render(this.toasters);
  }

  getToaster(toasterContainer: { [key: string]: HTMLElement | null }): HTMLElement {
    let defaultElement = document.createElement('div');
    switch (this.props.position) {
      case 'top-left':
        return toasterContainer[toastersContainerIds.toaster_top_left_container] ?? defaultElement;
      case 'top-center':
        return toasterContainer[toastersContainerIds.toaster_top_center_container] ?? defaultElement;
      case 'top-right':
        return toasterContainer[toastersContainerIds.toaster_top_right_container] ?? defaultElement;
      case 'bottom-left':
        return toasterContainer[toastersContainerIds.toaster_bottom_left_container] ?? defaultElement;
      case 'bottom-center':
        return toasterContainer[toastersContainerIds.toaster_bottom_center_container] ?? defaultElement;
      case 'bottom-right':
        return toasterContainer[toastersContainerIds.toaster_bottom_right_container] ?? defaultElement;
      default:
        return toasterContainer[toastersContainerIds.toaster_top_right_container] ?? defaultElement;
    }
  }

  render(toasterContainers: { [key: string]: HTMLElement | null }) {
    let toaster = this.getToaster(toasterContainers);
    toaster.append(this.toastElement);
    this.display();
  }

  createHtml() {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(this.props.theme);
    toast.classList.add(this.props.type);
    toast.dataset.toastType = this.props.type;
    // toast.append(tmpl.content.cloneNode(true));

    let toastBody = document.createElement('div');
    toastBody.classList.add('toast-body');




    let toastContent = document.createElement('div');
    toastContent.classList.add('toast-content');
    let toastTitle = document.createElement('div');
    toastTitle.classList.add('toast-title');
    toastTitle.innerText = this.props.title;
    let toastText = document.createElement('div');
    toastText.classList.add('toast-text');
    toastText.innerText = this.props.message;
    toastContent.append(toastTitle);
    toastContent.append(toastText);

    if(this.props.icon.enabled){
      if(this.props.icon.type == iconType.svg){
        let toastIcon = document.createElement('div');
        toastIcon.classList.add('toast-icon');
        toastIcon.innerHTML = this.props.icon.data;
        toastIcon.setAttribute('style', this.props.icon.customCss);
        toastBody.append(toastIcon);
      }
      if(this.props.icon.type == iconType.img){
        let toastIcon = document.createElement('img');
        toastIcon.classList.add('toast-icon');
        toastIcon.src = this.props.icon.data;
        toastIcon.setAttribute('style', this.props.icon.customCss);
        toastBody.append(toastIcon);
      }

    }

    toastBody.append(toastContent);
    toast.append(toastBody);
    let closeButton = document.createElement('div');
    closeButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>';
    closeButton.classList.add('close-toast-button');

    toast.append(closeButton);

    if(this.props.autoClose){
      let progressBar = document.createElement('div');
      progressBar.classList.add('toast-progress-bar');
      progressBar.style.animationDuration = this.props.displayDuration + 'ms';

      toast.append(progressBar);
    }
    toast.onclick = () => this.hide();

    return toast;
  }

  display() {
    setTimeout(() => {
      this.toastElement.classList.add('toast-animate-enter');
    }, 500);

    if(this.props.autoClose){
      setTimeout(() => {
        this.hide();
      }, this.props.displayDuration);
    }
  }

  hide() {
    this.toastElement.classList.remove('toast-animate-enter');
    this.toastElement.classList.add('toast-animate-exit');

    setTimeout(() => {
      this.toastElement.parentNode?.removeChild(this.toastElement);
    }, 800);
  }
}
