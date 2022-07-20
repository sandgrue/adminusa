import axios from "axios";
import { isItNull } from "../containers/functions";
import ApiJson from "./apiJson";
// import {
//     showErrorToast,
//     showSuccessToast,
//     getLocalStorage,
// } from "../helpers/Utils";

let apiFailCounter = 0;


axios.defaults.baseURL = "https://morning-journey-39802.herokuapp.com/api/v1";

// axios.interceptors.request.use(
//     function (config) {
//         let userInfo = getLocalStorage("userInfo");
//         let adminToken = getLocalStorage("adminToken");
//         if (adminToken) {
//             let access_token = adminToken;
//             config.headers.Authorization = `Spike ${access_token}`;
//         }
//         if (userInfo) {
//             if (userInfo.token) {
//                 let access_token = userInfo.token;
//                 config.headers.Authorization = `Spike ${access_token}`;
//                 // config.headers['Content-Type'] = 'multipart/form-data';
//             }
//         }
//         //   console.log('config', config);
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

const prepareDataObject = (_data_, paramObj) => {
    for (let key in _data_) {
        if (paramObj[key] || paramObj[key] === false || paramObj[key] == 0) {
            _data_[key] = paramObj[key];
        } else {
            if (typeof _data_[key] !== "object") _data_[key] = "";
        }
    }
    return _data_;
};

const injectParamsToUrl = (_url_, paramObj) => {
    var url = _url_;
    for (let key in paramObj) {
        url = url.replace(":" + key, paramObj[key]);
    }
    return url;
};


const injectHeaderToken = (token) => {
    return { Authorization: token }
};

// const handleErrorByStatus = (error) => {
//     if (error && error.status === "Error") {
//         const message = error.message;
//         if (message) showErrorToast(message);
//         const message2 = error.error;
//         if (message2) showErrorToast(message2);
//     }
// };

const apiConnector = (apiKeyName, data, token) => {
    let apiDetails = ApiJson[apiKeyName];
    if (!apiDetails) {
        console.log(
            "Config not found in api-json, please check api-json.js"
        );
        throw new Error(
            "Config not found in api-json, please check api-json.js"
        );
    }
    let requestObject = Object.assign({}, apiDetails);
    requestObject.data = prepareDataObject(requestObject.data, data);
    requestObject.url = injectParamsToUrl(requestObject.url, data);
    if (!isItNull(token)) {
        requestObject.headers = injectHeaderToken(token);
    }
    // console.log(requestObject, "working");

    return axios(requestObject)
        .then(function (result) {
            return result.data;
        })
        .catch(function (error) {
            console.log("error", error);
        });
};

export default apiConnector;
