import './toastinette.js/css/style.scss'
import {Toaster} from "./toastinette.js";

let toaster = new Toaster()

toaster.info( "info", 'bla bla bla bla bla', "top-right", 5000000);
toaster.success( "success", 'bla bla bla bla bla', "top-right", 5000000);
toaster.warning( "warning", 'bla bla bla bla bla', "top-right", 5000000);
toaster.error( "error", 'bla bla bla bla bla', "top-right", 5000000);
toaster.default( "default", 'bla bla bla bla bla', "top-right", 5000000);
