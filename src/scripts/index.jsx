import React from "react";
import {render} from "react-dom";
import axios from "axios";

import App from "./App";
import "../scss/main.scss";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";   -настройки URL, header по умолчанию 
// axios.defaults.headers.common["Authorixation"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "aplication/json";

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});     - remove axios.interceptors
// axios.interceptors.request.eject(myInterceptor);

render(
    <App />, document.getElementById("root")
)