// import Cryptr from "cryptr";

// // const Cryptr = require('cryptr');
// const cryptrrrr = new Cryptr('myTotallySecretKey');
// To get local storage data



export const getLocalStorage = (key) => {
    if (key) {
        let data = localStorage.getItem(key);
        if (data) {
            data = JSON.parse(data);
            return data;
        }
    }
    return null;
};



// To set local storage data
export const setLocalStorage = (key, value) => {
    value = JSON.stringify(value);
    // const encodedData = encryptData(value);
    localStorage.setItem(key, value);
};

// export const decryptData = (text) => {
//     return cryptrrrr.decrypt(text);
// };

// //used to encryption of localstorage data
// export const encryptData = (text) => {
//     return cryptrrrr.encrypt(text);
// };










export const isItNull = (data) => {
    if (data === undefined || data === null || data === '' || data.length === 0) {
        return true;
    } else {
        return false;
    }
}