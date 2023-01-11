import { Toast } from './Toast';
import {ToasterProps, toastPositions, ToastProps} from './utils/types';
import {
  toastersContainerIds,
  toastTypesValues, defaultToasterOptions,
} from './utils/defaultValues';
// @ts-ignore
import {merge} from "./utils/merge.js";

export class Toaster {
  readonly toasters: { [key: string]: HTMLElement | null } = {
    [toastersContainerIds.toaster_top_left_container]: null,
    [toastersContainerIds.toaster_top_center_container]: null,
    [toastersContainerIds.toaster_top_right_container]: null,
    [toastersContainerIds.toaster_bottom_left_container]: null,
    [toastersContainerIds.toaster_bottom_center_container]: null,
    [toastersContainerIds.toaster_bottom_right_container]: null,
  };

  readonly waitingQueue: Array<Toast>;
  options: ToasterProps;

  constructor(options: Object) {
    this.waitingQueue = [];
    this.options = this.processOptions(options);
    this.initDom();

    this.getDomToast();
  }

  processOptions(customOptions: Object): ToasterProps{
    let processedOptions = merge(defaultToasterOptions, customOptions);
    return processedOptions;
  }

  initDom() {
    let body: HTMLBodyElement | null = document.querySelector('body');
    if (body == null) throw new Error('body element must be defined');

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
    let domToats = document.querySelectorAll('[data-toastinette-dom-toast] > [data-toastinette-toast]');
    // @ts-ignore
    domToats.forEach((toast: Toast) => {
      if (!(toast instanceof HTMLElement)) {
        return;
      }
      if (toast.dataset == undefined) {
        return;
      }
      // @ts-ignore
      let props = this.getToastDefaultProps(toast.dataset.toastinetteType);
      // @ts-ignore
      props.type = toast.dataset.toastinetteType;
      // @ts-ignore
      props.title = toast.dataset.toastinetteTitle;
      // @ts-ignore
      props.message = toast.dataset.toastinetteMessage;
      props.position = <toastPositions>toast.dataset.toastinetteToast;
      let mergedProps = props;
      if( toast.dataset.toastinetteOption != null){
        let options = JSON.parse(toast.dataset.toastinetteOption);
        mergedProps = merge(props, options);
      }
      this.createToast(mergedProps);
    });
  }

  createToast(customProps: ToastProps) {
    let options = { ...defaultToasterOptions, ...this.options, ...customProps, ...defaultToasterOptions.toasts[customProps.type]};
    this.waitingQueue.push(new Toast(options, this.toasters));
  }

  getToastDefaultProps(toastType: string): ToastProps {
    switch (toastType) {
      case toastTypesValues.DEFAULT:
        return this.options.toasts[toastTypesValues.DEFAULT];
      case toastTypesValues.INFO:
        return this.options.toasts[toastTypesValues.INFO];
      case toastTypesValues.SUCCESS:
        return this.options.toasts[toastTypesValues.SUCCESS];
      case toastTypesValues.WARNING:
        return this.options.toasts[toastTypesValues.WARNING];
      case toastTypesValues.ERROR:
        return this.options.toasts[toastTypesValues.ERROR];
      default:
        return this.options.toasts[toastTypesValues.DEFAULT];
    }
  }

  // toast(options: ToastProps) {
  //
  // }

  info(title: string, message: string, options: object) {
    // position: string, displayDuration: number
    let props = this.getToastDefaultProps(toastTypesValues.INFO);
    props.title = title;
    props.message = message;
    let mergedProps = merge(props, options);
    this.createToast(mergedProps);
  }

  success(title: string, message: string, options: object) {
    let props = this.getToastDefaultProps(toastTypesValues.SUCCESS);
    props.title = title;
    props.message = message;
    let mergedProps = merge(props, options);
    this.createToast(mergedProps);
  }

  warning(title: string, message: string, options: object) {
    let props = this.getToastDefaultProps(toastTypesValues.WARNING);
    props.title = title;
    props.message = message;
    let mergedProps = merge(props, options);
    this.createToast(mergedProps);
  }

  error(title: string, message: string, options: object) {
    let props = this.getToastDefaultProps(toastTypesValues.ERROR);
    props.title = title;
    props.message = message;
    let mergedProps = merge(props, options);
    this.createToast(mergedProps);
  }

  default(title: string, message: string, options: object) {
    let props = this.getToastDefaultProps(toastTypesValues.DEFAULT);
    props.title = title;
    props.message = message;
    let mergedProps = merge(props, options);
    this.createToast(mergedProps);
  }

}
