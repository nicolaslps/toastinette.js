<div style="display: flex; justify-content: center" >
    <img alt="Logo" height="300" src="./doc/images/toasterLogo.svg">
</div>
<div style="display: flex; justify-content: center" >

# Toastinette.js
</div>

## (under develpoment. No backward compatibility until stable version)
Toastinette.js is a JS package that allows you to add notifications to your app.
<hr/>

[![](https://img.shields.io/bundlephobia/minzip/toastinette.js?style=for-the-badge)](https://img.shields.io/bundlephobia/minzip/toastinette.js?style=for-the-badge)
[![](https://img.shields.io/npm/l/toastinette.js?style=for-the-badge)](https://img.shields.io/npm/l/toastinette.js?style=for-the-badge)
[![](https://img.shields.io/npm/v/toastinette.js?style=for-the-badge)](https://img.shields.io/npm/v/toastinette.js?style=for-the-badge)
[![](https://data.jsdelivr.com/v1/package/npm/toastinette.js/badge)](https://www.jsdelivr.com/package/npm/toastinette.js)

[//]: # (Add badges from somewhere like: [shields.io]&#40;https://shields.io/&#41;)

[//]: # (## Demo)

## Installation
yarn :

```bash
yarn add toastinette.js
```

npm :

```bash
npm i toastinette.js
```


cdn :

```html
https://cdn.jsdelivr.net/npm/toastinette.js@0.0.5/dist/toastinette.umd.cjs
```



## Documentation

[//]: # ([Documentation]&#40;https://www.google.com/&#41;)
improved documentation will be available when this package reaches a stable release

### Import js and style from toastinette.js

```js
import './toastinette.js/css/style.scss'
import {Toaster} from "./toastinette.js";
```

### Instantiate the toaster

```js
let toaster = new Toaster()
```

## Usage through javascript

### Create toasts using Javascript
```js
toaster.info( title, text, position, time);
```
    type: 'info' | 'success' | 'warning' | 'error' | 'default'
    title: string
    message: string
    position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
    displayDuration: number
    icon: string;


| Option     |   type   |                    Default                    |                                                                 Description                                                                 |
|------------|:--------:|:---------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|
| `title`    | `string` |   `This is the ${toast type} toasts title`    |                                                             Title of the toast                                                              |
| `text`     | `string` | `And this is the ${toast type} toast message` |                                                              Text of the toast                                                              |
| `position` | `string` |                  `top-right`                  | Position of the toast <br/> it can be `top-right` or `top-center` or `top-left` or <br/> `bottom-right` or `bottom-center` or `bottom-left` |
| `time`     | `number` |                    `5000`                     |                                                           Display duration in ms                                                            |

```js
toaster.info( "This is the info toasts title", "And this is the info toast message", "top-right", 10000);
toaster.success( "This is the info toasts title", "And this is the info toast message", "top-right", 20000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "top-right", 15000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "bottom-right", 15000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "top-left", 15000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "bottom-left", 15000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "bottom-left", 15000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "top-center", 15000);
toaster.warning( "This is the success toasts title", "And this is the success toast message", "bottom-center", 15000);
toaster.error( "This is the warning toasts title", "And this is the warning toast message", "top-right", 17000);
toaster.default( "This is the error toasts title", "And this is the error toast message", "top-right", 30000);
```
Result : 
<div style="display: flex; justify-content: center" >
    <img alt="result toasts" width="100%" src="./doc/images/toaster-demo-positions.png">
</div>

## Usage through SSR 

```html
<div data-toaster-toast-package>
    <div data-toaster-toast data-toaster-type="info" data-toaster-title="Test dom 1" data-toaster-message="Test dom message 1"></div>
    <div data-toaster-toast data-toaster-type="success" data-toaster-title="Test dom 2" data-toaster-message="Test dom message 2"></div>
    <div data-toaster-toast data-toaster-type="warning" data-toaster-title="Test dom 3" data-toaster-message="Test dom message 3"></div>
    <div data-toaster-toast data-toaster-type="error" data-toaster-title="Test dom 4" data-toaster-message="Test dom message 4"></div>
</div>
```
Result : 

<div style="display: flex; justify-content: center" >
    <img alt="result toasts" width="45%" src="./doc/images/toaster-demo-dom.png">
</div>

## License
[![](https://img.shields.io/npm/l/toastinette.js?style=for-the-badge)](https://img.shields.io/npm/l/toastinette.js?style=for-the-badge)
