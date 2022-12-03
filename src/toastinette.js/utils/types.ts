import {toastPositionsValues} from "./defaultValues";

type toastPositions =
    toastPositionsValues.top_right
    | toastPositionsValues.top_center
    | toastPositionsValues.top_left
    | toastPositionsValues.bottom_right
    | toastPositionsValues.bottom_center
    | toastPositionsValues.bottom_left;


interface ToastProps {
    type: 'info' | 'success' | 'warning' | 'error' | 'default'
    title: string
    message: string
    position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
    displayDuration: number
    icon: string;
}


export type {
    toastPositions,
    ToastProps,
}





